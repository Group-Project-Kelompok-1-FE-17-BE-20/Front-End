import { FC } from "react";
import Footer from "../components/Footer";
import Header from "../components/Product/Header";
import { useState } from "react";
import { bankData } from "../utils/payment";
import PaymentButton from "../components/PaymentButton";
import { walletData } from "../utils/payment";

const Payment: FC = () => {
  const [showPayment, setShow] = useState(false);
  const [showWallet, setShowWallet] = useState(false);

  const changeShow = () => {
    setShow(!showPayment);
  };

  const changeWallet = () => {
    setShowWallet(!showWallet);
  };

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center pt-44 gap-8 font-Poppins">
        <div className="flex flex-col px-10 gap-3">
          <span className="text-2xl md:text-3xl lg:text-4xl text-center font-Poppins">Pembayaran</span>
          <span className="text-[#828282] text-center text-xs md:text-base">Lakukan Pembayaran untuk produk</span>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 h-auto my-20 font-Poppins">
        <div className="flex flex-col justify-center gap-3">
          <span className="font-semibold md:text-base text-sm">Pengguna</span>
          <input type="text" className="p-2 bg-[#F6F6F6] rounded-md" placeholder="Masukan Nama Pengguna" />
          <span className="font-semibold md:text-base text-sm">Alamat</span>
          <input type="text" className="p-2 bg-[#F6F6F6] rounded-md" placeholder="Masukan Alamat" />

          <div className="flex justify-between">
            <span className="font-semibold md:text-base text-sm">Metode Pembayaran</span>
          </div>

          <div className="lg:w-[567px] w-[90vw] h-[206px] relative bg-white rounded shadow">
            <div className="pl-[23px] pr-5 pt-[17.81px] pb-[15px] left-[19px] top-[21px] absolute bg-orange-100 rounded-[3px] shadow border border-zinc-400 justify-center items-start lg:gap-[187px] inline-flex">
              <div className="text-amber-500 text-base font-normal font-['Inter'] leading-relaxed">Silakan pilih metode pembayaranmu</div>
              <img className="w-7 h-7 rounded" src="https://img.icons8.com/?size=48&id=63263&format=png" />
            </div>
            <div className="left-[78px] top-[118.64px] absolute text-gray-600 text-[0.8rem] md:text-2xl font-bold font-Poppins leading-9">Bank Transfer Virtual Account</div>
            <div className="left-[78px] top-[159.81px] absolute text-neutral-300 text-xs md:text-base font-normal font-['Inter'] leading-relaxed">Proses otomatis dan lebih cepat</div>
            <img className="w-9 h-10 left-[18px] top-[118px] absolute rounded" src="https://image.shutterstock.com/image-vector/bank-icon-260nw-435428170.jpg" />
            <img onClick={changeShow} className="cursor-pointer w-[29px] h-[29px] right-4 md:left-[495px] top-[137px] absolute rounded" src="https://img.icons8.com/ios/50/expand-arrow--v2.png" />
          </div>

          {showPayment &&
            bankData.banks.map((item: any) => {
              return <PaymentButton gambar={item.gambar} value={item.name} />;
            })}

          <div className="lg:w-[567px] w-[90vw] h-20 relative bg-white rounded shadow">
            <div className="left-[77px] top-[25.14px] absolute text-gray-600 text-[0.8rem] md:text-2xl font-bold font-Poppins leading-9">E-Walet</div>
            <img className="w-[35px] h-[33px] left-[19px] top-[22px] absolute rounded" src="https://img.icons8.com/?size=64&id=hZIe22ZBukYv&format=png" />
            <img onClick={changeWallet} className="cursor-pointer w-[31px] h-[31px] right-4 md:left-[495px] top-[22px] absolute rounded" src="https://img.icons8.com/ios/50/expand-arrow--v2.png" />
          </div>

          {showWallet &&
            walletData.banks.map((item: any) => {
              return <PaymentButton gambar={item.gambar} value={item.name} />;
            })}

          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center my-10 font-semibold bg-sky-600 w-full md:w-1/2 text-white py-2.5 rounded-md">Lanjutkan Pembayaran</div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Payment;
