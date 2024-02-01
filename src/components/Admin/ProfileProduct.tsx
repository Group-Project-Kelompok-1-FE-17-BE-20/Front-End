import { FC } from "react";
import { typeLaptopDetail } from "../../utils/interface";
import NumberFormatter from "../NumberFormatter";

const ProfileProduct: FC<typeLaptopDetail> = (props: typeLaptopDetail) => {
  const { storage, price, ram, processor, description, stock, brand, model, gambar, ubah, hapus } = props;
  return (
    <div id="profileInfo" className="flex gap-5 bg-[#E5F3FF] md:p-8 p-2 rounded-md">
      <img id="profileImage" src={gambar} alt="person" className="rounded-md w-36" />
      <div className="flex flex-col w-full">
        <span id="profileName" className="font-semibold">
          {brand} {model}
        </span>
        <span id="profileUsername" className="text-[#999999] text-xs md:text-base">
          {processor} {ram} {storage}
        </span>
        <span id="profileUsername" className="text-[#999999] text-xs md:text-base">
          {description}
        </span>
        <span id="profilePhone" className="text-[#999999] text-xs md:text-base">
          Stock : {stock}
        </span>
        <span id="profileEmail" className="text-[#999999] text-xs md:text-base">
          <NumberFormatter value={price} />
        </span>
        <div className="flex items-center gap-5 mt-2">
          <button onClick={hapus} className="px-3 py-2 bg-blue-400 rounded-md  text-white">
            Hapus
          </button>
          <button onClick={ubah} className="px-3 py-2  bg-orange-400 rounded-md text-white">
            Ubah
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileProduct;
