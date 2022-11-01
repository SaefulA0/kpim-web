import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

function cardBarang() {
  return (
    <>
      <div className="bg-white relative container p-5 w-full shadow-lg rounded-lg">
        <p className="text-gray-800 text-base font-bold">Beras</p>
        <div className="flex px-3 py-2 text-sm">
          <div className="w-48">
            <p className="border-b py-3 font-medium">Jenis Barang</p>
            <p className="border-b py-3 font-medium">Satuan</p>
            <p className="border-b py-3 font-medium">Berat</p>
            <p className="border-b py-3 font-medium">Jumlah</p>
            <p className="border-b py-3 font-medium">Harga Jual</p>
            <p className="border-b py-3 font-medium">Subtotal</p>
          </div>
          <div className="w-full">
            <p className="border-b py-3">Lorem Ipsum</p>
            <p className="border-b py-3">Lorem Ipsum</p>
            <p className="border-b py-3">Lorem Ipsum</p>
            <p className="border-b py-3">Lorem Ipsum</p>
            <p className="border-b py-3">Lorem Ipsum</p>
            <p className="border-b py-3">Lorem Ipsum</p>
          </div>
        </div>
        <div className="mx-auto absolute top-3 right-3">
          <Menu as="div" className="relative inline-block">
            <Menu.Button className="inline-flex w-full justify-center rounded-md px-2 py-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 512"
                className="h-5 w-5 fill-slate-700"
              >
                <path d="M64 360c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zm0-160c30.9 0 56 25.1 56 56s-25.1 56-56 56s-56-25.1-56-56s25.1-56 56-56zM120 96c0 30.9-25.1 56-56 56S8 126.9 8 96S33.1 40 64 40s56 25.1 56 56z" />
              </svg>
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
              <Menu.Items className="absolute right-0 mt-1 w-44 z-10 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <Menu.Item>
                  {({ active }) => (
                    <a
                      href="/"
                      className={`${
                        active
                          ? "bg-[#68D391] bg-opacity-20 text-gray-800"
                          : "text-gray-900"
                      } group flex items-center px-3 py-3 text-sm`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        width="18"
                        height="18"
                        className="fill-gray-800 mr-2"
                      >
                        <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.8 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
                      </svg>
                      Edit Barang
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
                      } group flex w-full items-center rounded-b-md px-3 py-3 text-sm`}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                        width="18"
                        height="18"
                        className="fill-gray-800 mr-2"
                      >
                        <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                      </svg>
                      Hapus Barang
                    </a>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
}
export default cardBarang;
