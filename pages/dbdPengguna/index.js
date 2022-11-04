import Layout from "../../components/layout";

export default function HomePage() {
  return (
    <Layout title="Dashboard Pengguna">
      <main className="p-12 h-screen font-inter">
        <h1 className="text-3xl font-bold underline text-cyan-400">
          Dashboard Pengguna
        </h1>
        {/* <div className="box-border text-slate-700 flex items-center justify-center h-40 w-fit rounded-lg px-6 py-4 shadow-md bg-[#EDF2F7]">
          <div className="mr-3">
            <p className="font-medium">Tenggat Waktu</p>
            <h2 className="font-bold text-3xl">02 SEP</h2>
          </div>
          <div className="border-l-4 border-[#4A5568]">
            <p className="ml-2 font-semibold">Nominal Cicilan</p>
            <h4 className="ml-4 font-bold">RP 14.000</h4>
            <p className="ml-4">Lihat Selengkapnya</p>
          </div>
        </div> */}
      </main>
    </Layout>
  );
}
