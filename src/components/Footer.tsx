import { FC } from "react";
import fbIcon from "../img/facebook 1.svg";
import twitterIcon from "../img/twitter 1.svg";
import igIcon from "../img/instagram 1.svg";

const Footer: FC = () => {
  return (
    <footer>
      <div className="flex-col flex md:pt-20 pt-10 justify-center items-center bg-[#F0F9FF]">
        <div className=" flex justify-center items-center gap-2 md:gap-5">
          <div className="grid md:grid-cols-4 grid-cols-2 justify-center items-start gap-5 sm:gap-8 w-[90vw] md:w-[70vw]">
            <div className="flex flex-col gap-2">
              <span className="mb-2 font-Poppins font-semibold md:text-sms ">INFORMASI STOREID</span>
              <span className="text-[#6B7280]">Tentang StoreID</span>
              <span className="text-[#6B7280]">Kebijakan StoreID</span>
              <span className="text-[#6B7280]">Kebijakan Privasi</span>
              <span className="text-[#6B7280]">Blog Computer</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="mb-2 font-Poppins font-semibold ">BANTUAN </span>
              <span className="text-[#6B7280]">Informasi Belanja</span>
              <span className="text-[#6B7280]">Pengembalian Dana</span>
              <span className="text-[#6B7280]">Cara Memesan</span>
              <span className="text-[#6B7280]">Cara Melacak</span>
              <span className="text-[#6B7280]">Metode Pembayaran</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="mb-2 font-Poppins font-semibold text-sm">LAYANAN PELANGGAN</span>
              <span className="text-[#6B7280]">Hubungi Kami</span>
              <span className="text-[#6B7280]">Pembayaran</span>
              <span className="text-[#6B7280]">Bonus Point</span>
              <span className="text-[#6B7280]">Pemberitahuan</span>
            </div>

            <div className="flex flex-col gap-2 md:w-[30vw] w-[43vw] ">
              <span className="mb-2 font-Poppins font-semibold text-sm">KONTAK MEDIA</span>
              <div className="flex gap-3">
                <img src={fbIcon} />
                <img src={twitterIcon} />
                <img src={igIcon} />
              </div>
              <span className="text-[0.6em]">Bergabung bersama kami untuk mengikuti perkembangan aplikasi</span>
              <div className="flex gap-2 md:flex-row flex-col">
                <input type="text" placeholder="Masukkan emailmu..." className="md:px-3 p-2 md:text-base text-xs" />
                <button className="px-5 py-2 bg-[#0396C7] text-white">BERGABUNG</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex-col flex mt-20 gap-3 w-full justify-center items-center font-Poppins py-10 bg-blue-100 shadow-md">
          <span className="font-bold text-2xl font-Poppins text-slate-600">©2023 StoreID</span>
          <div className="bg-blue-300 w-1/6 p-[1px]"></div>
          <div className="flex gap-3">
            <span className="text-[#6B7280] text-xs md:text-sm">Privacy Center</span>
            <span className="text-[#6B7280] text-xs md:text-sm">Privacy & Cookie Policy</span>
            <span className="text-[#6B7280] text-xs md:text-sm">Manage Cookies</span>
          </div>
          <div className="flex gap-3">
            <span className="text-[#6B7280]  text-xs md:text-sm">Terms & Conditions</span>
            <span className="text-[#6B7280]  text-xs md:text-sm">Copyright Notice</span>
            <span className="text-[#6B7280]  text-xs md:text-sm">Imprint</span>
          </div>{" "}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
