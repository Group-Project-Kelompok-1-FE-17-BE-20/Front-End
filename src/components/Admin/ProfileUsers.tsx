import { FC } from "react";
import imageProfil from "../../img/image 8.png";

const ProfileUsers: FC = () => {
  return (
    <div className="flex gap-5 bg-[#E5F3FF] md:p-5 p-2 rounded-md">
      <img src={imageProfil} alt="person" className="rounded-md" />
      <div className="flex flex-col w-full">
        <span className="font-semibold">Indah</span>
        <span className="text-[#999999] text-xs md:text-base">No Id:  JP2321949193</span>
        <span className="text-[#999999] text-xs md:text-base">No Handphone : 0812343567890410</span>
        <span className="text-[#999999] text-xs md:text-base">Email : indahmayangsari@gmail.com</span>
      </div>
    </div>
  );
};

export default ProfileUsers;
