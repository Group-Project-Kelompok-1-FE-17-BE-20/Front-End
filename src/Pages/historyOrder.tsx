import { useEffect } from "react";
import CardHistoryOrder from "../components/Admin/CardHistoryOrder";
import Footer from "../components/Footer";
import Header from "../components/Product/Header";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const HistoryOrder = () => {
  const username = Cookies.get("username");
  const navigate = useNavigate();

  useEffect(() => {
    if (username !== "admin") {
      navigate("/login");
    }
  });
  return (
    <>
      <Header />
      <div className="flex flex-col pt-44 gap-8 font-Poppins">
        <div className="flex flex-col px-10 md:px-20">
          <span className="md:text-3xl text-2xl font-Poppins text-center md:text-left">Riwayat Pesanan</span>
          <span className="text-[#828282] md:text-base text-xs text-center md:text-left">Lihat riwayat pesanan pembeli yang sudah selesai ataupun yang sedang berlangsung</span>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col gap-5 mb-20 border-2 border-slate-50 md:p-5 p-2 overflow-y-scroll w-[90vw] h-[60vh]">
            <div className="md:p-3 p-1 flex w-full border-[1.5px] gap-1 md:gap-3">
              <div className="flex justify-center items-center gap-2 border-[1.5px] w-[80%] rounded-md bg-[#F5F5F5]">
                <div className="md:w-1/12 w-2/12 flex justify-center items-center">
                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M27.2449 25.255L21.6796 19.6875C23.3483 17.513 24.1273 14.7853 23.8587 12.0575C23.5902 9.32983 22.2941 6.80641 20.2334 4.99917C18.1727 3.19193 15.5017 2.2362 12.7623 2.32585C10.0228 2.41551 7.42006 3.54383 5.48195 5.48195C3.54383 7.42006 2.41551 10.0228 2.32585 12.7623C2.2362 15.5017 3.19193 18.1727 4.99917 20.2334C6.80641 22.2941 9.32983 23.5902 12.0575 23.8587C14.7853 24.1273 17.513 23.3483 19.6875 21.6797L25.2574 27.2507C25.3882 27.3816 25.5435 27.4853 25.7144 27.5561C25.8853 27.6269 26.0685 27.6633 26.2535 27.6633C26.4385 27.6633 26.6216 27.6269 26.7926 27.5561C26.9635 27.4853 27.1188 27.3816 27.2496 27.2507C27.3804 27.1199 27.4841 26.9646 27.5549 26.7937C27.6257 26.6228 27.6622 26.4396 27.6622 26.2547C27.6622 26.0697 27.6257 25.8865 27.5549 25.7156C27.4841 25.5447 27.3804 25.3894 27.2496 25.2586L27.2449 25.255ZM5.15621 13.125C5.15621 11.5489 5.62357 10.0082 6.49919 8.69776C7.3748 7.38731 8.61935 6.36593 10.0755 5.7628C11.5316 5.15966 13.1338 5.00185 14.6796 5.30933C16.2254 5.61681 17.6453 6.37576 18.7597 7.49021C19.8742 8.60466 20.6331 10.0246 20.9406 11.5703C21.2481 13.1161 21.0903 14.7184 20.4871 16.1745C19.884 17.6306 18.8626 18.8751 17.5522 19.7507C16.2417 20.6264 14.701 21.0937 13.125 21.0937C11.0122 21.0915 8.98656 20.2513 7.4926 18.7573C5.99864 17.2634 5.15838 15.2377 5.15621 13.125Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                </div>
                <input type="text" className="w-full py-2 px-3 bg-[#F5F5F5]" placeholder="Cari Pesanan" />
              </div>
              <button className="md:px-5 md:py-2  text-xs md:text-base rounded-md border-[#0396C7] border-[1.5px] "> No Pesanan</button>
            </div>
            <CardHistoryOrder />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default HistoryOrder;