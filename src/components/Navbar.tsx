// import React from 'react'
import searchImg from "../img/Frame.svg";
import keranjangImg from "../img/Keranjang.svg";
import orangImg from "../img/Person.svg";

const Navbar = () => {
  return (
    <nav className="h-[15vh] flex justify-around items-center fixed shadow-md w-full z-10 bg-white">
      <span className="text-3xl font-bold text-[#0396C7]">StoreID</span>
      <div className=" justify-center items-center gap-5 middle hidden sm:flex">
        {/* <span className="font-normal text-[#828282]">Beranda</span>
        <span className={`font-normal text-[#0396C7]`}>Produk</span> */}
        <div className="div flex gap-2 px-3 w-[30vw] ml-[7vw] justify-center items-center rounded-2xl py-2 bg-[#F5F5F5] ">
          <img src={searchImg} />
          <input className="w-full rounded-md px-5 bg-[#F5F5F5]" type="text" placeholder="Cari produk yang kamu inginkan.." />
        </div>
      </div>
      <div className="flex gap-5">
        <img src={keranjangImg} width={30} />
        <div className="sm:flex hidden justify-center items-center gap-3">
          <span>Abdulah Alkohar</span>
          <img src={orangImg} width={35} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
