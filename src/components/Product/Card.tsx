import NumberFormatter from "../NumberFormatter";
import { FC } from "react";
import keranjangIcon from "../../img/Keranjang.svg";
import { productDataType } from "../../utils/interface";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Card: FC<productDataType> = (props: productDataType) => {
  const { model, price, processor, ram, storage, cekProduk, allData, gambar, id } = props;
  const navigate = useNavigate();
  const username = Cookies.get("username");

  const addCart = async (data: any, id: any) => {
    try {
      const authToken = Cookies.get("authToken");
      const totalPrice = price;
      const updateData = { ...data, totalPrice, quantity: 1 };

      const userIdToko = await axios.get(`https://altalaptop.shop/stores`, {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      const userId = await axios.get(`http://altalaptop.shop/users`, {
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
            await axios.post(`http://34.41.81.93:8083/shopping-cart?productId=${id}`, updateData, {
              headers: {
                Authorization: `Bearer ${authToken}`,
                "Content-Type": "multipart/form-data",
              },
            });

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
            console.error("Error while adding to cart:", error);
          }
        } else {
          Swal.fire({
            title: "Konfirmasi",
            text: `Sebelum membeli barang, anda harus login dulu`,
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

  return (
    <>
      <div id={`card-${id}`} className="flex flex-col justify-center items-start shadow-md border-2  border-b-zinc-600 rounded-md md:p-5 p-2 font-Poppins gap-2">
        <img id={`image-${id}`} src={`${gambar}`} alt="" className="h-full rounded-md" />
        <span id={`model-${id}`} className="font-bold text-sm font-Poppins">{`${model}`}</span>
        <span id={`details-${id}`} className="text-xs">{`${processor} ${ram} ${storage} `}</span>
        <NumberFormatter value={price} />
        <div className="flex justify-center items-center w-full md:gap-5 gap-3">
          <button onClick={cekProduk} id={`view-product-${id}`} className="w-[80%] lg:text-base text-xs py-2 bg-[#0396C7] text-white rounded-md">
            Lihat Produk
          </button>
          <button onClick={() => addCart(allData, id)} id={`add-to-cart-${id}`} className="w-[20%] bg-slate-300 md:py-2 py-[3px] rounded-md flex justify-center items-center">
            <img src={keranjangIcon} className="w-10 p-1  md:w-6 md:p-[0.3px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
