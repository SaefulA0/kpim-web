import Layout from "../components/layout";

export default function login() {
  return (
    <Layout title="Login">
      <main className="text-gray-600 body-font content-center">
        <div className="flex flex-wrap content-center items-center">
          {/* flex kiri Logo */}
          <div className="w-1/2 md:w-1/2 mt-10 md:mt-0 mb-10 md:mb-0 mx-auto">
            <img src="img/Logo.png" alt="Logo" className="mx-auto" />
          </div>
          {/* flex kanan Card login */}
          <div className="w-full md:w-1/2 pb-24 md:h-screen bg-slate-100 rounded-lg p-8 flex content-center">
            <div className="w-full md:w-3/5 mx-auto md:pt-10 md:mt-16">
              <h1 className="text-2xl md:text-3xl font-bold title-font text-gray-800 mb-2">
                Login
              </h1>
              <p className="mb-5 text-sm md:text-lg text-gray-800">
                Selamat datang! Silakan masukan username dan password
              </p>
              {/* form */}
              <form>
                <div className="relative mb-2">
                  <label
                    for="username"
                    className="leading-7 text-sm md:text-lg font-medium text-gray-600"
                  >
                    Username
                  </label>
                  {/* field username */}
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Masukan username kamu disini"
                    className="w-full rounded-lg text-sm md:text-lg bg-white border border-gray-300 focus:border-[#48BB78] focus:ring-2 focus:ring-[#C6F6D5] outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="relative mb-2">
                  <label
                    for="password"
                    className="leading-7 text-sm md:text-lg font-medium text-gray-600"
                  >
                    password
                  </label>
                  {/* field password */}
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Masukan passwoord disini"
                    className="w-full rounded-lg text-sm md:text-lg  bg-white border border-gray-300 focus:border-[#48BB78] focus:ring-2 focus:ring-[#C6F6D5] outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
                <div className="mb-6">
                  <input type="checkbox" id="isaya" name="isaya" value="" />
                  <label for="isaya" className="text-sm md:text-lg ml-1">
                    Ingat Saya
                  </label>
                </div>
                <button className="w-full rounded-lg shadow-md text-white bg-[#48BB78] border-0 py-2 px-8 focus:outline-none hover:bg-[#38A169] text-sm md:text-lg transition-colors duration-150 ease-in-out">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
