// import React from "react";
import { useNavigate } from "react-router-dom";
import { FC, FormEvent } from "react";
import { LoginState } from "../utils/interface";
import { useState } from "react";
import axios from "axios";

interface setDataKu {
  data?: [];
}

const Login: FC = () => {
  const navigate = useNavigate();
  const [datas, setData] = useState<setDataKu>();
  const [loginState, setLoginState] = useState<LoginState>({
    email: "",
    password: "",
    passwordVisible: false,
  });
  const toRegister = (): void => {
    navigate("/register");
  };

  const handleLogin = (e: FormEvent) => {
    e.preventDefault();
    const cek = async () => {
      try {
        const response = await axios.get("https://65a7a41b94c2c5762da72973.mockapi.io//product");
        setData(response.data);
        const findOut = response.data.find((user: any) => user.email === loginState.email);
        const findOut2 = response.data.find((user: any) => user.password === loginState.password);
        console.log(response.data);
        if (findOut && findOut2) {
          alert("Selamat Datang anda Berhasil Login");
          navigate("/");
        } else {
          alert("Salah!!! cek username Password Anda");
          setLoginState({
            email: "",
            password: "",
            passwordVisible: false,
          });
        }
      } catch (error) {
        console.error("Error:");
      }
    };
    cek();
  };

  return (
    <>
      <div className="bg-white w-screen h-screen text-black">
        <div className="bg-white shadow-md text-black navbar w-screen h-[10vh] md:h-[15vh] flex justify-between px-8 md:px-16 items-center">
          <span className="text-lg lg:text-3xl font-bold text-[#0396C7]">StoreID</span>
          <span onClick={toRegister} className="underline text-xs lg:text-lg font-bold text-[rgb(130,130,130)] cursor-pointer">
            Sign Up
          </span>
        </div>

        <form onSubmit={handleLogin}>
          <div className="flex flex-col py-[8vh] h-[80vh] md:h-[60vh] lg:h-[80%] justify-center items-center gap-5">
            <span className="font-bold text-[2.8rem] mb-5 font-['Poppins']">Sign Up</span>
            <input
              value={loginState.email}
              onChange={(e) => setLoginState((prev) => ({ ...prev, email: e.target.value }))}
              type="email"
              placeholder="E-mail"
              className="px-5 py-3 w-10/12 lg:w-1/3 rounded-3xl bg-white text-gray-400 border-2"
              required
            />
            <input
              value={loginState.password}
              onChange={(e) => setLoginState((prev) => ({ ...prev, password: e.target.value }))}
              type={loginState.passwordVisible ? "text" : "password"}
              placeholder="Password"
              className="px-5 py-3 w-10/12 lg:w-1/3 rounded-3xl bg-white text-gray-400 border-2"
              required
            />

            <div className="flex flex-col w-[80vw] lg:w-[32vw] gap-9">
              <div className="flex justify-between items-center">
                <span className="text-[#000000]">
                  <input
                    onChange={() => setLoginState((prev) => ({ ...prev, passwordVisible: !prev.passwordVisible }))}
                    checked={loginState.passwordVisible}
                    type="checkbox"
                    name="checkbox"
                    id="checkbox"
                    className="bg-[#EDEDED] text-blue-500 text-sm"
                  />
                  <span className="text-sm md:text-base"> Tampilkan kata sandi</span>
                </span>
              </div>
              <button type="submit" className="py-3 px-10 text-white rounded-3xl font-bold font-['Poppins'] bg-[#0396C7] hover:opacity-80">
                Sign In
              </button>
              <span className="text-black flex justify-center -mt-5">
                Belum punya akun?{" "}
                <span onClick={toRegister} className="cursor-pointer underline ml-3 text-[#041DFF]">
                  Daftar
                </span>
              </span>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
