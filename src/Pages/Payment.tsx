import { FC } from "react";
import Footer from "../components/Footer";
import Header from "../components/Product/Header";
import { useState } from "react";
import { bankData } from "../utils/payment";
import PaymentButton from "../components/PaymentButton";
import { postPayment } from "../utils/interface";
// import axios from "axios";
import Swal from "sweetalert2";
// import { useNavigate } from "react-router-dom";

const Payment: FC = () => {
  const [showPayment, setShow] = useState<Boolean>(false);
  const [showPopup, setShowPopup] = useState<Boolean>(false);
  // const navigate = useNavigate();
  const [pembayaran, setPembayaran] = useState<postPayment>({
    nama: "",
    alamat: "",
    metode_pembayaran: "",
  });

  const generateRandomCode = () => {
    const randomCode = Math.floor(1000 + Math.random() * 9000);
    return randomCode;
  };

  const changeShow = () => {
    setShow(!showPayment);
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setPembayaran((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlePaymentSelection = (selectedPayment: string) => {
    setPembayaran((prevData) => ({
      ...prevData,
      metode_pembayaran: selectedPayment,
    }));
  };

  const handlePayment = (e: any) => {
    e.preventDefault();
    Swal.fire({
      title: "Confirmation",
      text: `Anda Mau Melanjutkan Pembayaran`,
      icon: "question",
      showCancelButton: true,
      confirmButtonText: "OK",
      cancelButtonText: "NO",
      confirmButtonColor: "rgb(3 150 199)",
    }).then((res: any) => {
      if (res.isConfirmed) {
        setShowPopup(!showPopup);
        //   axios
        //     .post("https://65aca190adbd5aa31bdf60dc.mockapi.io/Pembayaran", pembayaran)
        //     .then((response) => {
        //       console.log("Sukses:", response.data);

        //       setPembayaran({
        //         nama: "",
        //         alamat: "",
        //         metode_pembayaran: "",
        //       });
        //     })
        //     .catch((error) => {
        //       console.error("Error:", error);
        //     });
      }
    });
  };
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center pt-44 gap-8 font-Poppins">
        <div className="flex flex-col px-10 gap-3">
          <span className="text-2xl md:text-3xl lg:text-4xl text-center font-Poppins">Pembayaran</span>
          <span className="text-[#828282] text-center text-xs md:text-base">Lakukan Pembayaran produk yang diinginkan</span>
        </div>
      </div>

      <form onSubmit={handlePayment}>
        <div className="flex justify-center items-center gap-3 h-auto my-20 font-Poppins">
          <div className="flex flex-col justify-center gap-3">
            <span className="font-semibold md:text-base text-sm">Pengguna</span>
            <input required onChange={handleChange} name="nama" value={pembayaran.nama} type="text" className="p-2 bg-[#F6F6F6] rounded-md" placeholder="Masukan Nama Pengguna" />
            <span className="font-semibold md:text-base text-sm">Alamat</span>
            <input required onChange={handleChange} name="alamat" value={pembayaran.alamat} type="text" className="p-2 bg-[#F6F6F6] rounded-md" placeholder="Masukan Alamat" />

            <div className="flex justify-between">
              <span className="font-semibold md:text-base text-sm">Metode Pembayaran</span>
            </div>

            {pembayaran.metode_pembayaran ? (
              <div className="lg:w-[567px] w-[90vw] h-[106px] relative bg-white rounded shadow">
                <div className="left-[78px] top-[18.64px] absolute text-gray-600 text-[0.8rem] md:text-2xl font-bold font-Poppins leading-9">Bank Transfer Virtual Account</div>
                <div className="left-[78px] top-[50.81px] absolute text-neutral-300 text-xs md:text-base font-normal font-['Inter'] leading-relaxed">Proses otomatis dan lebih cepat</div>
                <img className="w-9 h-10 left-[18px] top-[28px] absolute rounded" src="https://image.shutterstock.com/image-vector/bank-icon-260nw-435428170.jpg" />
                <img onClick={changeShow} className="cursor-pointer w-[29px] h-[29px] right-4 md:left-[495px] top-[30px] absolute rounded" src="https://img.icons8.com/ios/50/expand-arrow--v2.png" />
              </div>
            ) : (
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
            )}

            {showPayment &&
              bankData.banks.map((item: any) => {
                return <PaymentButton key={item.name} name={"bankPayment"} value={item.name} gambar={item.gambar} onSelection={() => handlePaymentSelection(item.name)} />;
              })}

            <span className="font-semibold md:text-base text-sm mt-5">Ringkasan Pembayaran</span>
            <hr className="w-[80%]" />
            <div className="flex gap-5 items-center justify-between">
              <span className="text-sm">Total Bayar :</span>
              <span className="font-bold text-lg text-red-500">$5000</span>
            </div>

            <button className="flex justify-center items-center" type="submit">
              <div className="flex justify-center items-center my-10 font-semibold bg-sky-600 w-full md:w-1/2 text-white py-2.5 rounded-md">Lanjutkan Pembayaran</div>
            </button>
          </div>
        </div>
      </form>

      {showPopup && (
        <>
          <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50 font-Poppins">
            <div className="bg-white w-96 p-8 rounded shadow-lg">
              <p className="my-2 text-2xl font-semibold text-blue-700">Detail Pembayaran</p>
              <p className="my-2 text-sm">Nama: {pembayaran.nama}</p>
              <hr />
              <p className="my-2 text-sm">Alamat: {pembayaran.alamat}</p>
              <hr />
              <p className="my-2 text-sm">Metode Pembayaran: {pembayaran.metode_pembayaran}</p>

              {/* Div petunjuk dengan latar belakang oranye muda */}
              <div className="mb-4 bg-orange-200 p-3 rounded text-sm">
                Petunjuk untuk bertransaksi menggunakan {pembayaran.metode_pembayaran}: Masukkan kode berikut - {generateRandomCode()}
              </div>

              <div className="flex gap-3">
                <button className="bg-gray-500 text-white px-4 py-2 mt-5 rounded hover:bg-gray-600" onClick={() => setShowPopup(false)}>
                  Tutup
                </button>
              </div>
            </div>
          </div>
        </>
      )}

      <Footer />
    </>
  );
};

export default Payment;
