import axios, { AxiosResponse } from "axios";
import Header from "../components/Product/Header";
import { useEffect, useState } from "react";
import { MenuItem } from "../utils/interface";
import { Product } from "../utils/interface";

function ListProduct(props: any) {
  const [activeItem, setActiveItem] = useState<string>("myProducts");
  const { hidden } = props;

  const menuItems: MenuItem[] = [
    {
      id: "myProfile",
      title: "Profil Toko Saya",
      subtitle: "Ubah foto profil, nama toko, dll",
      content: myProfile(),
      svg: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M10 14.4762V10.8762C10 10.5028 10 10.3161 9.92734 10.1735C9.86342 10.0481 9.76144 9.94611 9.63599 9.88219C9.49339 9.80953 9.3067 9.80953 8.93333 9.80953H7.06667C6.6933 9.80953 6.50661 9.80953 6.36401 9.88219C6.23857 9.94611 6.13658 10.0481 6.07266 10.1735C6 10.3161 6 10.5028 6 10.8762V14.4762M2 5.14286C2 6.24743 2.89543 7.14286 4 7.14286C5.10457 7.14286 6 6.24743 6 5.14286C6 6.24743 6.89543 7.14286 8 7.14286C9.10457 7.14286 10 6.24743 10 5.14286C10 6.24743 10.8954 7.14286 12 7.14286C13.1046 7.14286 14 6.24743 14 5.14286M4.13333 14.4762H11.8667C12.6134 14.4762 12.9868 14.4762 13.272 14.3309C13.5229 14.203 13.7268 13.9991 13.8547 13.7482C14 13.463 14 13.0896 14 12.3429V4.60953C14 3.86279 14 3.48942 13.8547 3.20421C13.7268 2.95333 13.5229 2.74935 13.272 2.62152C12.9868 2.4762 12.6134 2.4762 11.8667 2.4762H4.13333C3.3866 2.4762 3.01323 2.4762 2.72801 2.62152C2.47713 2.74935 2.27316 2.95333 2.14532 3.20421C2 3.48942 2 3.86279 2 4.60953V12.3429C2 13.0896 2 13.463 2.14532 13.7482C2.27316 13.9991 2.47713 14.203 2.72801 14.3309C3.01323 14.4762 3.3866 14.4762 4.13333 14.4762Z"
            stroke={activeItem === "myProfile" ? "#0396C7" : "white"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "notifications",
      title: "Notifikasi Toko",
      subtitle: "Pembayaran, Pesanan, Pembaruan",
      content: notifications(),
      svg: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clipPath="url(#clip0_26_306)">
            <path
              d="M10 13.6429C10 14.7475 9.10457 15.6429 8 15.6429C6.89543 15.6429 6 14.7475 6 13.6429M9.19767 5.13528C9.488 4.83533 9.66667 4.42665 9.66667 3.97624C9.66667 3.05576 8.92048 2.30957 8 2.30957C7.07953 2.30957 6.33334 3.05576 6.33334 3.97624C6.33334 4.42665 6.512 4.83533 6.80233 5.13528M1.69788 6.52488C1.68832 5.55731 2.20997 4.65378 3.05269 4.17828M14.3021 6.52488C14.3117 5.55731 13.79 4.65378 12.9473 4.17828M12 8.4429C12 7.52349 11.5786 6.64173 10.8284 5.9916C10.0783 5.34147 9.06087 4.97624 8 4.97624C6.93914 4.97624 5.92172 5.34147 5.17158 5.9916C4.42143 6.64173 4 7.52349 4 8.4429C4 9.96411 3.62276 11.0766 3.15205 11.8727C2.61556 12.78 2.34732 13.2336 2.35791 13.342C2.37003 13.466 2.39235 13.5051 2.4929 13.5786C2.58078 13.6429 3.02234 13.6429 3.90546 13.6429H12.0945C12.9777 13.6429 13.4192 13.6429 13.5071 13.5786C13.6077 13.5051 13.63 13.466 13.6421 13.342C13.6527 13.2336 13.3844 12.78 12.848 11.8727C12.3772 11.0766 12 9.96411 12 8.4429Z"
              stroke={activeItem === "notifications" ? "#0396C7" : "white"}
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
      subtitle: "Lihat riwayat transaksi dari pengguna",
      content: orderHistory(),
      svg: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M13.6353 9.57145C13.4501 11.3114 12.4643 12.9419 10.8329 13.8837C8.12262 15.4485 4.65694 14.5199 3.09214 11.8096L2.92547 11.5209M2.36395 8.38099C2.54915 6.64106 3.53501 5.01057 5.16633 4.06873C7.87666 2.50392 11.3423 3.43255 12.9071 6.14287L13.0738 6.43155M2.32861 13.0202L2.81665 11.1988L4.63801 11.6869M11.3613 6.26556L13.1827 6.75359L13.6707 4.93222M7.99967 5.97621V8.97621L9.66633 9.97621"
            stroke={activeItem === "orderHistory" ? "#0396C7" : "white"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "myProducts",
      title: "Produk Saya",
      subtitle: "Ubah foto profil, nama toko, dll",
      content: MyProducts(),
      svg: (
        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.66683 8.47616H3.92147C4.37828 8.47616 4.79587 8.73424 5.00016 9.14282C5.20445 9.5514 5.62205 9.80949 6.07885 9.80949H9.92147C10.3783 9.80949 10.7959 9.5514 11.0002 9.14282C11.2045 8.73424 11.622 8.47616 12.0789 8.47616H14.3335M5.97787 3.14282H10.0225C10.7404 3.14282 11.0993 3.14282 11.4162 3.25213C11.6965 3.3488 11.9517 3.50655 12.1635 3.71399C12.403 3.94855 12.5636 4.26962 12.8846 4.91174L14.329 7.80049C14.455 8.05248 14.518 8.17847 14.5624 8.31052C14.6019 8.42779 14.6304 8.54847 14.6475 8.671C14.6668 8.80897 14.6668 8.94984 14.6668 9.23157V10.6095C14.6668 11.7296 14.6668 12.2896 14.4488 12.7175C14.2571 13.0938 13.9511 13.3998 13.5748 13.5915C13.147 13.8095 12.5869 13.8095 11.4668 13.8095H4.5335C3.41339 13.8095 2.85334 13.8095 2.42552 13.5915C2.04919 13.3998 1.74323 13.0938 1.55148 12.7175C1.3335 12.2896 1.3335 11.7296 1.3335 10.6095V9.23157C1.3335 8.94984 1.3335 8.80897 1.35281 8.671C1.36997 8.54847 1.39845 8.42779 1.43791 8.31052C1.48234 8.17848 1.54533 8.05248 1.67133 7.80049L3.1157 4.91174C3.43677 4.26962 3.5973 3.94855 3.83679 3.71399C4.04858 3.50655 4.30384 3.3488 4.58409 3.25213C4.901 3.14282 5.25996 3.14282 5.97787 3.14282Z"
            stroke={activeItem === "myProducts" ? "#0396C7" : "white"}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  const handleMenuItemClick = (itemId: string) => {
    setActiveItem(itemId);
  };

  return (
    <div>
      {!hidden ? "" : <Header />}
      <div>
        <div className={!hidden ? `px-3 md:px-10 pt-7 w-full` : `px-3 md:px-24 pt-7`}>
          <h2 className="font-poppins text-3xl font-semibold leading-4 mb-4">Produk Toko Saya</h2>
          <nav className="flex mb-4 font-poppins " aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              <li className="inline-flex items-center">
                <a href="#" className="inline-flex items-center text-xl font-medium text-gray-500 hover:text-gray-700">
                  Lihat dan kelola produk di toko Anda
                </a>
              </li>
            </ol>
          </nav>
          <div className="flex flex-col lg:flex-row gap-12 mt-7">
            {!hidden ? (
              ""
            ) : (
              <aside className="w-full lg:w-1/5 px-4 py-6 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md min-w-[309px] max-w-none lg:max-w-[309px] h-min">
                <ul className="space-y-4 lg:space-y-10">
                  {menuItems.map(({ svg, title, subtitle, id }) => (
                    <li key={id} className={`${activeItem === id ? "bg-[#0396C7]" : "bg-[#D0E9FEB2]"} rounded-md flex px-3 py-2 items-center gap-3 cursor-pointer`} onClick={() => handleMenuItemClick(id)}>
                      <div className={`${activeItem === id ? "bg-white" : "bg-[#0396C7]"} p-2 rounded-full`}>{svg}</div>
                      <div className="flex flex-col">
                        <h4 className={`${activeItem === id ? "text-white" : "text-[#0396C7]"} font-poppins font-medium text-sm`}>{title}</h4>
                        <p className={`${activeItem === id ? "text-white" : "text-[#0396C7]"} font-poppins font-normal text-[10px]`}>{subtitle}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </aside>
            )}

            {menuItems.find((item) => item.id === activeItem)?.content}
          </div>
        </div>
      </div>
    </div>
  );
}

function myProfile() {
  return (
    <section className="w-full lg:flex-1 px-[38px] py-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md max-w-none lg:max-w-[749px] mb-8">
      <div>Content for Profile</div>
    </section>
  );
}

function notifications() {
  return (
    <section className="w-full lg:flex-1 px-[38px] py-[15px] shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-md max-w-none lg:max-w-[749px] mb-8">
      <div>Content for Notofication</div>
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

function MyProducts() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get<Product[]>("https://virtserver.swaggerhub.com/Firlydani/Laptop/1.0.0/products")
      .then((response: AxiosResponse<Product[]>) => {
        setProducts(response.data);
      })
      .catch((error: Error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div className="w-full">
      <section className="w-full lg:flex-1 px-[18px] rounded-md mb-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <ol>
          <li className="w-min py-[15px] border-b-2 border-[#0396C7]">
            <h2 className="font-poppins text-[#0396C7] text-xl font-normal ">Semua</h2>
          </li>
        </ol>
      </section>
      <section className="w-full lg:flex-1 py-[10px] px-[18px] rounded-md mb-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        <div className="flex gap-6">
          <div className="w-full h-[54px] bg-neutral-100 rounded-lg flex items-center gap-3">
            <div className="w-[30px] h-[30px] relative"></div>
            <div className="text-stone-300 text-xl font-normal font-poppins">Cari produk anda</div>
          </div>

          <div className="h-[54px] min-w-48 px-2 rounded-lg border-2 border-sky-600 flex items-center justify-between">
            <div className="text-sky-600 text-xl font-normal font-poppins text-nowrap">Nama Produk</div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#0396C7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="h-[54px] px-2 min-w-52 bg-sky-600 rounded-lg flex items-center justify-between">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M5 12H19" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <div className="text-white text-xl font-normal font-poppins">Tambah Produk</div>
          </div>
        </div>
      </section>
      <section className="w-full lg:flex-1 px-[18px] py-[15px] rounded-md mb-8 shadow-[0_3px_10px_rgb(0,0,0,0.2)] space-y-7 max-h-[60vh] overflow-scroll">
        {products.map(({ id, nama, deskripsi_barang, harga_satuan, jumlah_barang }) => (
          <div key={id} className="bg-[#F0F8FF] shadow-lg rounded-lg p-4 lg:p-6">
            <div className="grid grid-cols-12 gap-4 border-b-2 pb-4 font-semibold text-xl font-poppins">
              <div className="col-span-3 lg:col-span-4"></div>
              <h5 className="col-span-2">Detail Produk</h5>
              <h5 className="col-span-2">Harga</h5>
              <h5 className="col-span-1">Stok</h5>
              <h5 className="col-span-1">Terjual</h5>
              <a className="col-span-3 lg:col-span-2 text-end font-medium text-base underline text-[#0396C7]" href="/">
                Lihat Di Toko
              </a>
            </div>
            <div className="grid grid-cols-12 gap-4 border-b-2 py-4 font-poppins text-[#808080] text-base font-normal">
              <div className="col-span-3 lg:col-span-4 border-r-2 flex items-center gap-5">
                <img
                  src="https://via.placeholder.com/97x146.png/000000?text=." // Replace with your image path
                  alt="Product"
                  className="object-cover rounded"
                />
                <h2 className="text-zinc-800 text-xl font-semibold font-poppins">{nama}</h2>
              </div>
              <div className="col-span-2 border-r-2">
                <span>{deskripsi_barang}</span>
              </div>
              <div className="col-span-2 border-r-2">{harga_satuan}</div>
              <div className="col-span-1 border-r-2 text-center">
                <span>{jumlah_barang}</span>
              </div>
              <div className="col-span-1 border-r-2 text-center">
                <span>14</span>
              </div>
              <div className="col-span-3 lg:col-span-2"></div>
            </div>
            <div className="flex justify-end space-x-6 mt-4">
              <button className="bg-[#EE6565] text-white px-24 py-2 rounded">Hapus Produk</button>
              <button className="bg-[#0396C7] text-white px-24 py-2 rounded">Ubah Produk</button>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}

export default ListProduct;
