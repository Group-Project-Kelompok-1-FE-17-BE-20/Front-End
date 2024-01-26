import { FC } from "react";
import imageProfil from "../../img/image 8.png";
import { typeListUsers } from "../../utils/interface";

const ProfileUsers: FC<typeListUsers> = (props: typeListUsers) => {
  const { username, no_hp, email, nama } = props;
  return (
    <div className="flex gap-5 bg-[#E5F3FF] md:p-5 p-2 rounded-md">
      <img src={imageProfil} alt="person" className="rounded-md" />
      <div className="flex flex-col w-full">
        <span className="font-semibold">{nama}</span>
        <span className="text-[#999999] text-xs md:text-base">username:  {username}</span>
        <span className="text-[#999999] text-xs md:text-base">No Handphone : {no_hp}</span>
        <span className="text-[#999999] text-xs md:text-base">Email : {email}</span>
      </div>
    </div>
  );
};

export default ProfileUsers;
