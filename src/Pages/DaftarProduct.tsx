import Card from "../components/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const DaftarProduct = () => {
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
            <button className="md:px-5 px-2 py-2 text-xs md:text-base rounded-md bg-[#0396C7] text-white">Semua</button>
            <button className="md:px-5 px-2 py-2 text-xs md:text-base bg-[#DBF6FF] rounded-md">Entry Level</button>
            <button className="md:px-5 px-2 py-2 text-xs md:text-base bg-[#DBF6FF] rounded-md">Mid Range</button>
            <button className="md:px-5 px-2 py-2 text-xs md:text-base bg-[#DBF6FF] rounded-md">High End</button>
          </div>
        </div>

        <div className="content md:my-14 mt-2 pb-10 md:pb-0 flex flex-col justify-center items-center">
          <div className="grid lg:grid-cols-4 grid-cols-2 md:gap-8 gap-2 md:px-5  justify-center items-center w-[90vw]">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default DaftarProduct;
