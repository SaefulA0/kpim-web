import Layout from "../../components/layout";
import Header from "../../components/header";
import { getSession } from "next-auth/react";
import TableSimpananWajib from "../../components/table/tableSimpananWajib";

export default function simpanaWajib({ data }) {
  return (
    <Layout title="Daftar Simpanan Wajib">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <Header title="Simpanan Wajib" />
          <div className="w-full min-h-screen">
            {/* tabel */}
            <TableSimpananWajib data={data} />
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
    `http://kpim_backend.test/api/simpanan-wajib?username=${session.user.user.username}`
  );
  const data = await response.json();

  return {
    props: {
      data: data.simpanan_wajib,
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
