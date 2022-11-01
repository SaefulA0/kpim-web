import Link from "next/link";
import Layout from "../../components/layout";
import Profile from "../../components/profile";

function editPersediaanBarang() {
  return (
    <Layout title="Edit Persediaan Barang">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-10 mb-10">
          {/* header */}
          <div className="flex flex-wrap mb-10 justify-between">
            <div>
              {/* Header */}
              <h1 className="text-2xl font-bold text-[#303030]">
                Edit Persediaan Barang
              </h1>
            </div>
            <div>
              {/* Profil component */}
              <div className="flex justify-end items-center">
                <Profile />
              </div>
            </div>
          </div>
          {/* main */}
          <div className="flex flex-wrap md:flex-nowrap">
            {/* flex kiri */}
            <div className="w-full h-fit container rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
              {/* form untuk mengisi data anggota baru */}
              <form>
                <div className="flex flex-col justify-center">
                  {/* field nama anggota */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nama Barang
                      </span>
                      <input
                        type="text"
                        name="namaBarang"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field nama anggota */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Jenis Barang
                      </span>
                      <input
                        type="text"
                        name="jenisBarang"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field harga barang */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Harga
                      </span>
                      <input
                        type="number"
                        name="hargaBarang"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field stok barang */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Stok
                      </span>
                      <input
                        type="number"
                        name="stokBarang"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field status */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Status
                      </span>
                    </label>
                    <select
                      id="status"
                      class="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    >
                      <option selected>--Pilih Status--</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                    </select>
                  </div>
                  {/* field berat barang */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Berat
                      </span>
                      <input
                        type="number"
                        name="beratBarang"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field satuan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Satuan
                      </span>
                    </label>
                    <select
                      id="satuan"
                      class="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    >
                      <option selected>--Pilih Satuan--</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                    </select>
                  </div>
                  {/* section button */}
                  <div className="flex justify-between my-8">
                    {/* button batal */}
                    <Link href="/anggota">
                      <button className="px-7 mr-2 md:px-16 lg:px-20 py-2 rounded-lg bg-[#F56565] hover:bg-[#ca4040] text-white shadow-md">
                        Batal
                      </button>
                    </Link>
                    {/* button simpan */}
                    <button
                      type="submit"
                      className="px-5 ml-2 md:px-16 lg:px-20 py-2 rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white shadow-md"
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kanan */}
            <div className="w-full min-h-screen container flex rounded-lg py-8 px-12 justify-center items-center bg-[#F0FFF4]">
              <img
                src="../img/newLogoKI.png"
                alt="Logo"
                className="aspect-square"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default editPersediaanBarang;
