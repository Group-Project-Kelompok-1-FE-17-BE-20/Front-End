import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { lapData } from "../utils/interface";
import { useNavigate } from "react-router-dom";

const DaftarProduct = () => {
  const navigate = useNavigate();
  const [activeButton, setActiveButton] = useState("Semua");
  const [laptopData, setLapData] = useState<lapData>({
    data: [],
  });

  const getProduct = async () => {
    try {
      const response = await axios.get("https://freetestapi.com/api/v1/laptops");
      setLapData((prev) => ({ ...prev, data: response.data }));
    } catch (error) {
      console.log(error);
    }
  };

  const clickProduct = async (id: any) => {
    if (id) {
      navigate(`/detail-produk/${id}`, {
        state: {
          id: `${id}`,
        },
      });
    }
  };

  useEffect(() => {
    getProduct();
  }, []);
  return (
    <>
      <div className="main h-screen w-screen bg-white overflow-y-scroll">
        <Navbar />
        <div className="flex flex-col justify-center items-center gap-3 md:pt-[24vh] pt-[18vh] md:h-[45vh] h-[40vh]">
          <span className="font-semibold text-[#484848] text-2xl md:text-4xl font-Poppins">Daftar Produk</span>
          <p className="tracking-wide md:w-[50vw] w-[100vw] px-3 text-center text-xs md:text-sm font-Poppins  text-[#8A8A8A]">
            Menemukan pengalaman komputasi terbaik dengan koleksi laptop terbaru kami. Performa canggih dan desain yang elegan
          </p>
          <div className="sm:w-[50vw] w-[90vw] grid grid-cols-4 mt-3 justify-center items-center md:gap-4 gap-2 text-[#828282]">
            <button className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${activeButton === "Semua" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`} onClick={() => setActiveButton("Semua")}>
              Semua
            </button>
            <button className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${activeButton === "Entry Level" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`} onClick={() => setActiveButton("Entry Level")}>
              Entry Level
            </button>
            <button className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${activeButton === "Mid Range" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`} onClick={() => setActiveButton("Mid Range")}>
              Mid Range
            </button>
            <button className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${activeButton === "High End" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`} onClick={() => setActiveButton("High End")}>
              High End
            </button>
          </div>
        </div>

        <div className="content md:my-14 mt-2 pb-10 md:pb-0 flex flex-col justify-center items-center">
          <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-8 gap-2 md:px-5  justify-center items-center w-[90vw]">
            {laptopData?.data &&
              laptopData.data.map((item: any, id: any) => <Card key={id} brand={item.brand} model={item.model} processor={item.processor} price={item.price} ram={item.ram} storage={item.storage} cekProduk={() => clickProduct(item.id)} />)}
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DaftarProduct;
