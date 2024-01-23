import { useNavigate } from "react-router-dom";
import { FC, FormEvent } from "react";
import { LoginState } from "../utils/interface";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Cookies from "js-cookie";
import bcrypt from "bcryptjs";

const Login: FC = () => {
  const navigate = useNavigate();
  const [loginState, setLoginState] = useState<LoginState>({
    email: "",
    password: "",
    passwordVisible: false,
  });
  const toRegister = (): void => {
    navigate("/register");
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    if (loginState.email === "admin@gmail.com" && loginState.password === "1") {
      navigate("/daftar-users");
      Cookies.set("username", "admin");
    } else {
      try {
        const response = await axios.get("http://34.121.193.16:8083/users");
        const userData = response.data.data;
        const findOut = userData.find((user: any) => user.email === loginState.email);

        if (findOut) {
          const isPasswordMatch = await bcrypt.compare(loginState.password, findOut.password);
          if (isPasswordMatch) {
            const user = findOut.nama_lengkap;
            Swal.fire({
              title: "Confirmation",
              text: `Congratulations, Hello ${user}`,
              icon: "success",
              confirmButtonText: "OK",
              confirmButtonColor: "rgb(3 150 199)",
            }).then((res) => {
              if (res.isConfirmed) {
                Cookies.set("username", user);
                navigate("/");
              }
            });
          } else {
            handleLoginError();
          }
        } else {
          handleLoginError();
        }
      } catch (error) {
        handleLoginError();
      }
    }
  };

  const handleLoginError = () => {
    Swal.fire({
      title: "Confirmation",
      text: "Username and Password Was Wrong",
      icon: "error",
      showCancelButton: true,
      confirmButtonText: "OK",
      confirmButtonColor: "rgb(255 10 10)",
    }).then(() => {
      setLoginState({
        email: "",
        password: "",
        passwordVisible: false,
      });
    });
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
