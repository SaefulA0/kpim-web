import Layout from "../../components/layout";
import Header from "../../components/headerWajib";

export default function simpanaWajib() {
  return (
    <Layout title="Daftar Simpanan Wajib">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-10 mb-14">
          {/* header */}
          <Header />
        </div>
      </main>
    </Layout>
  );
}

// export async function getServerSideProps(context) {
//   const response = await fetch("http://kpim_backend.test/api/user");
//   const data = await response.json();

//   if (!data) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       users: data.users,
//     },
//   };
// }
