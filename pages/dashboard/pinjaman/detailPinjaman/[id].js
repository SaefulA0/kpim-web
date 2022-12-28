import Layout from "../../../../components/layout";
import Header from "../../../../components/header";
import CardBarangL from "../../../../components/card/cardBarangL";
import CardBarangR from "../../../../components/card/cardBarangR";
import CardTotalPinjaman from "../../../../components/card/cardTotalPinjaman";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router, { useRouter } from "next/router";
import { getSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function detailPinjaman({ data, user, dataDetail, dataBarang }) {
  const router = useRouter();
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") signOut(), Router.replace("/login");
  }, [status]);

  // useEffect(() => {
  //   const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
  //   const myMidtransClientKey = "your-client-key-goes-here";

  //   let scriptTag = document.createElement("script");
  //   scriptTag.src = midtransScriptUrl;
  //   scriptTag.setAttribute("data-client-key", myMidtransClientKey);

  //   document.body.appendChild(scriptTag);
  //   return () => {
  //     document.body.removeChild(scriptTag);
  //   };
  // }, []);

  return (
    <Layout title="Detail Pinjaman">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <Header title="Detail Pinjaman" />
          {/* main */}
          <div className="flex flex-wrap justify-between md:flex-nowrap">
            {/* flex kiri  */}
            <div className="md:w-full h-fit container rounded-lg mb-8 md:mb-0 py-8 px-12 bg-[#F7FAFC]">
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
                {/* Sisa Cicilan */}
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
                <div className="flex justify-between mt-12">
                  {/* button batal */}
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="w-1/2 px-7 mr-4 py-2 rounded-lg bg-[#718096] hover:bg-[#4A5568] text-white shadow-md"
                  >
                    Kembali
                  </button>
                  {/* button simpan */}
                  <a
                    // onClick={}
                    href={`/dashboard/pinjaman/cicilan/${data.id}`}
                    className="w-1/2 text-center px-7 md:px-14 py-2 rounded-lg bg-[#48BB78] hover:bg-[#38A169] text-white shadow-md"
                  >
                    Bayar Cicilan
                  </a>
                </div>
              </div>
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

export async function getStaticPaths(context) {
  const session = await getSession(context);
  console.log(session);
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
  // const session = await getSession(req, res);
  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: "/login",
  //       permanent: false,
  //     },
  //   };
  // }
  // console.log(session);
  // const token = session.user.access_token;

  const { id } = context.params;
  const response1 = await fetch(
    `http://kpim_backend.test/api/pinjaman/${id}`
    // , {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );
  const dataPJN = await response1.json();
  const pinjamanData = JSON.parse(JSON.stringify(dataPJN));

  // data fetching detail pinjaman
  const id2 = pinjamanData.pinjaman.id;
  const response2 = await fetch(
    `http://kpim_backend.test/api/detail-pinjaman?pinjaman=${id2}`
    // ,
    // {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //   },
    // }
  );
  const dataDTL = await response2.json();
  const detailData = JSON.parse(JSON.stringify(dataDTL));
  const dataDet = detailData.detail_pinjaman;

  const barang = await Promise.all(
    dataDet.map((idbarang) =>
      fetch(
        `http://kpim_backend.test/api/barang/${idbarang.id_barang}`
        // , {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      ).then((response) => response.json())
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

export const convertTime = (time) => {
  return new Date(time).toLocaleDateString("id-uk", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
