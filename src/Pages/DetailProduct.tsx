import { FC, useEffect, useState } from "react";
import Header from "../components/Product/Header";
import Footer from "../components/Footer";
import { typeLaptopDetail } from "../utils/interface";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import NumberFormatter from "../components/NumberFormatter";

const DetailProduct: FC = () => {
  const username = Cookies.get("username");
  const navigate = useNavigate();
  const location = useLocation();
  const [detail, setDetail] = useState<typeLaptopDetail>();
  const [number, setNumber] = useState(1);
  const id = parseInt(location.state.id);

  const showDetail = async () => {
    try {
      const response = await axios.get(`https://altalaptop.shop/products/${id}`);
      const filteredData = response.data.data;
      setDetail(filteredData);
    } catch (error) {}
  };

  const addCart = async (data: any) => {
    try {
      const authToken = Cookies.get("authToken");
      const totalPrice = data.price * number;
      const quantity = 1 * number;
      const updateData = { ...data, totalPrice, quantity };

      const userIdToko = await axios.get(`https://altalaptop.shop/stores`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const userId = await axios.get(`https://altalaptop.shop/users`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (userIdToko.data.data[0].UserID === userId.data.data.UserID) {
        Swal.fire({
          title: "Konfirmasi",
          text: `Anda tidak bisa membeli produk sendiri`,
          icon: "warning",
          confirmButtonText: "OK",
          confirmButtonColor: "rgb(3 150 199)",
        }).then((res) => {
          if (res.isConfirmed) {
            navigate("/");
          }
        });
      } else {
        if (username) {
          try {
            await axios.post(
              `https://altalaptop.shop/shopping-cart?productId=${data.id}`, // assuming data has an 'id' property
              updateData,
              {
                headers: {
                  Authorization: `Bearer ${authToken}`,
                  "Content-Type": "multipart/form-data",
                },
              }
            );
            Swal.fire({
              title: "Berhasil",
              text: `Barang sudah ditambahkan ke Keranjang`,
              icon: "success",
              confirmButtonText: "OK",
              confirmButtonColor: "rgb(3 150 199)",
            }).then((res) => {
              if (res.isConfirmed) {
                navigate("/cart");
              }
            });
          } catch (error) {
            console.log("error", error);
          }
        } else {
          Swal.fire({
            title: "Konfirmasi",
            text: `Sebelum membeli Barang, anda Harus Login Dulu`,
            icon: "info",
            showCancelButton: true,
            confirmButtonText: "OK",
            cancelButtonText: "No",
            confirmButtonColor: "rgb(3 150 199)",
          }).then((res) => {
            if (res.isConfirmed) {
              navigate("/login");
            }
          });
        }
      }
    } catch (error) {
      console.error("Error in addCart:", error);
    }
  };

  const clickProduct = () => {
    if (username) {
      addCart(detail);
    } else {
      Swal.fire({
        title: "Konfirmasi",
        text: `Sebelum membeli Barang, anda Harus Login Dulu`,
        icon: "info",
        showCancelButton: true,
        confirmButtonText: "OK",
        cancelButtonText: "No",
        confirmButtonColor: "rgb(3 150 199)",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };

  useEffect(() => {
    showDetail();
  }, [detail]);

  return (
    <>
      <div id="main-container" className="h-screen w-screen">
        <Header />
        <div className="flex justify-center items-center w-full">
          <div id="content-container" className="content flex flex-col md:flex-row justify-center items-center p-5 lg:p-10 mb-20 mt-40 px-3 lg:px-10 shadow-md bg-white  border-[0.5px] border-slate-200 rounded-md gap-8 font-Poppins w-10/12">
            <div id="image-container" className="flex justify-center h-full md:h-[25rem] items-center border-2 border-slate-100 rounded-md shadow-md w-full md:w-1/2 overflow-hidden">
              <img id="product-image" src={`${detail?.image}`} className="w-[90%] h-[90%]  rounded-md" />
            </div>
            <div id="details-container" className="flex flex-col items-start p-2 lg:p-8 md:py-5 justify-start md:h-[25rem] w-full md:w-1/2 gap-5">
              <span id="product-model" className="md:text-3xl text-lg font-bold text-slate-400">
                {detail?.model}
              </span>
              <NumberFormatter value={detail ? detail?.price : ""} />
              <span id="product-info" className="md:text-xl text-sm font-semibold text-slate-500">
                Ram {detail?.ram} | Storage {detail?.storage}
              </span>
              <span id="product-description" className="md:text-sm text-xs font-sans">
                {detail?.description} with processor{" "}
                <span id="processor" className="font-semibold">
                  {detail?.processor}
                </span>
              </span>
              <div id="separator" className="p-[0.5px] bg-slate-400 w-1/2 "></div>
              <div id="quantity-controls" className="flex gap-5">
                <div id="quantity-selector" className="flex justify-center items-center  bg-slate-400 p-2 md:p-3 gap-8 rounded-md text-white">
                  <span className="font-bold text-slate-50 text-xs lg:text-base cursor-pointer" onClick={() => setNumber(number - 1)}>
                    -
                  </span>
                  <span id="quantity-display" className="font-bold text-slate-50 text-xs lg:text-base">
                    {number}
                  </span>
                  <span className="font-bold text-slate-50 text-xs lg:text-base cursor-pointer" onClick={() => setNumber(number + 1)}>
                    +
                  </span>
                </div>
                <button id="add-to-cart" onClick={clickProduct} className="lg:px-16 px-8 text-xs lg:text-base py-2 rounded-lg bg-[#0396C7] text-white w-f">
                  Masukan Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default DetailProduct;
