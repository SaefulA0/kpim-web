import Link from "next/link";
import { Menu, Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function TableSimpananSukarela({ data }) {
  return (
    <>
      <div className="relative w-full h-5">
        <div className="w-full flex justify-between absolute right-0">
          <Link href="/dashboard/simpananSukarela/tambahSimpananSukarela">
            <button className="px-4 py-1.5 h-fit text-white shadow-md rounded-full bg-[#38A169] hover:bg-[#288755]">
              Tambah Simpanan Sukarela +
            </button>
          </Link>
          <div className="flex">
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
                      Masukan nomer transaksi untuk tanggal bayar untuk mencari
                      simpanan wajib
                    </p>
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
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
      <div className="mt-10 container">
        <table className="w-full table-auto mb-8 text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase">
            <tr>
              <th scope="col" className="py-3 px-6 border-b-2 text-center">
                Id
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                Nominal
              </th>
              <th scope="col" className="py-3 px-6 border-b-2">
                Tanggal Bayar
              </th>
              <th scope="col" className="py-3 px-6 border-b-2 text-center">
                Status
              </th>
              <th scope="col" className="w-96 py-3 px-6 border-b-2">
                Keterangan
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((simpSukarela) => {
              return (
                <tr key={simpSukarela.id} className="bg-white border-b">
                  <th
                    scope="row"
                    className="py-4 text-center font-medium text-gray-900 whitespace-nowrap"
                  >
                    {simpSukarela.id}
                  </th>
                  <td className="py-4 px-6">
                    Rp{" "}
                    {simpSukarela.nominal_sukarela
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </td>
                  <td className="py-4 px-6">
                    <time dateTime={simpSukarela.tgl_bayar}>
                      {convertTime(simpSukarela.tgl_bayar)}
                    </time>
                  </td>
                  <td className="py-4 px-3 text-center">
                    {simpSukarela.status ? (
                      <p className="bg-[#4299E1] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                        Sudah Diambil
                      </p>
                    ) : (
                      <p className="bg-[#718096] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                        Belum Diambil
                      </p>
                    )}
                  </td>
                  <td className="py-4 px-6">
                    {simpSukarela.ket ? (
                      <p className="text-gray-600 px-4 py-1 rounded-full w-fit">
                        simpWajib.ket
                      </p>
                    ) : (
                      <p className="text-gray-600 mx-auto px-4 py-1 rounded-full w-fit">
                        -
                      </p>
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
}

export const convertTime = (time) => {
  return new Date(time).toLocaleDateString("id-uk", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
