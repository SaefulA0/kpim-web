import Layout from "../../components/layout";
import HeaderPinjaman from "../../components/headerPinjaman.js";
import { useSession } from "next-auth/react";

export default function pinjaman() {
  return (
    <Layout title="Daftar Pinjaman">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-10 mb-14">
          {/* header */}
          <HeaderPinjaman />
        </div>
      </main>
    </Layout>
  );
}
