import { FC } from "react";
import keranjangIcon from "../../img/Keranjang.svg";
import { productDataType } from "../../utils/interface";
import axios from "axios";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Card: FC<productDataType> = (props: productDataType) => {
  const { brand, model, price, processor, ram, storage, cekProduk, allData } = props;
  const navigate = useNavigate();
  const username = Cookies.get("username");

  const addCart = (data: any) => {
    const updateData = { ...data, qty: 1 };
    if (username) {
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
  return (
    <>
      <div className="flex flex-col justify-center items-start shadow-md border-2  border-b-zinc-600 rounded-md md:p-5 p-2 font-Poppins gap-2">
        <img src={`https://source.unsplash.com/random/900x700/?${brand}`} alt="" className="h-full rounded-md" />
        <span className="font-bold text-sm font-Poppins">{`${brand} ${model}`}</span>
        <span className="text-xs">{`${processor} ${ram} ${storage} `}</span>
        <p className="font-extrabold text-red-500 font-sans">${price}</p>
        <div className="flex justify-center items-center w-full md:gap-5 gap-3">
          <button onClick={cekProduk} className="w-[80%] lg:text-base text-xs py-2 bg-[#0396C7] text-white rounded-md">
            Lihat Produk
          </button>
          <button onClick={() => addCart(allData)} className="w-[20%] bg-slate-300 md:py-2 py-[3px] rounded-md flex justify-center items-center">
            <img src={keranjangIcon} className="w-10 p-1  md:w-6 md:p-[0.3px]" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;