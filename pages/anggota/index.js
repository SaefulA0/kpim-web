import Layout from "../../components/layout";
import Profile from "../../components/profile";
import Link from "next/link";

function anggota() {
  return (
    <Layout title="Anggota">
      <main>
        <div className="w-auto h-screen mx-8 my-12">
          {/* header */}
          <div className="flex flex-wrap justify-between">
            <div>
              {/* Header */}
              <h1 className="text-2xl font-bold text-[#303030]">
                Daftar Anggota
              </h1>
              <div className="flex items-center my-8">
                {/* jumlah record */}
                <p>Semua</p>
                <span>()</span>
                {/* button tambah anggota */}
                <Link href="/anggota/tambahAnggota">
                  <button className="px-4 py-1 ml-8 text-white shadow-md rounded-full bg-[#38A169]">
                    Tambah Baru +
                  </button>
                </Link>
              </div>
            </div>
            <div>
              {/* Profil component */}
              <Profile />
              {/* search field */}
              <div className="relative flex mt-4 w-60 shadow-inner items-center py-2 px-4 rounded-full bg-[#f8f8f8]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="currenColor"
                  className="w-4 h-4 absolute left-0 ml-4 fill-[#9FA2AB]"
                >
                  <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search..."
                  className="ml-6 bg-transparent"
                ></input>
              </div>
            </div>
          </div>
          {/* tabel */}
          <div className="overflow-x-auto relative mt-10">
            <table className="w-full table-auto text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase ">
                <tr>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    No
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    Anggota
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    S.Pokok
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    S.Wajib
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    S.Sukarela
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2 text-center">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    1
                  </th>
                  <td className="py-4 px-6">Cecep Giryo</td>
                  <td className="py-4 px-6">1.000.000</td>
                  <td className="py-4 px-6">1.000.000</td>
                  <td className="py-4 px-6">1.000.000</td>
                  <td className="py-4 px-6">
                    <button className="px-4 py-2 mx-auto flex items-center rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white text-sm shadow-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        className="h-4 w-4 mr-2 fill-white"
                      >
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                      </svg>
                      Aksi
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex">
            <p>Menampilkan</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default anggota;
