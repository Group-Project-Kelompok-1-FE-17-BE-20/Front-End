import { useState } from "react";
import { typeLaptopDetail } from "../utils/interface";
import axios from "axios";
import Cookies from "js-cookie";
import ProfileProduct from "../components/Admin/ProfileProduct";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const ListProduct = () => {
  const authToken = Cookies.get("authToken");
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState<typeLaptopDetail>({
    data: [],
  });

  const ubahData = (id: any) => {
    if (id) {
      navigate(`/editproduk/${id}`, {
        state: {
          id: `${id}`,
        },
      });
    }
  };

  const hapusData = (id: any) => {
    Swal.fire({
      title: "Confirmation",
      text: "Apakah anda yakin mau menghapus data",
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "NO",
      confirmButtonColor: "rgb(255 10 10)",
    }).then((res) => {
      if (res.isConfirmed) {
        axios
          .delete(`http://altalaptop.shop/products/${id}`, {
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          })
          .then(() => {
            Swal.fire({
              title: "Confirmation",
              text: "Data Berhasil di hapus",
              icon: "question",
              confirmButtonText: "OK",
              confirmButtonColor: "rgb(255 10 10)",
            });
          });
      }
    });
  };

  const cekData = async () => {
    try {
      const response = await axios.get("https://altalaptop.shop/my-products", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });
      setDataUser(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  cekData();

  return (
    <>
      <div id="main-container" className="flex flex-col pt-12 gap-8 font-Poppins">
        <div id="header-info" className="flex flex-col px-10 md:px-20">
          <span id="header-title" className="md:text-3xl text-2xl md:text-left text-center font-Poppins">
            Produk Toko Saya
          </span>
          <span id="header-description" className="text-[#828282] text-xs md:text-base md:text-left text-center">
            Lihat informasi mengenai produk saya
          </span>
        </div>

        <div id="users-container" className="flex justify-center items-center">
          <div id="users-list" className="flex flex-col lg:h-[60vh] h-[35vh] gap-5 mb-20 border-2 border-slate-50 p-2 md:p-5 overflow-y-scroll w-[90vw]">
            {dataUser &&
              dataUser.data &&
              dataUser.data.length > 0 &&
              dataUser.data.map((item: typeLaptopDetail, key: number) => (
                <ProfileProduct
                  key={key}
                  storage={item.storage}
                  ubah={() => ubahData(item.id)}
                  price={item.price}
                  ram={item.ram}
                  description={item.description}
                  model={item.model}
                  gambar={item.gambar}
                  brand={item.brand}
                  processor={item.processor}
                  stock={item.stock}
                  hapus={() => hapusData(item.id)}
                />
              ))}

            {(!dataUser || !dataUser.data || dataUser.data.length === 0) && (
              <div className="flex items-center w-full justify-center h-[20vh] md:h-40">
                <p className="text-2xl text-gray-500">Tidak ada data.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListProduct;
