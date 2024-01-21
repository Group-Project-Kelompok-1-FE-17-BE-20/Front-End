import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Header() {
  const username = Cookies.get("username");
  const navigate = useNavigate();
  return (
    <div className="flex justify-between  fixed z-10 w-screen items-center px-12 md:px-28 py-2 md:py-0 bg-white shadow-sm h-[114px]">
      <h2 className="text-2xl md:text-4xl font-bold text-[#0396C7]">StoreID</h2>

      <div className="flex items-center gap-2 md:gap-10">
        <div className="items-center justify-end gap-5 flex">
          <p className="font-poppins font-normal text-lg hidden lg:block font-Poppins text-[#828282]">Beranda</p>
          <p className="font-poppins font-normal text-lg hidden lg:block font-Poppins text-[#828282]">Product</p>
          {username ? (
            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M11.7188 23.3125C11.7188 23.7761 11.5813 24.2292 11.3238 24.6146C11.0662 25 10.7002 25.3004 10.2719 25.4778C9.84365 25.6552 9.3724 25.7017 8.91776 25.6112C8.46311 25.5208 8.0455 25.2976 7.71772 24.9698C7.38994 24.642 7.16672 24.2244 7.07628 23.7697C6.98585 23.3151 7.03226 22.8438 7.20966 22.4156C7.38705 21.9873 7.68746 21.6213 8.07288 21.3637C8.45831 21.1062 8.91145 20.9688 9.375 20.9688C9.9966 20.9688 10.5927 21.2157 11.0323 21.6552C11.4718 22.0948 11.7188 22.6909 11.7188 23.3125ZM21.5625 20.9688C21.0989 20.9688 20.6458 21.1062 20.2604 21.3637C19.875 21.6213 19.5746 21.9873 19.3972 22.4156C19.2198 22.8438 19.1733 23.3151 19.2638 23.7697C19.3542 24.2244 19.5774 24.642 19.9052 24.9698C20.233 25.2976 20.6506 25.5208 21.1053 25.6112C21.5599 25.7017 22.0312 25.6552 22.4594 25.4778C22.8877 25.3004 23.2537 25 23.5113 24.6146C23.7688 24.2292 23.9062 23.7761 23.9062 23.3125C23.9062 22.6909 23.6593 22.0948 23.2198 21.6552C22.7802 21.2157 22.1841 20.9688 21.5625 20.9688ZM27.5941 6.85117L24.3961 17.2457C24.1919 17.9179 23.7764 18.5064 23.2113 18.9237C22.6462 19.3411 21.9615 19.5651 21.259 19.5625H9.71836C9.00575 19.5602 8.31308 19.327 7.74413 18.8979C7.17518 18.4688 6.7606 17.8669 6.5625 17.1824L2.55586 3.15625H1.40625C1.03329 3.15625 0.675604 3.00809 0.411881 2.74437C0.148158 2.48065 0 2.12296 0 1.75C0 1.37704 0.148158 1.01935 0.411881 0.755631C0.675604 0.491908 1.03329 0.34375 1.40625 0.34375H2.90859C3.41759 0.345322 3.91235 0.511893 4.31866 0.818474C4.72497 1.12506 5.02092 1.55512 5.16211 2.04414L6.01641 5.03125H26.25C26.4701 5.03123 26.6871 5.08287 26.8836 5.18201C27.0801 5.28115 27.2505 5.42502 27.3813 5.60205C27.512 5.77908 27.5994 5.98432 27.6364 6.20128C27.6733 6.41823 27.6589 6.64083 27.5941 6.85117ZM24.3457 7.84375H6.81914L9.26719 16.4102C9.29522 16.5082 9.35442 16.5943 9.43584 16.6557C9.51725 16.717 9.61643 16.7501 9.71836 16.75H21.259C21.3593 16.7502 21.4571 16.7182 21.5379 16.6587C21.6186 16.5992 21.6782 16.5154 21.7078 16.4195L24.3457 7.84375Z"
                fill="#0396C7"
              />
            </svg>
          ) : (
            <span onClick={() => navigate("/register")} className="md:mr-[10vw] mr-0 underline text-sm lg:text-lg font-bold text-[#0396C7] cursor-pointer">
              Sign Up
            </span>
          )}
        </div>
        {username && (
          <div className="flex items-center gap-2 md:gap-5">
            <p className="text-base md:text-xl font-medium text-[#0396C7]">{username}</p>
            <img className="rounded-full w-8 h-8 md:w-12 md:h-12 object-cover" src="https://via.placeholder.com/50x50.png/000000?text=." alt="profile" />
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
