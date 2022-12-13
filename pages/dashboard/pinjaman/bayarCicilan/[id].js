import Layout from "../../../../components/layout";
import Header from "../../../../components/header";
import CardBarangL from "../../../../components/card/cardBarangL";
import CardBarangR from "../../../../components/card/cardBarangR";
import CardTotalPinjaman from "../../../../components/card/cardTotalPinjaman";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function bayarPinjaman({ data, user, dataDetail, dataBarang }) {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login");
  }, [status]);

  return (
    <Layout title="Tambah Simpanan Sukarela">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <Header title="Bayar Cicilan Pinjaman" />
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
                        name="nama_anggota"
                        disabled
                        defaultValue={user.nama_anggota}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field nominal pembayaran */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nominal Bayar
                      </span>
                      <input
                        type="text"
                        name="nominal_bayar"
                        disabled
                        defaultValue={data.nominal_cicilan
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field cicilan ke- */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Cicilan Ke-
                      </span>
                      <input
                        type="text"
                        name="lorem"
                        disabled
                        // defaultValue={}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field durasi cicilan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Durasi Cicilan
                      </span>
                      <input
                        type="text"
                        name="durasi_cicilan"
                        disabled
                        defaultValue={data.durasi_cicilan}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* select berapa kali ingin bayar */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Berapa kali ingin bayar?
                      </span>
                      <select
                        id="countries"
                        class="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      >
                        <option selected value="1">
                          1 Bulan
                        </option>
                        <option value="2">2 Bulan</option>
                        <option value="3">3 Bulan</option>
                        <option value="4">4 Bulan</option>
                      </select>
                    </label>
                  </div>

                  {/* field nominal cicilan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nominal Pembaran
                      </span>
                      <input
                        type="text"
                        name="nominal_cicilan"
                        disabled
                        // defaultValue={}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* section button */}
                  <div className="flex justify-between mt-12">
                    {/* button batal */}
                    <button
                      type="button"
                      onClick={() => router.back()}
                      className="w-full px-7 mr-4 md:px-16 lg:px-20 py-2 rounded-lg bg-[#718096] hover:bg-[#4A5568] text-white shadow-md"
                    >
                      Kembali
                    </button>
                    {/* button simpan */}
                    <button className="w-full px-7 md:px-16 lg:px-20 py-2 rounded-lg bg-[#48BB78] hover:bg-[#38A169] text-white shadow-md">
                      Tambah
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kanan */}
            <div className="md:ml-16 h-auto md:w-full bg-cardBG3 bg-no-repeat bg-center container rounded-lg py-8 px-5 md:px-12 bg-[#F0FFF4]">
              <div className="md:relative flex flex-col items-center h-fit md:min-h-screen">
                <p className="w-full text-left text-lg font-bold mb-5">
                  Daftar Barang Yang Dipinjam
                </p>
                <div className="flex mb-12 md:pb-40">
                  <div>
                    {dataBarang.map((dataBarang) => {
                      return (
                        <div key={dataBarang.barang.id}>
                          <CardBarangL dataBarang={dataBarang} />
                        </div>
                      );
                    })}
                  </div>
                  <div>
                    {dataDetail.map((dataDetail) => {
                      return (
                        <div key={dataDetail.id}>
                          <CardBarangR dataDetail={dataDetail} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="w-full md:absolute bottom-0">
                  <CardTotalPinjaman data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`http://kpim_backend.test/api/pinjaman`);
  const data = await response.json();
  const datas = data.pinjaman;
  const paths = datas.map((pinjaman) => ({
    params: { id: `${pinjaman.id}` },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // data fetching pinjaman
  const { id } = context.params;
  const response1 = await fetch(`http://kpim_backend.test/api/pinjaman/${id}`);
  const dataPJN = await response1.json();
  const pinjamanData = JSON.parse(JSON.stringify(dataPJN));

  // data fetching detail pinjaman
  const id2 = pinjamanData.pinjaman.id;
  const response2 = await fetch(
    `http://kpim_backend.test/api/detail-pinjaman?pinjaman=${id2}`
  );
  const dataDTL = await response2.json();
  const detailData = JSON.parse(JSON.stringify(dataDTL));
  const dataDet = detailData.detail_pinjaman;

  const barang = await Promise.all(
    dataDet.map((idbarang) =>
      fetch(`http://kpim_backend.test/api/barang/${idbarang.id_barang}`).then(
        (response) => response.json()
      )
    )
  );
  const barangData = JSON.parse(JSON.stringify(barang));

  return {
    props: {
      data: pinjamanData.pinjaman,
      user: pinjamanData.pinjaman.user,
      dataDetail: detailData.detail_pinjaman,
      dataBarang: barangData,
    },
  };
}
