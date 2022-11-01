import Link from "next/link";
import Layout from "../../components/layout";
import Profile from "../../components/profile";
import CardNonpembelian from "../../components/card/laporanPengeluaran/cardNonpembelian";

function tambahLaporanPemasukan() {
  return (
    <Layout title="Tambah Laporan Pemasukan">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-10 mb-10">
          {/* header */}
          <div className="flex flex-wrap mb-10 justify-between">
            <div>
              {/* Header */}
              <h1 className="text-2xl font-bold text-[#303030]">
                Buat Laporan Pengeluaran
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
              {/* form untuk mengisi data laporan pengeluaran baru */}
              <form>
                <div className="flex mb-5 flex-col justify-center rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
                  <h3 className="block text-lg text-center mb-4 font-semibold text-[#667080]">
                    Pengeluaran Utama
                  </h3>
                  {/* select bulan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Bulan
                      </span>
                    </label>
                    <select
                      id="bulan"
                      className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    >
                      <option>--Pilih Bulan--</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                    </select>
                  </div>
                  {/* select Tahun */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tahun
                      </span>
                    </label>
                    <select
                      id="tahun"
                      className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                    >
                      <option>--Pilih Tahun--</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                      <option value="Lorem">Lorem</option>
                    </select>
                  </div>
                  {/* field total simpanan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Total Simpanan
                      </span>
                      <input
                        type="number"
                        name="totalSimpanan"
                        disabled
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field total penjualan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Total Penjualan
                      </span>
                      <input
                        type="number"
                        name="totalPenjualan"
                        disabled
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field total modal */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Total Modal
                      </span>
                      <input
                        type="number"
                        name="totalModal"
                        disabled
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field total pinjaman */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Total Pinjaman
                      </span>
                      <input
                        type="number"
                        name="totalPinjaman"
                        disabled
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                </div>
              </form>
              <form>
                <div className="flex mb-5 flex-col justify-center rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
                  <h3 className="block text-lg text-center mb-4 font-semibold text-[#667080]">
                    Pengeluaran Nontransaksi
                  </h3>
                  {/* field nama transaksi */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nama Transaksi
                      </span>
                      <input
                        type="text"
                        name="namaTransaksi"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field Tanggal transaksi */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tanggal Transaksi
                      </span>
                      <input
                        type="date"
                        name="tanggalTransaksi"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field nominal transaksi */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nominal Transaksi
                      </span>
                      <input
                        type="text"
                        name="nominalTransaksi"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field keterangan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Keterangan
                      </span>
                      <input
                        type="text"
                        name="keterangan"
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
                      Tambah
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kanan */}
            <div className="relative w-3/4 container rounded-lg py-8 px-12 bg-[#F0FFF4]">
              <div className="relative h-full">
                <p className="text-lg text-gray-800 font-bold mb-5">
                  Daftar Nonpembelian
                </p>
                <div className="mb-5">
                  <CardNonpembelian />
                </div>
                <div className="absolute bottom-0 w-full">
                  <form>
                    <button
                      type="submit"
                      className="w-full py-2 rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white shadow-md"
                    >
                      Buat Laporan
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

export default tambahLaporanPemasukan;
