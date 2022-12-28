import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Profile from "./profileSM";
import Image from "next/image";

function SideNavbar() {
  return (
    <>
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 left-4 inline-flex items-center peer justify-center rounded-md p-2 text-[#4A5568] hover:bg-[#C6F6D5] hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="block md:hidden h-6 w-6 fill-[#4A5568] group-hover:fill-[#38A169]"
            aria-hidden="true"
          >
            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
          </svg>
        </Disclosure.Button>
        <div className="p-6 w-3/5 h-screen shadow-lg border-2 md:shadow-none md:border-0 bg-white fixed md:static z-20 top-0 -left-96 lg:left-0 lg:w-60 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            {/* Nav index */}
            <Link href="/">
              <div className="w-3/5 mx-auto cursor-pointer md:mt-4 md:mb-10">
                <img
                  src="/../../../../img/Logo.svg"
                  alt="Logo"
                  width={400}
                  height={400}
                  priority="true"
                  className="mx-auto"
                />
              </div>
            </Link>
            <div className="mt-4">
              {/* Nav dashboard */}
              <Link href="/dashboard">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#C6F6D5] p-2 rounded-md group cursor-pointer hover:shadow-sm m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-[#4A5568] group-hover:stroke-[#38A169]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <span className="text-base text-[#4A5568] group-hover:text-[#38A169] font-medium ">
                    Dashboard
                  </span>
                </div>
              </Link>
            </div>
            {/* Master data */}
            <div>
              <div className="mb-1 pl-5 p-2 ">
                <h1 className="text-[#A0AEC0]">Master Data</h1>
              </div>
              {/* Nav simpanan */}
              <Link href="/dashboard/simpananWajib">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#C6F6D5] p-2 rounded-md group cursor-pointer hover:shadow-sm m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-[#4A5568] group-hover:stroke-[#38A169]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  <span className="text-base text-[#4A5568] group-hover:text-[#38A169] font-medium ">
                    Simpanan <br /> Wajib
                  </span>
                </div>
              </Link>
              {/* Nav Anggota */}
              <Link href="/dashboard/simpananSukarela">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#C6F6D5] p-2 rounded-md group cursor-pointer hover:shadow-sm m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-[#4A5568] group-hover:stroke-[#38A169]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 13.5H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                    />
                  </svg>
                  <span className="text-base text-[#4A5568] group-hover:text-[#38A169] font-medium ">
                    Simpanan <br /> Sukarela
                  </span>
                </div>
              </Link>
            </div>
            {/* Transaksi */}
            <div>
              <div className="mb-1 pl-5 p-2 ">
                <h1 className="text-[#A0AEC0]">Transaksi</h1>
              </div>
              {/* Nav Pinjaman */}
              <Link href="/dashboard/pinjaman">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#C6F6D5] p-2 rounded-md group cursor-pointer hover:shadow-sm m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-[#4A5568] group-hover:stroke-[#38A169]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>

                  <span className="text-base text-[#4A5568] group-hover:text-[#38A169] font-medium ">
                    Pinjaman
                  </span>
                </div>
              </Link>
            </div>
            <div className="md:hidden absolute bottom-0 right-0 left-0">
              <Profile />
            </div>
          </div>
        </div>
      </Disclosure>
    </>
  );
}
export default SideNavbar;
