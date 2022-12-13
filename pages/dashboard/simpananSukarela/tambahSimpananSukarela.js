import Link from "next/link";
import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

export default function tambahSimpananSukarela() {
  const router = useRouter();
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <Layout title="Tambah Simpanan Sukarela">
        <main className="font-inter">
          <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
            {/* header */}
            <Header title="Tambah Simpanan Sukarela" />
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
                          Nama Anggota
                        </span>
                        <input
                          type="text"
                          name="namaAnggota"
                          disabled
                          defaultValue={session.user.user.nama_anggota}
                          className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    {/* field nominal simpanan */}
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Nominal Simpanan Sukarela
                        </span>
                        <input
                          type="number"
                          name="nominalSimpanan"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    {/* field tanggal bayar */}
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Tanggal Bayar
                        </span>
                        <input
                          type="date"
                          name="tanggalBayar"
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    {/* field keterangan simpanan */}
                    <div className="my-2">
                      <label className="block">
                        <span className="block text-sm font-semibold text-[#667080]">
                          Keterangan Simpanan Sukarela
                        </span>
                        <input
                          type="text"
                          name="keteranganSimpanan"
                          defaultValue={"-"}
                          className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        />
                      </label>
                    </div>
                    {/* section button */}
                    <div className="flex justify-between mt-12">
                      {/* button batal */}
                      <button
                        type="button"
                        onClick={() => router.back()}
                        className="w-full  px-7 mr-4 md:px-16 lg:px-20 py-2 rounded-lg bg-[#718096] hover:bg-[#4A5568] text-white shadow-md"
                      >
                        Kembali
                      </button>
                      {/* button simpan */}
                      <button className="w-full  px-7 md:px-16 lg:px-20 py-2 rounded-lg bg-[#48BB78] hover:bg-[#38A169] text-white shadow-md">
                        Tambah
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {/* flex kanan */}
              <div className="w-full min-h-screen container flex rounded-lg py-8 px-12 justify-center items-center bg-[#F0FFF4]">
                <img
                  src="../../img/newLogoKI.png"
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
  return <>Loading</>;
}
