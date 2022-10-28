import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function tableDaftarSimpanan() {
  return (
    <div className="mt-10 container">
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
          <tr className="bg-white border-b">
            <th
              scope="row"
              className="py-4 text-center font-medium text-gray-900 whitespace-nowrap"
            >
              1
            </th>
            <td className="py-1">
              <img
                src="../img/defaultUser.png"
                alt="Avatar"
                className="mx-auto h-10 w-10 rounded-full ring-2 ring-white"
              />
            </td>
            <td className="py-4 px-6">Lorem</td>
            <td className="py-4 px-6">Lorem</td>
            <td className="py-4 px-6">Lorem</td>
            <td className="py-4 px-3 text-center">
              <p className="bg-[#4299E1] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                Anggota
              </p>
            </td>
            <td className="py-4 px-3 text-center">
              <p className="bg-[#4299E1] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                Aktif
              </p>
            </td>
            <td className="py-4 px-10 mx-auto relative">
              <Menu as="div" className="mx-auto relative inline-block">
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
                      <a
                        href="/"
                        className="hover:bg-[#68D391]  hover:bg-opacity-20 text-gray-800 group flex w-full items-center rounded-t-md px-2 py-2"
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
                    </Menu.Item>
                    <Menu.Item>
                      <a
                        href="/"
                        className="hover:bg-[#68D391] hover:bg-opacity-20 text-gray-800 group flex w-full items-center px-2 py-2"
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
        </tbody>
      </table>
    </div>
  );
}
export default tableDaftarSimpanan;
