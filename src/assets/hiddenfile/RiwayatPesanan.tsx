// import React from 'react'

import Footer from "../../components/Footer";
import Header from "../../components/Navbar";
import imagesData from "../..h-1/3img/image 8.png";

const RiwayatPesanan = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col pt-44 gap-8">
        <div className="flex flex-col px-20">
          <span className="text-3xl">Riwayat Pesanan Saya</span>
          <span className="text-[#828282]">Lihat riwayat pesanan anda yang sudah selesai ataupun yang sedang berlangsung</span>
        </div>

        <div className="flex justify-center items-start gap-8 w-screen px-20">
          <div className="flex flex-col gap-10 shadow-md w-3/12 p-2 h-[60vh]">
            <button className="flex justify-center items-center px-5 py-3 bg-[#D0E9FEB2] gap-3 rounded-lg">
              <div className="div rounded-full bg-[#0396C7]">
                <svg width="25" height="25" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 14.4762V10.8762C10 10.5028 10 10.3161 9.92734 10.1735C9.86342 10.0481 9.76144 9.94611 9.63599 9.88219C9.49339 9.80953 9.3067 9.80953 8.93333 9.80953H7.06667C6.6933 9.80953 6.50661 9.80953 6.36401 9.88219C6.23857 9.94611 6.13658 10.0481 6.07266 10.1735C6 10.3161 6 10.5028 6 10.8762V14.4762M2 5.14286C2 6.24743 2.89543 7.14286 4 7.14286C5.10457 7.14286 6 6.24743 6 5.14286C6 6.24743 6.89543 7.14286 8 7.14286C9.10457 7.14286 10 6.24743 10 5.14286C10 6.24743 10.8954 7.14286 12 7.14286C13.1046 7.14286 14 6.24743 14 5.14286M4.13333 14.4762H11.8667C12.6134 14.4762 12.9868 14.4762 13.272 14.3309C13.5229 14.203 13.7268 13.9991 13.8547 13.7482C14 13.463 14 13.0896 14 12.3429V4.60953C14 3.86279 14 3.48942 13.8547 3.20421C13.7268 2.95333 13.5229 2.74935 13.272 2.62152C12.9868 2.4762 12.6134 2.4762 11.8667 2.4762H4.13333C3.3866 2.4762 3.01323 2.4762 2.72801 2.62152C2.47713 2.74935 2.27316 2.95333 2.14532 3.20421C2 3.48942 2 3.86279 2 4.60953V12.3429C2 13.0896 2 13.463 2.14532 13.7482C2.27316 13.9991 2.47713 14.203 2.72801 14.3309C3.01323 14.4762 3.3866 14.4762 4.13333 14.4762Z"
                    stroke={"white"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
              </div>
              <div className="flex items-start  flex-col text-[#0396C7] w-full">
                <span className="text-xs w-[100%]">Ubah foto profil, nama pengguna, dll</span>
              </div>
            </button>
            <button className="flex justify-center items-center px-5 py-3 bg-[#D0E9FEB2] gap-3 rounded-lg">
              <div className="div rounded-full p-3 bg-[#0396C7]">
                <svg width="20" height="20" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 14.4762V10.8762C10 10.5028 10 10.3161 9.92734 10.1735C9.86342 10.0481 9.76144 9.94611 9.63599 9.88219C9.49339 9.80953 9.3067 9.80953 8.93333 9.80953H7.06667C6.6933 9.80953 6.50661 9.80953 6.36401 9.88219C6.23857 9.94611 6.13658 10.0481 6.07266 10.1735C6 10.3161 6 10.5028 6 10.8762V14.4762M2 5.14286C2 6.24743 2.89543 7.14286 4 7.14286C5.10457 7.14286 6 6.24743 6 5.14286C6 6.24743 6.89543 7.14286 8 7.14286C9.10457 7.14286 10 6.24743 10 5.14286C10 6.24743 10.8954 7.14286 12 7.14286C13.1046 7.14286 14 6.24743 14 5.14286M4.13333 14.4762H11.8667C12.6134 14.4762 12.9868 14.4762 13.272 14.3309C13.5229 14.203 13.7268 13.9991 13.8547 13.7482C14 13.463 14 13.0896 14 12.3429V4.60953C14 3.86279 14 3.48942 13.8547 3.20421C13.7268 2.95333 13.5229 2.74935 13.272 2.62152C12.9868 2.4762 12.6134 2.4762 11.8667 2.4762H4.13333C3.3866 2.4762 3.01323 2.4762 2.72801 2.62152C2.47713 2.74935 2.27316 2.95333 2.14532 3.20421C2 3.48942 2 3.86279 2 4.60953V12.3429C2 13.0896 2 13.463 2.14532 13.7482C2.27316 13.9991 2.47713 14.203 2.72801 14.3309C3.01323 14.4762 3.3866 14.4762 4.13333 14.4762Z"
                    stroke={"white"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
              </div>
              <div className="flex items-start  flex-col text-[#0396C7] w-full">
                <span className="text-md">Notifikasi</span>
                <span className="text-xs w-[100%]">Pembayaran, Pesanan, Pembaruan</span>
              </div>
            </button>
            <button className="flex justify-center items-center px-5 py-3 bg-[#D0E9FEB2] gap-3 rounded-lg">
              <div className="div rounded-full bg-[#0396C7]">
                <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 14.4762V10.8762C10 10.5028 10 10.3161 9.92734 10.1735C9.86342 10.0481 9.76144 9.94611 9.63599 9.88219C9.49339 9.80953 9.3067 9.80953 8.93333 9.80953H7.06667C6.6933 9.80953 6.50661 9.80953 6.36401 9.88219C6.23857 9.94611 6.13658 10.0481 6.07266 10.1735C6 10.3161 6 10.5028 6 10.8762V14.4762M2 5.14286C2 6.24743 2.89543 7.14286 4 7.14286C5.10457 7.14286 6 6.24743 6 5.14286C6 6.24743 6.89543 7.14286 8 7.14286C9.10457 7.14286 10 6.24743 10 5.14286C10 6.24743 10.8954 7.14286 12 7.14286C13.1046 7.14286 14 6.24743 14 5.14286M4.13333 14.4762H11.8667C12.6134 14.4762 12.9868 14.4762 13.272 14.3309C13.5229 14.203 13.7268 13.9991 13.8547 13.7482C14 13.463 14 13.0896 14 12.3429V4.60953C14 3.86279 14 3.48942 13.8547 3.20421C13.7268 2.95333 13.5229 2.74935 13.272 2.62152C12.9868 2.4762 12.6134 2.4762 11.8667 2.4762H4.13333C3.3866 2.4762 3.01323 2.4762 2.72801 2.62152C2.47713 2.74935 2.27316 2.95333 2.14532 3.20421C2 3.48942 2 3.86279 2 4.60953V12.3429C2 13.0896 2 13.463 2.14532 13.7482C2.27316 13.9991 2.47713 14.203 2.72801 14.3309C3.01323 14.4762 3.3866 14.4762 4.13333 14.4762Z"
                    stroke={"white"}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>{" "}
              </div>
              <div className="flex items-start  flex-col text-[#0396C7] w-full">
                <span className="text-md">Riwayat Pesanan</span>
                <span className="text-xs">Lihat riwayat pesanan anda</span>
              </div>
            </button>
          </div>

          <div className="flex flex-col gap-3 w-9/12">
            <div className="flex gap-5">
              <span>Semua</span>
              <span>Dibatalkan</span>
              <span>Selesai</span>
            </div>

            <div className="flex flex-col">
              <div className="flex flex-col">
                <div className="card bg-blue-500">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                      <span>Fashionku Shop</span>
                      <span>Kunjungi Toko</span>
                    </div>
                    <div className="div">
                      <span>Selesai</span>
                    </div>
                  </div>
                </div>
                <div className="line bg-slate-400 p-[1.2px]"></div>

                <div className="div flex">
                  <div>
                    <img src={imagesData} alt="img" />
                  </div>

                  <div className="flex flex-col">
                    <span>Kemeja Wanita Loose Fit Cardinal G0J2H</span>
                    <span>Ukuran : Large</span>
                    <span>Warna : White</span>
                    <span className="text-[#0396C7]">x 1</span>
                  </div>

                  <div className="flex place-items-end">
                    <span>Total Pesanan</span>
                    <span>Rp 99.000</span>
                  </div>
                </div>

                <div className="line bg-slate-400 p-[1.2px]"></div>
                <div className="flex justify-end bg-orange-50 w-full">
                  <button className=" px-5 py-2 flex place-items-end bg-[#0396C7] text-white">Pesanan Selesai</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default RiwayatPesanan;
