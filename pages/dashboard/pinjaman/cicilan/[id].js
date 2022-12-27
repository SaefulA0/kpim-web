import Layout from "../../../../components/layout";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";
import { signOut } from "next-auth/react";
import TableCicilan from "../../../../components/table/tableCicilan";
import Profile from "../../../../components/profileMD";

export default function detailCicilan({ data, dataCicilan }) {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") signOut(), Router.replace("/login");
  }, [status]);

  return (
    <Layout title="Daftar Cicilan">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <div className="flex flex-wrap items-center justify-between pb-6">
            <div>
              {/* Header */}
              <h1 className="text-2xl font-bold text-[#303030]">
                Cicilan Pada{" "}
                <time dateTime={data.tgl_pinjaman}>
                  {convertTime(data.tgl_pinjaman)}
                </time>
              </h1>
            </div>
            <div>
              {/* Profil component */}
              <div className="hidden md:flex justify-end items-center">
                <Profile />
              </div>
            </div>
          </div>
          <div className="w-full min-h-screen">
            {/* tabel */}
            <TableCicilan dataCicilan={dataCicilan} />
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
    `http://kpim_backend.test/api/cicilan?pinjaman=${id2}`
  );
  const dataCCL = await response2.json();
  const cicilanData = JSON.parse(JSON.stringify(dataCCL));

  return {
    props: {
      data: pinjamanData.pinjaman,
      user: pinjamanData.pinjaman.user,
      dataCicilan: cicilanData.cicilan,
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
