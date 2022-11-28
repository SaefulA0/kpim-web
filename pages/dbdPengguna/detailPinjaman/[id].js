import Layout from "../../../components/layout";
import Profile from "../../../components/profile";
import CardBarangL from "../../../components/card/cardBarangL";
import CardBarangR from "../../../components/card/cardBarangR";
import CardTotalPinjaman from "../../../components/card/cardTotalPinjaman";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";

export default function detailPinjaman({ data, user, dataDetail, dataBarang }) {
  const router = useRouter();
  const { status } = useSession();

  // console.log(barangs);

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login");
  }, [status]);

  return (
    <Layout title="Detail Pinjaman">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <div className="flex flex-wrap justify-between pb-6">
            <div>
              {/* Header */}
              <h1 className="text-2xl mb-6 font-bold text-[#303030]">
                Detail Pinjaman
              </h1>
            </div>
            <div>
              {/* Profil component */}
              <div className="hidden md:flex justify-end items-center">
                <Profile />
              </div>
            </div>
          </div>
          {/* main */}
          <div className="flex flex-wrap md:flex-nowrap">
            {/* flex kanan */}
            <div className="w-full h-fit container rounded-lg mb-8 md:mb-0 py-8 px-12 md:mr-16 bg-[#F7FAFC]">
              <div className="flex flex-col justify-center">
                {/* Nama */}
                <div className="my-3">
                  <label className="block border-b-2">
                    <span className="block text-sm font-semibold text-[#667080]">
                      Nama
                    </span>
                    <p className="text-[#667080] text-sm my-2 border-[#667080]">
                      {user.nama_anggota}
                    </p>
                  </label>
                </div>
                {/* Tanggal Peminjaman */}
                <div className="my-3">
                  <label className="block border-b-2">
                    <span className="block text-sm font-semibold text-[#667080]">
                      Tanggal Peminjaman
                    </span>
                    <time dateTime={data.tgl_pinjaman}>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {convertTime(data.tgl_pinjaman)}
                      </p>
                    </time>
                  </label>
                </div>
                {/* Total Pinjaman */}
                <div className="my-3">
                  <label className="block border-b-2">
                    <span className="block text-sm font-semibold text-[#667080]">
                      Total Peminjaman
                    </span>
                    <p className="text-[#667080] text-sm my-2 border-[#667080]">
                      Rp{" "}
                      {data.total_pinjaman
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
                      Rp{" "}
                      {data.nominal_cicilan
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
                      Rp{" "}
                      {data.sisa_cicilan
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
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
                      {data.durasi_cicilan} Bulan
                    </p>
                  </label>
                </div>
                {/* section button */}
                <div className="flex justify-between my-12">
                  {/* button batal */}
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="w-full md:w-fit px-7 mr-4 md:px-16 lg:px-20 py-2 rounded-lg bg-[#718096] hover:bg-[#4A5568] text-white shadow-md"
                  >
                    Kembali
                  </button>
                  {/* button simpan */}
                  <button className="w-full md:w-fit px-7 md:px-16 lg:px-20 py-2 rounded-lg bg-[#48BB78] hover:bg-[#38A169] text-white shadow-md">
                    Bayar
                  </button>
                </div>
              </div>
            </div>
            {/* flex kiri */}
            <div className="h-auto w-full md:w-3/4 container rounded-lg py-8 px-6 md:px-12 bg-[#F0FFF4]">
              <div className="md:relative flex flex-col items-center h-fit md:min-h-screen">
                <p className="text-lg font-bold mb-5">
                  Daftar Barang Yang Dipinjam
                </p>
                <div className="flex mb-12 md:pb-40">
                  <div className="w-full">
                    {dataBarang.map((dataBarang) => {
                      return (
                        <div key={dataBarang.barang.id}>
                          <CardBarangL dataBarang={dataBarang} />
                        </div>
                      );
                    })}
                  </div>
                  <div className="w-full">
                    {dataDetail.map((dataDetail) => {
                      return (
                        <div key={dataDetail.id}>
                          <CardBarangR dataDetail={dataDetail} />
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="md:absolute bottom-0 w-full">
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
      dataBarang: barang,
    },
  };
}

export const convertTime = (time) => {
  return new Date(time).toLocaleDateString("id-uk", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
