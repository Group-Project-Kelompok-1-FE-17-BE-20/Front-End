import { FC } from "react";
import { typeLaptopDetail } from "../../utils/interface";
import NumberFormatter from "../NumberFormatter";

const ProfileProduct: FC<typeLaptopDetail> = (props: typeLaptopDetail) => {
  const { storage, price, ram, processor, description, stock, brand, model, gambar } = props;
  return (
    <div id="profileInfo" className="flex gap-5 bg-[#E5F3FF] md:p-5 p-2 rounded-md">
      <img id="profileImage" src={gambar} alt="person" className="rounded-md w-28" />
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
      </div>
    </div>
  );
};

export default ProfileProduct;
