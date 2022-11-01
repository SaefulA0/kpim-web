import Link from "next/link";
import Layout from "../../components/layout";
import Profile from "../../components/profile";
import CardPembelianBarang from "../../components/card/pembelianBarang/cardPembelianBarang";
import CardTotalPB from "../../components/card/pembelianBarang/cardTotalPB";

function editPembelianBarang() {
  return (
    <Layout title="Edit PembelianBarang">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-10 mb-10">
          {/* header */}
          <div className="flex flex-wrap mb-10 justify-between">
            <div>
              {/* Header */}
              <h1 className="text-2xl font-bold text-[#303030]">
                Edit Data Pembelian Barang
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
            <div className="w-full">
              {/* form untuk mengedit data pembelian barang */}
              <form>
                <div className="flex mb-5 flex-col justify-center rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
                  {/* field nama penanggung jawab */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nama Penanggung Jawab
                      </span>
                      <input
                        type="text"
                        name="namaPenanggungJawab"
                        disabled
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field Supplier */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Supplier
                      </span>
                      <input
                        type="text"
                        name="supplier"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field tanggal Pembelian */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tanggal Pembelian
                      </span>
                      <input
                        type="date"
                        name="tanggalPembelian"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                </div>
              </form>
              {/* barang */}
              <form>
                <div className="flex flex-col justify-center rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
                  {/* field nama barang */}
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
                  {/* field jenis barang */}
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
                  {/* field satuan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Satuan
                      </span>
                    </label>
                    <select
                      id="satuan"
                      className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    >
                      <option>--Pilih Satuan--</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                    </select>
                  </div>
                  {/* field berat */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Berat
                      </span>
                      <input
                        type="number"
                        name="berat"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field jumlah */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Jumlah
                      </span>
                      <input
                        type="number"
                        name="jumlah"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field harga beli */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Harga Beli
                      </span>
                      <input
                        type="number"
                        name="hargaBeli"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field subtotal */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Subtotal
                      </span>
                      <input
                        disabled
                        type="number"
                        name="subtotal"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* section button tambah keranjang */}
                  <div className="flex justify-between my-8">
                    {/* button batal */}
                    <Link href="/pinjaman">
                      <button className="px-7 mr-2 md:px-16 lg:px-20 py-2 rounded-lg bg-[#F56565] hover:bg-[#ca4040] text-white shadow-md">
                        Batal
                      </button>
                    </Link>
                    {/* button simpan */}
                    <button
                      type="submit"
                      className="px-5 ml-2 md:px-16 lg:px-20 py-2 rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white shadow-md"
                    >
                      Tambah
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kanan */}
            <div className="relative w-3/4 container rounded-lg py-8 px-12 bg-[#F0FFF4]">
              {/* <div className="absolute flex left-24 h-full items-center">
                <img
                  src="../img/newLogoKI.png"
                  alt="Logo"
                  className="w-96 aspect-square"
                />
              </div> */}
              <div className="relative h-full">
                <p className="text-lg font-bold mb-5">Daftar Barang</p>
                <div className="mb-5">
                  <CardPembelianBarang />
                </div>
                <div className="absolute bottom-0 w-full">
                  <div className="my-8">
                    <CardTotalPB />
                  </div>
                  <form>
                    <button
                      type="submit"
                      className="w-full py-2 rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white shadow-md"
                    >
                      Simpan Data Barang
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default editPembelianBarang;
