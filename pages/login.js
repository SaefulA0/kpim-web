import Head from "next/head";
import Footer from "../components/footer";
import { signIn, useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Router from "next/router";

function login() {
  const [userInfo, setUserInfo] = useState({ username: "", password: "" });
  const { status } = useSession();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signIn("login", {
      username: userInfo.username,
      password: userInfo.password,
      redirect: false,
    });
  };

  useEffect(() => {
    if (status === "authenticated") Router.replace("/");
  }, [status]);

  return (
    <main className="font-inter">
      <Head>
        <title>Login</title>
        <link rel="icon" type="image/x-icon" href="img/Logo.png" />
      </Head>
      <main className="text-gray-600 body-font font-inter content-center">
        <div className="flex flex-wrap content-center items-center">
          {/* flex kiri Logo */}
          <div className="w-32 md:w-1/2 mt-10 md:mt-0 mb-10 md:mb-0 mx-auto">
            <img src="img/Logo.png" alt="Logo" className="mx-auto" />
          </div>
          {/* flex kanan Card login */}
          <div className="w-full md:w-1/2 pb-24 md:h-screen bg-slate-100 rounded-lg p-8 flex content-center">
            <div className="w-full md:w-3/5 mx-auto md:pt-10 md:mt-24">
              <h1 className="text-2xl md:text-4xl text-[#1A202C] font-bold title-font mb-2">
                Login
              </h1>
              <p className="mb-5 text-sm md:text-base text-[#1A202C]">
                Selamat datang! Silakan masukan username dan password
              </p>
              {/* form */}
              <form onSubmit={handleSubmit}>
                {/* username */}
                <div className="my-2">
                  <label className="block">
                    <span className="block text-sm font-semibold text-[#1A202C]">
                      Username
                    </span>
                    {/* field username */}
                    <input
                      type="text"
                      id="username"
                      placeholder="Masukan username"
                      name="username"
                      value={userInfo.username}
                      required
                      onChange={({ target }) =>
                        setUserInfo({ ...userInfo, username: target.value })
                      }
                      className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                  </label>
                </div>
                <div className="my-2">
                  <label className="block">
                    <span className="block text-sm font-semibold text-[#1A202C]">
                      Password
                    </span>
                    {/* field password */}
                    <input
                      type="password"
                      id="password"
                      name="password"
                      required
                      placeholder="Masukan password"
                      value={userInfo.password}
                      onChange={({ target }) =>
                        setUserInfo({ ...userInfo, password: target.value })
                      }
                      className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    />
                  </label>
                </div>
                {/* checkbox ingat saya */}
                <div className="mb-8">
                  <input type="checkbox" id="isaya" name="isaya" value="" />
                  <label className="text-sm md:text-base text-[#1A202C] ml-1">
                    Ingat saya
                  </label>
                </div>
                <button
                  type="submit"
                  value="Login"
                  className="w-full rounded-lg shadow-md text-white bg-[#48BB78] border-0 py-2 px-8 focus:outline-none hover:bg-[#38A169] text-sm md:text-lg transition-colors duration-150 ease-in-out"
                >
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </main>
  );
}
export default login;
