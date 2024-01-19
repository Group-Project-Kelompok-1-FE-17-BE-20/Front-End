import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Header() {
  const username = Cookies.get("username");
  const navigate = useNavigate();
  return (
    <div className="flex justify-between fixed z-10 w-screen items-center px-4 md:px-28 py-2 md:py-0 bg-white shadow-sm h-[114px]">
      <h2 className="text-2xl md:text-4xl font-bold text-[#0396C7]">StoreID</h2>
      <div className="items-center justify-between gap-5 hidden xl:flex">
        <p className="font-poppins font-normal text-lg font-Poppins text-[#828282]">Beranda</p>
        <p className="font-poppins font-normal text-lg font-Poppins text-[#828282]">Product</p>
        <div className="m-w-[792px] h-[54px] px-4 py-3 bg-neutral-100 rounded-lg justify-start items-start gap-3 inline-flex">
          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M27.2451 25.255L21.6799 19.6875C23.3485 17.513 24.1276 14.7853 23.859 12.0575C23.5904 9.32983 22.2943 6.80641 20.2336 4.99917C18.1729 3.19193 15.502 2.2362 12.7625 2.32585C10.0231 2.41551 7.4203 3.54383 5.48219 5.48195C3.54408 7.42006 2.41575 10.0228 2.32609 12.7623C2.23644 15.5017 3.19217 18.1727 4.99941 20.2334C6.80665 22.2941 9.33008 23.5902 12.0578 23.8587C14.7855 24.1273 17.5133 23.3483 19.6877 21.6797L25.2576 27.2507C25.3884 27.3816 25.5437 27.4853 25.7146 27.5561C25.8855 27.6269 26.0687 27.6633 26.2537 27.6633C26.4387 27.6633 26.6219 27.6269 26.7928 27.5561C26.9637 27.4853 27.119 27.3816 27.2498 27.2507C27.3806 27.1199 27.4844 26.9646 27.5552 26.7937C27.626 26.6228 27.6624 26.4396 27.6624 26.2547C27.6624 26.0697 27.626 25.8865 27.5552 25.7156C27.4844 25.5447 27.3806 25.3894 27.2498 25.2586L27.2451 25.255ZM5.15646 13.125C5.15646 11.5489 5.62381 10.0082 6.49943 8.69776C7.37505 7.38731 8.6196 6.36593 10.0757 5.7628C11.5318 5.15966 13.134 5.00185 14.6798 5.30933C16.2256 5.61681 17.6455 6.37576 18.76 7.49021C19.8744 8.60466 20.6334 10.0246 20.9408 11.5703C21.2483 13.1161 21.0905 14.7184 20.4874 16.1745C19.8842 17.6306 18.8629 18.8751 17.5524 19.7507C16.242 20.6264 14.7013 21.0937 13.1252 21.0937C11.0124 21.0915 8.98681 20.2513 7.49285 18.7573C5.99889 17.2634 5.15863 15.2377 5.15646 13.125Z"
              fill="#CCCCCC"
            />
          </svg>
          <div className="text-stone-300 text-xl font-normal font-['Poppins']">Cari produk yang kamu inginkan..</div>
        </div>
        {username ? (
          <svg width="28" height="26" viewBox="0 0 28 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.7188 23.3125C11.7188 23.7761 11.5813 24.2292 11.3238 24.6146C11.0662 25 10.7002 25.3004 10.2719 25.4778C9.84365 25.6552 9.3724 25.7017 8.91776 25.6112C8.46311 25.5208 8.0455 25.2976 7.71772 24.9698C7.38994 24.642 7.16672 24.2244 7.07628 23.7697C6.98585 23.3151 7.03226 22.8438 7.20966 22.4156C7.38705 21.9873 7.68746 21.6213 8.07288 21.3637C8.45831 21.1062 8.91145 20.9688 9.375 20.9688C9.9966 20.9688 10.5927 21.2157 11.0323 21.6552C11.4718 22.0948 11.7188 22.6909 11.7188 23.3125ZM21.5625 20.9688C21.0989 20.9688 20.6458 21.1062 20.2604 21.3637C19.875 21.6213 19.5746 21.9873 19.3972 22.4156C19.2198 22.8438 19.1733 23.3151 19.2638 23.7697C19.3542 24.2244 19.5774 24.642 19.9052 24.9698C20.233 25.2976 20.6506 25.5208 21.1053 25.6112C21.5599 25.7017 22.0312 25.6552 22.4594 25.4778C22.8877 25.3004 23.2537 25 23.5113 24.6146C23.7688 24.2292 23.9062 23.7761 23.9062 23.3125C23.9062 22.6909 23.6593 22.0948 23.2198 21.6552C22.7802 21.2157 22.1841 20.9688 21.5625 20.9688ZM27.5941 6.85117L24.3961 17.2457C24.1919 17.9179 23.7764 18.5064 23.2113 18.9237C22.6462 19.3411 21.9615 19.5651 21.259 19.5625H9.71836C9.00575 19.5602 8.31308 19.327 7.74413 18.8979C7.17518 18.4688 6.7606 17.8669 6.5625 17.1824L2.55586 3.15625H1.40625C1.03329 3.15625 0.675604 3.00809 0.411881 2.74437C0.148158 2.48065 0 2.12296 0 1.75C0 1.37704 0.148158 1.01935 0.411881 0.755631C0.675604 0.491908 1.03329 0.34375 1.40625 0.34375H2.90859C3.41759 0.345322 3.91235 0.511893 4.31866 0.818474C4.72497 1.12506 5.02092 1.55512 5.16211 2.04414L6.01641 5.03125H26.25C26.4701 5.03123 26.6871 5.08287 26.8836 5.18201C27.0801 5.28115 27.2505 5.42502 27.3813 5.60205C27.512 5.77908 27.5994 5.98432 27.6364 6.20128C27.6733 6.41823 27.6589 6.64083 27.5941 6.85117ZM24.3457 7.84375H6.81914L9.26719 16.4102C9.29522 16.5082 9.35442 16.5943 9.43584 16.6557C9.51725 16.717 9.61643 16.7501 9.71836 16.75H21.259C21.3593 16.7502 21.4571 16.7182 21.5379 16.6587C21.6186 16.5992 21.6782 16.5154 21.7078 16.4195L24.3457 7.84375Z"
              fill="#0396C7"
            />
          </svg>
        ) : (
          <span onClick={() => navigate("/register")} className="mr-[10vw] underline text-xs lg:text-lg font-bold text-[#0396C7] cursor-pointer">
            Sign Up
          </span>
        )}
      </div>
      <div className="flex items-center gap-2 md:gap-10">
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
