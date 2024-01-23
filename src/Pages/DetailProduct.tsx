import { FC, useEffect, useState } from "react";
import Header from "../components/Product/Header";
import Footer from "../components/Footer";
import { typeLaptopDetail } from "../utils/interface";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

const DetailProduct: FC = () => {
  const username = Cookies.get("username");
  const navigate = useNavigate();
  const location = useLocation();
  const [detail, setDetail] = useState<typeLaptopDetail>();
  const [number, setNumber] = useState(1);

  const showDetail = async () => {
    try {
      const response = await axios.get(`https://freetestapi.com/api/v1/laptops`);
      const id = parseInt(location.state.id);
      const filteredData = response.data.find((item: any) => item.id === id);
      setDetail(filteredData);
    } catch (error) {}
  };

  const addCart = (data: any) => {
    const price = data.price * number;
    const qty = 1 * number;
    const updateData = { ...data, price, qty };
    try {
      axios.post(`https://65acaf53adbd5aa31bdf714f.mockapi.io/Keranjang`, updateData).then(() => {
        Swal.fire({
          title: "Berhasil",
          text: `Barang sudah ditambahkan ke Keranjang`,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "rgb(3 150 199)",
        });
      });
    } catch (error) {
      console.log("error", error);
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
      <div className="h-screen w-screen">
        <Header />

        <div className="flex justify-center items-center w-full">
          <div className="content flex flex-col md:flex-row justify-center items-center p-5 lg:p-10 mb-20 mt-40 px-3 lg:px-10 shadow-md bg-white  border-[0.5px] border-slate-200 rounded-md gap-8 font-Poppins w-10/12">
            <div className="flex justify-center h-full md:h-[25rem] items-center w-full md:w-1/2 overflow-hidden">
              <img src={`https://source.unsplash.com/random/900x700/?${detail?.brand}`} className="w-[90%] h-[90%]  rounded-md" />
            </div>
            <div className="flex flex-col items-start p-2 lg:p-8 md:py-5 justify-start md:h-[25rem] w-full md:w-1/2 gap-5">
              <span className="md:text-3xl text-lg font-bold text-slate-400">{detail?.model}</span>
              <span className="md:text-xl text-sm font-semibold text-red-500">{detail?.price}</span>
              <span className="md:text-xl text-sm font-semibold text-slate-500 ">
                Ram {detail?.ram} | Storage {detail?.storage}
              </span>
              <span className="md:text-sm text-xs font-sans">
                {detail?.description} with processor <span className="font-semibold">{detail?.processor}</span>
              </span>
              <div className="p-[0.5px] bg-slate-400 w-1/2 "></div>
              <div className="flex gap-5">
                <div className="flex justify-center items-center  bg-slate-400 p-2 md:p-3 gap-8 rounded-md text-white">
                  <span className="font-bold text-slate-50 text-xs lg:text-base cursor-pointer" onClick={() => setNumber(number - 1)}>
                    -
                  </span>
                  <span className="font-bold text-slate-50 text-xs lg:text-base">{number}</span>
                  <span className="font-bold text-slate-50 text-xs lg:text-base cursor-pointer" onClick={() => setNumber(number + 1)}>
                    +
                  </span>
                </div>
                <button onClick={clickProduct} className="lg:px-16 px-8 text-xs lg:text-base py-2 rounded-lg bg-[#0396C7] text-white w-f">
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