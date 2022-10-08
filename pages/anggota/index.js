import Layout from "../../components/layout";
import Profile from "../../components/profile";
import Link from "next/link";
import { Menu } from "@headlessui/react";

function anggota() {
  return (
    <Layout title="Anggota">
      <main className="font-inter">
        <div className="w-auto h-screen mx-8 my-10">
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
          <div className=" mt-10">
            <table className="w-full table-auto mb-8 text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    Id
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2 text-center">
                    Profil
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    Username
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    Nama Anggota
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    Jabatan
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2 text-center">
                    Keanggotaan
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2 text-center">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2 text-center">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="">
                <tr className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                  >
                    1
                  </th>
                  <td className="py-4 px-6">
                    <img
                      src="../img/defaultUser.png"
                      alt="Avatar"
                      className="mx-auto h-10 w-10 rounded-full ring-2 ring-white"
                    />
                  </td>
                  <td className="py-4 px-6">Asep Gorbacef</td>
                  <td className="py-4 px-6">Asep Gorbacef</td>
                  <td className="py-4 px-6 text-center">Pengurus</td>
                  <td className="py-4 px-6 text-center">
                    <p className="bg-[#00B5D8] text-white mx-auto px-4 py-1 rounded-full w-fit">
                      Anggota
                    </p>
                  </td>
                  <td className="py-4 px-6">
                    <p className="bg-[#4299E1] text-white mx-auto px-4 py-1 rounded-full w-fit">
                      Aktif
                    </p>
                  </td>
                  <td className="py-4 px-6">
                    {/* <button className="px-4 py-2 mx-auto flex items-center rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white text-sm shadow-md"></button> */}
                    <Menu as="div" className="relative">
                      <Menu.Button className=" px-4 py-2 mx-auto flex items-center rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white text-sm shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          className="h-4 w-4 mr-2 fill-white"
                        >
                          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                        Aksi
                      </Menu.Button>
                      <Menu.Items className="absolute z-10 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={`${
                                active
                                  ? "bg-[#68D391] bg-opacity-20 text-gray-800"
                                  : "text-gray-900"
                              } group flex w-full items-center rounded-t-md px-2 py-2`}
                            >
                              Edit Anggota
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={`${
                                active
                                  ? "bg-[#68D391] bg-opacity-20 text-gray-800"
                                  : "text-gray-800"
                              } group flex w-full items-center rounded-b-md px-2 py-2`}
                            >
                              Detail Anggota
                            </a>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="/"
                              className={`${
                                active
                                  ? "bg-[#68D391] bg-opacity-20 text-gray-800"
                                  : "text-gray-800"
                              } group flex w-full items-center rounded-b-md px-2 py-2`}
                            >
                              Hapus Anggota
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Menu>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex justify-end items-center">
            <p className="text-sm">
              Menampilkan
              <span className="font-semibold px-1">1</span>
              dari
              <span className="font-semibold px-1">50</span>
            </p>
            <button className="p-2 mx-1 rounded-md ring-1 ring-slate-200 shadow-sm bg-slate-300 bg-opacity-70 hover:bg-opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="12"
                height="12"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </button>
            <button className="p-2 mx-1 rounded-md ring-1 ring-slate-200 shadow-sm bg-slate-300 bg-opacity-70 hover:bg-opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="12"
                height="12"
              >
                <path d="M342.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L274.7 256 105.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z" />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default anggota;
