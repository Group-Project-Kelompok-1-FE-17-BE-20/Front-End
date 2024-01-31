import { useEffect, useState } from "react";
import { typeLaptopDetail } from "../utils/interface";
import axios from "axios";
import Cookies from "js-cookie";
import ProfileProduct from "../components/Admin/ProfileProduct";

const ListUsers = () => {
  const authToken = Cookies.get("authToken");
  const [dataUser, setDataUser] = useState<typeLaptopDetail>({
    data: [],
  });

  useEffect(() => {
    const cekData = async () => {
      try {
        const response = await axios.get("https://altalaptop.shop/my-products", {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        });
        setDataUser(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    cekData();
  }, []);

  return (
    <>
      <div id="main-container" className="flex flex-col pt-12 gap-8 font-Poppins">
        <div id="header-info" className="flex flex-col px-20">
          <span id="header-title" className="md:text-3xl text-2xl md:text-left text-center font-Poppins">
            Produk Toko Saya{" "}
          </span>
          <span id="header-description" className="text-[#828282] text-xs md:text-base">
            Lihat informasi mengenai produk saya
          </span>
        </div>

        <div id="users-container" className="flex justify-center items-center">
          <div id="users-list" className="flex flex-col lg:h-[60vh] h-[35vh] gap-5 mb-20 border-2 border-slate-50 p-2 md:p-5 overflow-y-scroll w-[90vw]">
            {dataUser &&
              dataUser.data.map((item: typeLaptopDetail, key: number) => {
                return (
                  <ProfileProduct key={key} storage={item.storage} price={item.price} ram={item.ram} description={item.description} model={item.model} image={item.image} brand={item.brand} processor={item.processor} stock={item.stock} />
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListUsers;
