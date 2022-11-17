import Layout from "../../../components/layout";
import Profile from "../../../components/profile";
import CardBarang from "../../../components/card/cardBarang";
import CardTotalPinjaman from "../../../components/card/cardTotalPinjaman";

export default function detailPinjaman() {
  return (
    <Layout title="Anggota">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-10 mb-10">
          {/* header */}
          <div className="flex flex-wrap mb-10 justify-between">
            <div>
              {/* Header */}
              <h1 className="text-2xl font-bold text-[#303030]">
                Detail Pinjaman
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
            {/* flex kanan */}
            <div className="w-full h-fit container rounded-lg mb-8 md:mb-0 py-8 px-12 md:mr-16 bg-[#F7FAFC]">
              {/* form untuk mengisi data anggota baru */}
              <form>
                <div className="flex flex-col justify-center">
                  {/* Nama */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nama
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        lorem
                      </p>
                    </label>
                  </div>
                  {/* Tanggal Peminjaman */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tanggal Peminjaman
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        11/11/2011
                      </p>
                    </label>
                  </div>
                  {/* Total Pinjaman */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Total Peminjaman
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Rp 200.000
                      </p>
                    </label>
                  </div>
                  {/* Nominal Cicilan */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nominal Cicilan
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Rp 20.000
                      </p>
                    </label>
                  </div>
                  {/* Nominal Cicilan */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Sisa Cicilan
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Rp 60.000
                      </p>
                    </label>
                  </div>
                  {/* Nominal Cicilan */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Durasi Cicilan
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        6 Bulan
                      </p>
                    </label>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kiri */}
            <div className=" h-auto w-full md:w-3/4 container rounded-lg py-8 px-12 bg-[#F0FFF4]">
              <div className="md:relative h-fit md:min-h-screen">
                <p className="text-lg font-bold mb-5">
                  Daftar Barang Yang Dipinjam
                </p>
                <div className="mb-12 md:pb-40">
                  <CardBarang />
                </div>
                <div className="md:absolute md:bottom-0 w-full">
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
