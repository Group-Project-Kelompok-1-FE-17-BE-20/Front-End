import Footer from "../components/Footer";
import Header from "../components/Product/Header";
import ProfileUsers from "../components/Admin/ProfileUsers";

const ListUsers = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col pt-44 gap-8 font-Poppins">
        <div className="flex flex-col px-20 ">
          <span className="md:text-3xl text-2xl md:text-left text-center font-Poppins">Daftar Users</span>
          <span className="text-[#828282] text-xs md:text-base">Lihat informasi mengenai users</span>
        </div>

        <div className="flex justify-center items-center">
          <div className="flex flex-col lg:h-[60vh] h-[35vh] gap-5 mb-20 border-2 border-slate-50 p-2 md:p-5 overflow-y-scroll w-[90vw]">
            <ProfileUsers />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ListUsers;
