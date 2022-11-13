import Layout from "../../components/layout";
import HeaderSukarela from "../../components/headerSukarela";

export default function pinjaman() {
  return (
    <Layout title="Daftar Simpanan Sukarela">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-10 mb-14">
          {/* header */}
          <HeaderSukarela />
          <div className="w-full h-screen bg-slate-200">Table</div>
        </div>
      </main>
    </Layout>
  );
}
