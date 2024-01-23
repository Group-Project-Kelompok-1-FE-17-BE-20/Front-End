import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Product/Card";
import { lapData } from "../utils/interface";
import { useNavigate } from "react-router-dom";

const DaftarProduct = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("Semua");
  const [laptopData, setLapData] = useState<lapData>({
    data: [],
  });

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleCategory = (category: any) => {
    setCategory(category);
    setCurrentPage(1);
  };

  const getProduct = async () => {
    try {
      const response = await axios.get("https://freetestapi.com/api/v1/laptops");
      const laptopWithdata = response.data.map((item: any) => {
        if (item.price < 1000) {
          item.category = "Entry Level";
        } else if (item.price >= 1000 && item.price < 1200) {
          item.category = "Mid Range";
        } else {
          item.category = "High End";
        }
        return item;
      });

      const filteredData = category === "Semua" ? laptopWithdata : laptopWithdata.filter((item: any) => item.category === category);
      setLapData((prev) => ({ ...prev, data: filteredData }));
    } catch (error) {
      console.log(error);
    }
  };

  const clickProduct = async (id: any) => {
    if (id) {
      navigate(`/detail-product/${id}`, {
        state: {
          id: `${id}`,
        },
      });
    }
  };

  const totalPages = Math.ceil(laptopData.data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = laptopData.data.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    getProduct();
  }, [category]);

  return (
    <>
      <div className="main h-screen w-screen bg-white overflow-y-scroll">
        <Navbar />
        <div className="flex flex-col justify-center items-center gap-3 lg:pt-[30vh] md:pt-[10vh] pt-[18vh] lg:h-[45vh] h-[40vh]">
          <span className="font-semibold text-[#484848] text-2xl md:text-4xl font-Poppins">Daftar Produk</span>
          <p className="tracking-wide md:w-[50vw] w-[100vw] px-3 text-center text-xs md:text-sm font-Poppins  text-[#8A8A8A]">
            Menemukan pengalaman komputasi terbaik dengan koleksi laptop terbaru kami. Performa canggih dan desain yang elegan
          </p>
          <div className="lg:w-[50vw] md:[60vw] w-[90vw] grid grid-cols-4 mt-3 justify-center items-center md:gap-4 gap-2 text-[#828282]">
            <button className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${category === "Semua" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`} onClick={() => handleCategory("Semua")}>
              Semua
            </button>
            <button className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${category === "Entry Level" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`} onClick={() => handleCategory("Entry Level")}>
              Entry Level
            </button>
            <button className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${category === "Mid Range" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`} onClick={() => handleCategory("Mid Range")}>
              Mid Range
            </button>
            <button className={`md:px-5 px-2 py-2 text-xs md:text-base rounded-md ${category === "High End" ? "bg-[#0396C7] text-white" : "bg-[#DBF6FF]"}`} onClick={() => handleCategory("High End")}>
              High End
            </button>
          </div>
        </div>

        <div className="content md:my-16 mt-2 pb-10 md:pb-0 flex flex-col justify-center items-center">
          <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-8 gap-2 md:px-5  justify-center items-center w-[90vw]">
            {currentItems ? (
              currentItems.map((item: any, id: any) => (
                <Card key={id} brand={item.brand} model={item.model} allData={item} processor={item.processor} price={item.price} ram={item.ram} storage={item.storage} cekProduk={() => clickProduct(item.id)} />
              ))
            ) : (
              <div className="flex justify-center items-center text-5xl">
                <h1>Data Tidak ditemukan</h1>
              </div>
            )}
          </div>
        </div>

        <div className="flex justify-center my-4 gap-8">
          <button
            className={currentPage === 1 ? `rounded-full p-3 border-2 border-slate-400` : `bg-[#0396C7] text-white rounded-full p-3 border-2 border-slate-400`}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Sebelumnya
          </button>

          {Array.from({ length: totalPages }, (_, index) => (
            <button key={index} onClick={() => setCurrentPage(index + 1)} disabled={currentPage === index + 1}>
              {index + 1}
            </button>
          ))}

          <button
            className={currentPage === totalPages ? ` rounded-full p-3 border-2 border-slate-400` : `bg-[#0396C7] text-white rounded-full p-3 border-2 border-slate-400`}
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Selanjutnya
          </button>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DaftarProduct;
