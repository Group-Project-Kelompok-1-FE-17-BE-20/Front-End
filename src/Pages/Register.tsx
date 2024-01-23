import bgCoverUser from "../img/Rectangle 2775.png";
import { FC, FormEvent, useState } from "react";
import { registerType } from "../utils/interface";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register: FC = () => {
  const navigate = useNavigate();
  const [registerState, setRegisterState] = useState<registerType>({
    fullName: "",
    username: "",
    password: "",
    showPassword: false,
    gender: "",
    email: "",
    phoneNumber: "",
  });

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://65a7a41b94c2c5762da72973.mockapi.io/product", {
        fullName: registerState.fullName,
        username: registerState.username,
        password: registerState.password,
        gender: registerState.gender,
        email: registerState.email,
        phoneNumber: registerState.phoneNumber,
      });
      if (response) {
        Swal.fire({
          title: "Confirmation",
          text: `${registerState.username} Anda Berhasil Registrasi Silahkan Login`,
          icon: "success",
          confirmButtonText: "OK",
          confirmButtonColor: "rgb(3 150 199)",
        }).then((res: any) => {
          if (res.isConfirmed) {
            navigate("/login");
          }
        });
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="h-screen w-screen flex justify-center items-center font-['Poppins']">
        <div className="main h-[85vh] w-[90vw]">
          <div className="title flex flex-col mb-8">
            <span className="font=['Poppins'] text-xl font-semibold text-[#333333]">Register</span>
            <span className="text-[#828282] text-sm font-semibold">Menambah akun</span>
          </div>

          <div className="shadow-md h-[75vh] rounded-md">
            <div className="container w-full md:h-[17vh] h-[10vh">
              <img src={bgCoverUser} className="h-full w-full" alt="bgCover" />
            </div>

            <div className="flex flex-col justify-start items-center mt-5 md:px-0 px-3">
              <span className="text-[#333333] font-bold font-['Poppins']">Users Profil</span>
              <form onSubmit={handleRegister}>
                <div className="flex md:flex-row flex-col justify-center items-start md:gap-16 gap-5 mt-5">
                  <div className="flex flex-col md:w-1/2 w-full items-start">
                    <span>
                      Nama Lengkap <span className="text-red-500">*</span>
                    </span>
                    <input
                      value={registerState.fullName}
                      onChange={(e) => setRegisterState((prev) => ({ ...prev, fullName: e.target.value }))}
                      maxLength={32}
                      required
                      type="text"
                      className="w-full  border-2 px-[0.4rem] py-[0.3rem] border-[#CED4DA] rounded-md"
                    />
                    <div className="flex justify-center items-start gap-5">
                      <div className="flex flex-col mt-2">
                        <span>
                          Username <span className="text-red-500">*</span>
                        </span>
                        <input
                          value={registerState.username}
                          onChange={(e) => setRegisterState((prev) => ({ ...prev, username: e.target.value }))}
                          maxLength={15}
                          required
                          type="text"
                          className="w-full px-[0.4rem]  py-[0.3rem] border-2 border-[#CED4DA] rounded-md"
                        />
                      </div>
                      <div className="flex flex-col mt-2">
                        <span>
                          Password <span className="text-red-500">*</span>
                        </span>
                        <input
                          value={registerState.password}
                          onChange={(e) => setRegisterState((prev) => ({ ...prev, password: e.target.value }))}
                          required
                          type={registerState.showPassword ? "text" : "password"}
                          className="w-full  px-[0.4rem]  py-[0.3rem] border-2 border-[#CED4DA] rounded-md"
                        />
                        <div className="flex justify-center items-center w-11/12 md:w-9/12 mt-3 ">
                          <input
                            onChange={() => setRegisterState((prev) => ({ ...prev, showPassword: !prev.showPassword }))}
                            checked={registerState.showPassword}
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            className="bg-[#EDEDED] text-blue-500 text-sm"
                          />
                          <label htmlFor="perempuan" className="text-xs md:text-sm ml-1">
                            Tampilkan Password
                          </label>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between w-full items-center">
                      <div className="flex flex-col mt-2">
                        <span>
                          Jenis Kelamin <span className="text-red-500">*</span>
                        </span>
                        <div className="flex gap-5">
                          <div className="div">
                            <input checked={registerState.gender === "laki-laki"} onChange={() => setRegisterState((prev) => ({ ...prev, gender: "laki-laki" }))} required type="radio" name="jenis-kelamin" id="laki-laki" />
                            <label htmlFor="laki-laki" className="text-xs md:text-sm ml-1">
                              Laki laki
                            </label>
                          </div>
                          <div className="div">
                            <input checked={registerState.gender === "perempuan"} onChange={() => setRegisterState((prev) => ({ ...prev, gender: "perempuan" }))} required type="radio" name="jenis-kelamin" id="perempuan" />
                            <label htmlFor="perempuan" className="text-xs md:text-sm ml-1">
                              Perempuan
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col md:w-1/2 w-full">
                    <span>
                      Email <span className="text-red-500">*</span>
                    </span>
                    <input onChange={(e) => setRegisterState((prev) => ({ ...prev, email: e.target.value }))} type="email" className="w-full px-[0.4rem]  py-[0.3rem]  border-2 border-[#CED4DA] rounded-md" />
                    <span className="mt-2">
                      No Handphone <span className="text-red-500">*</span>
                    </span>
                    <input
                      onChange={(e) => setRegisterState((prev) => ({ ...prev, phoneNumber: e.target.value }))}
                      type="tel"
                      pattern="[0-9]*"
                      maxLength={12}
                      className="w-full px-[0.4rem]  py-[0.3rem] border-2 border-[#CED4DA] rounded-md"
                    />

                    {registerState.fullName === "" && (
                      <span className="underline p-2 text-[#0396C7] cursor-pointer " onClick={() => navigate("/login")}>
                        Saya sudah punya akun
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button type="submit" className="py-2  bg-[#0396C7] text-white px-5 rounded-md mt-5">
                    Simpan Perubahan
                  </button>
                </div>
              </form>
            </div>

            {/* ... */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
