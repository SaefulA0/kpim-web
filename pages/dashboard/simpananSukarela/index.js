import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { getSession } from "next-auth/react";
import TableSimpananSukarela from "../../../components/table/tableSimpananSukarela";

export default function pinjaman({ data }) {
  return (
    <Layout title="Daftar Simpanan Sukarela">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <Header title="Daftar Simpanan Sukarela" />
          <div className="w-full min-h-screen">
            {/* tabel */}
            <TableSimpananSukarela data={data} />
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(req, res) {
  const session = await getSession(req, res);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const response = await fetch(
    `http://kpim_backend.test/api/simpanan-sukarela?username=${session.user.user.username}`,
    {
      headers: {
        Authorization: `Bearer ${session.user.access_token}`,
      },
    }
  );
  const data = await response.json();

  return {
    props: {
      data: data.simpanan_sukarela,
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
