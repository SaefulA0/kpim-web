import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { getSession } from "next-auth/react";
import TablePinjaman from "../../../components/table/tablePinjaman";

export default function pinjaman({ data }) {
  return (
    <Layout title="Daftar Pinjaman">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <Header title="Daftar Pinjaman" />
          {/* tabel */}
          <div className="mt-10 container">
            <TablePinjaman data={data} />
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
    `http://kpim_backend.test/api/pinjaman?username=${session.user.user.username}`,
    {
      headers: {
        Authorization: `Bearer ${session.user.access_token}`,
      },
    }
  );
  const data = await response.json();

  return {
    props: {
      data: data.pinjaman,
    },
  };
}
