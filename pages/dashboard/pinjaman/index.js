import Layout from "../../../components/layout";
import Header from "../../../components/header";
import { getSession } from "next-auth/react";
import TablePinjaman from "../../../components/table/tablePinjaman";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import Router from "next/router";
import { signOut } from "next-auth/react";

export default function pinjaman({ data }) {
  const { data: session, status } = useSession();

  data.sort().reverse();

  useEffect(() => {
    if (status === "unauthenticated") signOut(), Router.replace("/login");
  }, [status]);

  return (
    <Layout title="Daftar Pinjaman">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <Header title="Daftar Pinjaman" />
          <div className="w-full min-h-screen">
            {/* tabel */}
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
  const token = session.user.access_token;
  const username = session.user.user.username;
  const response = await fetch(
    `http://kpim_backend.test/api/pinjaman?username=${username}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  if (data.message === "This action is unauthorized.") {
    return {
      redirect: {
        destination: "/session",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: data.pinjaman,
    },
  };
}
