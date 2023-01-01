import Layout from "../../../../components/layout";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import Router from "next/router";
import { signOut } from "next-auth/react";
import TableCicilan from "../../../../components/table/tableCicilan";
import Profile from "../../../../components/profileMD";
import { getSession } from "next-auth/react";

export default function detailCicilan({ data, dataCicilan }) {
  const { status } = useSession();

  dataCicilan.sort().reverse();

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
                Daftar Cicilan Untuk Pinjaman{" "}
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

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const token = session.user.access_token;

  // mendapatkan id dari endpoint halaman
  const { id } = context.params;

  // mendapatkan data pinjaman
  const response1 = await fetch(`http://kpim_backend.test/api/pinjaman/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const dataPJN = await response1.json();
  if (dataPJN.message === "This action is unauthorized.") {
    return {
      redirect: {
        destination: "/session",
        permanent: false,
      },
    };
  }
  const pinjamanData = JSON.parse(JSON.stringify(dataPJN));
  const id2 = pinjamanData.pinjaman.id;

  // mendaptkan data cicilan
  const response2 = await fetch(
    `http://kpim_backend.test/api/cicilan?pinjaman=${id2}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const dataCCL = await response2.json();
  if (dataCCL.message === "This action is unauthorized.") {
    return {
      redirect: {
        destination: "/session",
        permanent: false,
      },
    };
  }
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
