import Link from "next/link";
import Layout from "../../components/layout";
import Profile from "../../components/profile";
import CardBarang from "../../components/card/pinjaman/cardBarangBayar";
import CardTotalPinjaman from "../../components/card/pinjaman/cardTotalCicilan";

function bayarPinjaman() {
  return (
    <Layout title="Bayar Pinjaman">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-10 mb-10">
          {/* header */}
          <div className="flex flex-wrap mb-10 justify-between">
            <div>
              {/* Header */}
              <h1 className="text-2xl font-bold text-[#303030]">
                Bayar Pinjaman
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
              {/* form untuk mengisi data pinjaman baru */}
              {/* pengguna */}
              <form>
                <div className="flex mb-5 flex-col justify-center rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
                  {/* field nama peminjam */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nama Peminjam
                      </span>
                      <input
                        type="text"
                        name="namaPeminjam"
                        disabled
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field minimal pembayaran */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Minimal Pembayaran
                      </span>
                      <input
                        type="text"
                        name="namaPeminjam"
                        disabled
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field cicilan ke- */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Cicilan ke-
                      </span>
                      <input
                        type="text"
                        name="namaPeminjam"
                        disabled
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* select durasi */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Durasi Cicilan
                      </span>
                    </label>
                    <select
                      id="durasi"
                      className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    >
                      <option>--Pilih Durasi--</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                    </select>
                  </div>
                  {/* field Nominal Pembayaran */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nominal Pembayaran
                      </span>
                      <input
                        type="number"
                        name="NominalPembayaran"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
                      Bayar
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kanan */}
            <div className="relative w-3/4 container rounded-lg py-8 px-12 bg-[#F0FFF4]">
              <div className="relative h-full">
                <p className="text-lg font-bold mb-5">
                  Daftar Barang Yang Dipinjam
                </p>
                <div className="mb-5">
                  <CardBarang />
                </div>
                <div className="absolute bottom-0 w-full">
                  <CardTotalPinjaman />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default bayarPinjaman;
