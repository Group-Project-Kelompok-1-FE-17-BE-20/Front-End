import Footer from "../components/Footer";
import Header from "../components/Product/Header";
import ProfileUsers from "../components/Admin/ProfileUsers";
import { useEffect, useState } from "react";
import { userDataType } from "../utils/interface";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const ListUsers = () => {
  const username = Cookies.get("username");
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState<userDataType>({
    data: [],
  });

  useEffect(() => {
    if (username !== "admin") {
      navigate("/login");
    } else {
      const cekData = async () => {
        try {
          const response = await axios.get("https://altalaptop.shop/alluser");
          setDataUser(response.data);
        } catch (error) {
          console.log(error);
        }
      };
      cekData();
    }
  }, []);

  return (
    <>
      <Header />
      <div id="main-container" className="flex flex-col pt-44 gap-8 font-Poppins">
        <div id="header-info" className="flex flex-col px-20">
          <span id="header-title" className="md:text-3xl text-2xl md:text-left text-center font-Poppins">
            Daftar Users
          </span>
          <span id="header-description" className="text-[#828282] text-xs md:text-base">
            Lihat informasi mengenai users
          </span>
        </div>

        <div id="users-container" className="flex justify-center items-center">
          <div id="users-list" className="flex flex-col lg:h-[60vh] h-[35vh] gap-5 mb-20 border-2 border-slate-50 p-2 md:p-5 overflow-y-scroll w-[90vw]">
            {dataUser.data &&
              dataUser.data.map((item: any, key: number) => {
                return <ProfileUsers key={key} id={`user-${key}`} username={item.username} nama={item.nama_lengkap} email={item.email} no_hp={item.nomor_hp} />;
              })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListUsers;
