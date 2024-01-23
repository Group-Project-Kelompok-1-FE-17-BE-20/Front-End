import bgUserCover from "../img/Rectangle 2775.png";
import Navbar from "../components/Navbar";
import { useState } from "react";
import axios from "axios";
import { MyProfile } from "../utils/interface";
import Footer from "../components/Footer";

function UserProfile() {
  const [activeUser, setActiveUser] = useState<string>("myProfile");
  const myProfiles: MyProfile[] = [
    {
      id: "myProfile",
      title: "Profil Saya",
      subtitle: "Ubah foto profil, nama pengguna, dll",
      content: myProfile(),
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
          <path
            d="M11.3334 13C11.3334 12.0696 11.3334 11.6044 11.2186 11.2259C10.9601 10.3736 10.2931 9.70669 9.44084 9.44816C9.06231 9.33333 8.59712 9.33333 7.66675 9.33333H4.33342C3.40304 9.33333 2.93785 9.33333 2.55932 9.44816C1.70705 9.70669 1.04011 10.3736 0.781574 11.2259C0.666748 11.6044 0.666748 12.0696 0.666748 13M9.00008 4C9.00008 5.65685 7.65694 7 6.00008 7C4.34323 7 3.00008 5.65685 3.00008 4C3.00008 2.34315 4.34323 1 6.00008 1C7.65694 1 9.00008 2.34315 9.00008 4Z"
            stroke={activeUser === "myProfile" ? "#0396C7" : "white"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "notifications",
      title: "Notifikasi",
      subtitle: "Pembayaran, Pesanan, Pembaruan",
      content: notifications(),
      svg: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_26_306)">
            <path
              d="M10 13.6429C10 14.7475 9.10457 15.6429 8 15.6429C6.89543 15.6429 6 14.7475 6 13.6429M9.19767 5.13528C9.488 4.83533 9.66667 4.42665 9.66667 3.97624C9.66667 3.05576 8.92048 2.30957 8 2.30957C7.07953 2.30957 6.33334 3.05576 6.33334 3.97624C6.33334 4.42665 6.512 4.83533 6.80233 5.13528M1.69788 6.52488C1.68832 5.55731 2.20997 4.65378 3.05269 4.17828M14.3021 6.52488C14.3117 5.55731 13.79 4.65378 12.9473 4.17828M12 8.4429C12 7.52349 11.5786 6.64173 10.8284 5.9916C10.0783 5.34147 9.06087 4.97624 8 4.97624C6.93914 4.97624 5.92172 5.34147 5.17158 5.9916C4.42143 6.64173 4 7.52349 4 8.4429C4 9.96411 3.62276 11.0766 3.15205 11.8727C2.61556 12.78 2.34732 13.2336 2.35791 13.342C2.37003 13.466 2.39235 13.5051 2.4929 13.5786C2.58078 13.6429 3.02234 13.6429 3.90546 13.6429H12.0945C12.9777 13.6429 13.4192 13.6429 13.5071 13.5786C13.6077 13.5051 13.63 13.466 13.6421 13.342C13.6527 13.2336 13.3844 12.78 12.848 11.8727C12.3772 11.0766 12 9.96411 12 8.4429Z"
              stroke={activeUser === "notifications" ? "#0396C7" : "white"}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_26_306">
              <rect width="16" height="16" fill="white" transform="translate(0 0.976196)" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      id: "orderHistory",
      title: "Riwayat Pesanan",
      subtitle: "Lihat riwayat pesanan Anda",
      content: orderHistory(),
      svg: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.6353 9.57145C13.4501 11.3114 12.4643 12.9419 10.8329 13.8837C8.12262 15.4485 4.65694 14.5199 3.09214 11.8096L2.92547 11.5209M2.36395 8.38099C2.54915 6.64106 3.53501 5.01057 5.16633 4.06873C7.87666 2.50392 11.3423 3.43255 12.9071 6.14287L13.0738 6.43155M2.32861 13.0202L2.81665 11.1988L4.63801 11.6869M11.3613 6.26556L13.1827 6.75359L13.6707 4.93222M7.99967 5.97621V8.97621L9.66633 9.97621"
            stroke={activeUser === "orderHistory" ? "#0396C7" : "white"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "editSetting",
      title: "Tampilan",
      subtitle: "Mode Gelap dan Terang, ukuran font, dll",
      content: editSetting(),
      svg: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 6V4M12 6C11.4696 6 10.9609 6.21071 10.5858 6.58579C10.2107 6.96086 10 7.46957 10 8C10 8.53043 10.2107 9.03914 10.5858 9.41421C10.9609 9.78929 11.4696 10 12 10M12 6C12.5304 6 13.0391 6.21071 13.4142 6.58579C13.7893 6.96086 14 7.46957 14 8C14 8.53043 13.7893 9.03914 13.4142 9.41421C13.0391 9.78929 12.5304 10 12 10M12 10V20M6 18C6.53043 18 7.03914 17.7893 7.41421 17.4142C7.78929 17.0391 8 16.5304 8 16C8 15.4696 7.78929 14.9609 7.41421 14.5858C7.03914 14.2107 6.53043 14 6 14M6 18C5.46957 18 4.96086 17.7893 4.58579 17.4142C4.21071 17.0391 4 16.5304 4 16C4 15.4696 4.21071 14.9609 4.58579 14.5858C4.96086 14.2107 5.46957 14 6 14M6 18V20M6 14V4M18 18C18.5304 18 19.0391 17.7893 19.4142 17.4142C19.7893 17.0391 20 16.5304 20 16C20 15.4696 19.7893 14.9609 19.4142 14.5858C19.0391 14.2107 18.5304 14 18 14M18 18C17.4696 18 16.9609 17.7893 16.5858 17.4142C16.2107 17.0391 16 16.5304 16 16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14M18 18V20M18 14V4"
            stroke={activeUser === "editSetting" ? "#0396C7" : "white"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const handleMenuProfileClick = (userId: string) => {
    setActiveUser(userId);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="px-3 md:px-24 sm:pt-40">
          <h2 className="font-poppins text-3xl font-semibold leading-4 mb-4">Profil Saya</h2>
          <nav className="flex mb-4 font-poppins " aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-xl font-medium text-gray-500 hover:text-gray-700">
                  Kelola informasi profil Anda untuk mengontrol, melindungi dan mengamankan akun
                </a>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 mt-7">
            <aside className="w-full lg:w-1/5 px-4 py-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md min-w-[309px] max-w-none lg:max-w-[309px] h-min">
              <ul className="space-y-4 lg:space-y-10">
                {myProfiles.map(({ svg, title, subtitle, id }) => (
                  <li key={id} className={`${activeUser === id ? "bg-[#0396C7]" : "bg-[#D0E9FEB2]"} rounded-md flex px-3 py-2 items-center gap-3 cursor-pointer`} onClick={() => handleMenuProfileClick(id)}>
                    <div className={`${activeUser === id ? "bg-white" : "bg-[#0396C7]"} p-2 rounded-full`}>{svg}</div>
                    <div className="flex flex-col">
                      <h4 className={`${activeUser === id ? "text-white" : "text-[#0396C7]"} font-poppins font-medium text-sm`}>{title}</h4>
                      <p className={`${activeUser === id ? "text-white" : "text-[#0396C7]"} font-poppins font-normal text-[10px]`}>{subtitle}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </aside>
            {myProfiles.find((user) => user.id === activeUser)?.content}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

function editSetting() {
  return (
    <section className="w-full lg:flex-1 px-[38px] py-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md max-w-none lg:max-w-[749px] mb-8">
      <div>Content for Mode Dark and Light</div>
    </section>
  );
}
function notifications() {
  return (
    <section className="w-full lg:flex-1 px-[38px] py-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md max-w-none lg:max-w-[749px] mb-8">
      <div>Content for Notification</div>
    </section>
  );
}

function orderHistory() {
  return (
    <section className="w-full lg:flex-1 px-[38px] py-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md max-w-none lg:max-w-[749px] mb-8">
      <div>Content for Order History</div>
    </section>
  );
}
function myProfile(): JSX.Element {
  const [formData, setFormData] = useState<{
    fullName: string;
    username: string;
    gender: string;
    email: string;
    phoneNumber: string;
  }>({
    fullName: "",
    username: "",
    gender: "Pilih Jenis Kelamin",
    email: "",
    phoneNumber: "",
  });

  const handleSave = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post(" link ", formData);
      console.log("Perubahan di simpan", response.data);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handlePerubahan = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.currentTarget;
    setFormData({
      ...formData,
      [id]: value,
    });
  };

  return (
    <section className="w-full lg:flex-1 px-[38px] py-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md max-w-none lg:max-w-[749px] mb-8">
      <h2 className="font-poppins text-2xl font-semibold text-[#111827] mb-[12px]">Edit Profil</h2>
      <form onSubmit={handleSave}>
        <div className="container w-full h-[17vh] relative">
          <img src={bgUserCover} className="h-full w-full" alt="bgCover" />
          <div className="GantiCover" style={{ width: 40, height: 20, position: "absolute", top: 0, right: 0, padding: "5px", display: "flex", justifyContent: "flex-end", alignItems: "flex-start" }}>
            <label htmlFor="uploadInput" className="Cover" style={{ width: 70, height: 15, display: "flex", alignItems: "center" }}>
              <input type="file" id="uploadInput" accept="image/*" style={{ display: "none" }} onChange={handleImageUpload} />
              <div className="Camera" style={{ width: "50%", height: "50%", position: "relative", cursor: "pointer" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" role="img">
                  {/* You can keep the camera icon if you want, or remove it since the input will handle the upload */}
                  <path
                    d="M3.58579 7.58579C3.21071 7.96086 3 8.46957 3 9V18C3 18.5304 3.21071 19.0391 3.58579 19.4142C3.96086 19.7893 4.46957 20 5 20H19C19.5304 20 20.0391 19.7893 20.4142 19.4142C20.7893 19.0391 21 18.5304 21 18V9C21 8.46957 20.7893 7.96086 20.4142 7.58579C20.0391 7.21071 19.5304 7 19 7H18.07C17.7408 7.00005 17.4167 6.91884 17.1264 6.76359C16.8362 6.60834 16.5887 6.38383 16.406 6.11L15.594 4.89C15.4113 4.61617 15.1638 4.39166 14.8736 4.23641C14.5833 4.08116 14.2592 3.99995 13.93 4H10.07C9.74082 3.99995 9.41671 4.08116 9.12643 4.23641C8.83616 4.39166 8.5887 4.61617 8.406 4.89L7.594 6.11C7.4113 6.38383 7.16384 6.60834 6.87357 6.76359C6.58329 6.91884 6.25918 7.00005 5.93 7H5C4.46957 7 3.96086 7.21071 3.58579 7.58579Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M14.1213 15.1213C14.6839 14.5587 15 13.7956 15 13C15 12.2044 14.6839 11.4413 14.1213 10.8787C13.5587 10.3161 12.7956 10 12 10C11.2044 10 10.4413 10.3161 9.87868 10.8787C9.31607 11.4413 9 12.2044 9 13C9 13.7956 9.31607 14.5587 9.87868 15.1213C10.4413 15.6839 11.2044 16 12 16C12.7956 16 13.5587 15.6839 14.1213 15.1213Z"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </label>
          </div>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-3">
            <div>
              <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-[#6B7280]">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Nama Lengkap"
                value={formData.fullName}
                onChange={handlePerubahan}
                required
              />
            </div>
            <div>
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-[#6B7280]">
                Username
              </label>
              <input
                type="text"
                id="username"
                value={formData.username}
                onChange={handlePerubahan}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="username"
                required
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="mb-6">
            <label htmlFor="gender" className="mb-2 text-sm font-medium text-[#6B7280] flex items-center gap-2">
              Jenis Kelamin
              <span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 10.6667V8" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8 5.33337H8.0075" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </label>
            <select id="gender" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" value={formData.gender} onChange={handlePerubahan}>
              <option value="Pilih Jenis Kelamin">Pilih Jenis Kelamin</option>
              <option value="1">Laki-laki</option>
              <option value="2">Perempuan</option>
            </select>
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#6B7280]">
              Email
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="nama_pengguna@email.com"
              required
              value={formData.email}
              onChange={handlePerubahan}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phoneNumber" className="block mb-2 text-sm font-medium text-[#6B7280]">
              Nomor Handphone
            </label>
            <input
              type="text"
              id="phoneNumber"
              value={formData.phoneNumber}
              onChange={handlePerubahan}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="08123456789"
              required
            />
          </div>
        </div>

        <div className="mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-3">
            <button type="submit" className="text-white bg-[#0396C7] focus:ring-4 font-poppins font-medium rounded-lg text-base px-12 py-2 text-center">
              Simpan
            </button>

            <button type="submit" className="text-white bg-[#fa5151] focus:ring-4 font-poppins font-medium rounded-lg text-base px-12 py-2 text-center">
              Hapus Akun
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default UserProfile;
