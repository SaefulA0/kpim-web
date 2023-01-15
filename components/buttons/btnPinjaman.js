import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

export default function DropdownPinjaman({ pinjaman }) {
  return (
    <>
      <Menu as="div" className="relative w-fit mt-1">
        <Menu.Button>
          <div className="mx-auto mr-1.5 mb-1 px-3 py-2 flex items-center rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white text-sm shadow-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 mr-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            Aksi
          </div>
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
          <Menu.Items className="absolute z-10 w-44 mt-1 right-0 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <Menu.Item>
              {pinjaman.status ? (
                // <button
                //   disabled
                //   className="flex text-gray-700 w-full items-center text-sm rounded-t-md px-2 py-2 bg-slate-100"
                // >
                //   <svg
                //     xmlns="http://www.w3.org/2000/svg"
                //     fill="none"
                //     viewBox="0 0 24 24"
                //     strokeWidth={2}
                //     stroke="currentColor"
                //     className="w-6 h-6 mr-1 stroke-gray-700"
                //   >
                //     <path
                //       strokeLinejoin="round"
                //       strokeLinecap="round"
                //       d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                //     />
                //   </svg>
                //   Bayar Cicilan
                // </button>
                <></>
              ) : (
                <a
                  href={`/dashboard/pinjaman/bayarCicilan/${pinjaman.id}`}
                  className="flex text-gray-700 w-full items-center cursor-pointer text-sm rounded-t-md px-2 py-2 hover:bg-[#68D391] hover:bg-opacity-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6 mr-1 stroke-gray-700"
                  >
                    <path
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                    />
                  </svg>
                  Bayar Cicilan
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              <a
                href={`/dashboard/pinjaman/detailPinjaman/${pinjaman.id}`}
                className="flex text-gray-700 w-full items-center cursor-pointer text-sm px-2 py-2 hover:bg-[#68D391] hover:bg-opacity-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1 stroke-gray-700"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                Detail Pinjaman
              </a>
            </Menu.Item>
            <Menu.Item>
              <a
                href={`/dashboard/pinjaman/cicilan/${pinjaman.id}`}
                className="flex text-gray-700 w-full items-center cursor-pointer text-sm rounded-b-md px-2 py-2 hover:bg-[#68D391] hover:bg-opacity-20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 mr-1 stroke-gray-700"
                >
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                  />
                </svg>
                Riwayat Cicilan
              </a>
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </>
  );
}
