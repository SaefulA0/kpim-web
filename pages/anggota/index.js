import Layout from "../../components/layout";
import Profile from "../../components/profile";
import Link from "next/link";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";
import { COLUMNS } from "../../components/table/tableAnggota/columns";
import { GlobalFilter } from "../../components/GlobalFilter";

function listAnggota({ users }) {
  const columns = COLUMNS;
  const data = users;

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter } = state;

  const { pageIndex, pageSize } = state;

  return (
    <Layout title="Daftar Anggota">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-10 mb-14">
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
                    Tambah Anggota +
                  </button>
                </Link>
              </div>
            </div>
            <div>
              {/* Profil component */}
              <div className="flex justify-end items-center">
                <Profile />
              </div>
              {/* search section */}
              <div className="flex justify-end items-center mt-6">
                <Popover className="relative mr-2">
                  <Popover.Button className="w-8 h-8 flex outline-none bg-slate-50 shadow-inner rounded-full items-center justify-center hover:bg-slate-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 192 512"
                      width="8"
                      height="8"
                      className="fill-gray-600 w-4 h-4"
                    >
                      <path d="M144 80c0 26.5-21.5 48-48 48s-48-21.5-48-48s21.5-48 48-48s48 21.5 48 48zM0 224c0-17.7 14.3-32 32-32H96c17.7 0 32 14.3 32 32V448h32c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H64V256H32c-17.7 0-32-14.3-32-32z" />
                    </svg>
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute right-5 -top-6 z-10 transform px-4">
                      <div className="w-96 p-4 bg-slate-50 rounded-xl shadow-lg">
                        <p className="text-sm">
                          Masukan username atau nama anggota untuk mencari
                          anggota
                        </p>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </Popover>
                {/* search field */}
                <form>
                  <label className="text-sm font-medium text-gray-900 sr-only">
                    Search
                  </label>
                  <div className="relative w-56">
                    <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                      <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      className="block p-2 pl-10 w-full text-sm text-gray-900 bg-slate-50 shadow-inner rounded-full outline-none border focus:border-blue-500"
                      placeholder="Cari"
                      required
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* tabel */}
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
          <div className="mt-10 container">
            <table
              {...getTableProps()}
              className="w-full table-auto mb-8 text-sm text-left text-gray-500"
            >
              <thead className="text-xs text-gray-700 uppercase">
                {headerGroups.map((headerGroup) => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map((column) => (
                      <th
                        {...column.getHeaderProps()}
                        scope="col"
                        className="py-3 px-6 border-b-2"
                      >
                        {column.render("Header")}
                      </th>
                    ))}
                    <th
                      scope="col"
                      className="py-3 px-6 border-b-2 text-center"
                    >
                      Aksi
                    </th>
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row) => {
                  prepareRow(row);
                  return (
                    <tr {...row.getRowProps()} className="bg-white border-b">
                      {row.cells.map((cell) => {
                        return (
                          <td {...cell.getCellProps()} className="py-4 px-6">
                            {cell.render("Cell")}
                          </td>
                        );
                      })}
                      <td className="py-4 px-10 mx-auto relative">
                        <Menu
                          as="div"
                          className="mx-auto relative inline-block"
                        >
                          <Menu.Button className="mb-1 px-4 py-2 flex items-center rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white text-sm shadow-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              className="h-4 w-4 mr-2 fill-white"
                            >
                              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                            </svg>
                            Aksi
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Menu.Items className="absolute w-36 right-0 z-10 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href={cell.getValue()}
                                    className={`${
                                      active
                                        ? "bg-[#68D391] bg-opacity-20 text-gray-800"
                                        : "text-gray-800"
                                    } group flex w-full items-center rounded-t-md px-2 py-2`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      width="18"
                                      height="18"
                                      className="fill-gray-800 mr-1"
                                    >
                                      <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
                                    </svg>
                                    Detail Anggota
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/anggota/editAnggota"
                                    className={`${
                                      active
                                        ? "bg-[#68D391] bg-opacity-20 text-gray-800"
                                        : "text-gray-900"
                                    } group flex items-center px-2 py-2`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      width="18"
                                      height="18"
                                      className="fill-gray-800 mr-1"
                                    >
                                      <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                                    </svg>
                                    Edit Anggota
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href={`/`}
                                    className={`${
                                      active
                                        ? "bg-[#68D391] bg-opacity-20 text-gray-800"
                                        : "text-gray-800"
                                    } group flex w-full items-center rounded-b-md px-2 py-2`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      width="18"
                                      height="18"
                                      className="fill-gray-800 mr-1"
                                    >
                                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                    </svg>
                                    Hapus Anggota
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          {/* pagination */}
          <div className="flex justify-end items-center">
            <p className="text-sm">
              Halaman
              <span className="font-semibold px-1">{pageIndex + 1}</span>
              dari
              <span className="font-semibold px-1">{pageOptions.length}</span>
            </p>
            {/* gotoPage */}
            <span className="text-sm">
              || Ke Halaman {""}
              <input
                className="w-12 text-center rounded-lg border-2 border-gray-400 pl-3"
                type="number"
                defaultValue={pageIndex}
                onChange={(e) => {
                  const pageNumber = e.target.value
                    ? Number(e.target.value) - 1
                    : 0;
                  gotoPage(pageNumber);
                }}
              />
            </span>
            {/* Previous */}
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="p-2 mx-1 disabled:opacity-20 rounded-md ring-1 ring-slate-200 shadow-sm bg-slate-300 bg-opacity-70 hover:bg-opacity-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                width="12"
                height="12"
              >
                <path d="M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 278.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
              </svg>
            </button>
            {/* Next  */}
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="p-2 mx-1 disabled:opacity-20 rounded-md ring-1 ring-slate-200 shadow-sm bg-slate-300 bg-opacity-70 hover:bg-opacity-100"
            >
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
          {/* penutup tabel */}
          {/* tabel */}
          {/* <div className="mt-10 container">
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
              <tbody>
                {users.map((user, id) => {
                  return (
                    <tr key={id} className="bg-white border-b">
                      <th
                        scope="row"
                        className="py-4 text-center font-medium text-gray-900 whitespace-nowrap"
                      >
                        {user.id}
                      </th>
                      <td className="py-1">
                        <img
                          src="../img/defaultUser.png"
                          alt="Avatar"
                          className="mx-auto h-10 w-10 rounded-full ring-2 ring-white"
                        />
                      </td>
                      <td className="py-4 px-6">{user.username}</td>
                      <td className="py-4 px-6">{user.nama_anggota}</td>
                      <td className="py-4 px-6">{user.jabatan}</td>
                      <td className="py-4 px-3 text-center">
                        {user.keanggotaan ? (
                          <p className="bg-[#4299E1] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                            Anggota
                          </p>
                        ) : (
                          <p className="bg-[#E53E3E] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                            Bukan Anggota
                          </p>
                        )}
                      </td>
                      <td className="py-4 px-3 text-center">
                        {user.status ? (
                          <p className="bg-[#4299E1] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                            Aktif
                          </p>
                        ) : (
                          <p className="bg-[#718096] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                            Tidak Aktif
                          </p>
                        )}
                      </td>
                      <td className="py-4 px-10 mx-auto relative">
                        <Menu
                          as="div"
                          className="mx-auto relative inline-block"
                        >
                          <Menu.Button className="mb-1 px-4 py-2 flex items-center rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white text-sm shadow-md">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 448 512"
                              className="h-4 w-4 mr-2 fill-white"
                            >
                              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                            </svg>
                            Aksi
                          </Menu.Button>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-200"
                            enterFrom="opacity-0 translate-y-1"
                            enterTo="opacity-100 translate-y-0"
                            leave="transition ease-in duration-150"
                            leaveFrom="opacity-100 translate-y-0"
                            leaveTo="opacity-0 translate-y-1"
                          >
                            <Menu.Items className="absolute w-36 right-0 z-10 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href={`/anggota/detail/${user.username}`}
                                    className={`${
                                      active
                                        ? "bg-[#68D391] bg-opacity-20 text-gray-800"
                                        : "text-gray-800"
                                    } group flex w-full items-center rounded-t-md px-2 py-2`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      width="18"
                                      height="18"
                                      className="fill-gray-800 mr-1"
                                    >
                                      <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
                                    </svg>
                                    Detail Anggota
                                  </a>
                                )}
                              </Menu.Item>
                              <Menu.Item>
                                {({ active }) => (
                                  <a
                                    href="/anggota/editAnggota"
                                    className={`${
                                      active
                                        ? "bg-[#68D391] bg-opacity-20 text-gray-800"
                                        : "text-gray-900"
                                    } group flex items-center px-2 py-2`}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 512 512"
                                      width="18"
                                      height="18"
                                      className="fill-gray-800 mr-1"
                                    >
                                      <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                                    </svg>
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
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 448 512"
                                      width="18"
                                      height="18"
                                      className="fill-gray-800 mr-1"
                                    >
                                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                                    </svg>
                                    Hapus Anggota
                                  </a>
                                )}
                              </Menu.Item>
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div> */}
          {/* pagination */}
          {/* <div className="flex justify-end items-center">
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
          </div> */}
        </div>
      </main>
    </Layout>
  );
}
export default listAnggota;

export async function getServerSideProps(context) {
  const response = await fetch("http://kpim_backend.test/api/user");
  const data = await response.json();

  if (!data) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      users: data.users,
    },
  };
}
