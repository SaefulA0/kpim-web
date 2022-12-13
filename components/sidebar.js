import { Disclosure } from "@headlessui/react";
import Link from "next/link";
import Profile from "./profileSM";

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
              <div className="w-3/5 mx-auto cursor-pointer md:my-4">
                <img
                  src="../../../img/Logo.svg"
                  alt="Logo"
                  className="mx-auto"
                />
              </div>
            </Link>
            <div className="mt-4">
              {/* Nav dashboard */}
              <Link href="/dbdPengguna/">
                <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-[#C6F6D5] p-2 rounded-md group cursor-pointer hover:shadow-sm m-auto">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                    className="w-5 h-5 fill-[#4A5568] group-hover:fill-[#38A169]"
                  >
                    <path d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z" />
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
                    viewBox="0 0 576 512"
                    className="w-5 h-5 fill-[#4A5568] group-hover:fill-[#38A169]"
                  >
                    <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
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
                    viewBox="0 0 576 512"
                    className="w-5 h-5 fill-[#4A5568] group-hover:fill-[#38A169]"
                  >
                    <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
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
                    viewBox="0 0 576 512"
                    className="w-5 h-5 fill-[#4A5568] group-hover:fill-[#38A169]"
                  >
                    <path d="M88.7 223.8L0 375.8V96C0 60.7 28.7 32 64 32H181.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H416c35.3 0 64 28.7 64 64v32H144c-22.8 0-43.8 12.1-55.3 31.8zm27.6 16.1C122.1 230 132.6 224 144 224H544c11.5 0 22 6.1 27.7 16.1s5.7 22.2-.1 32.1l-112 192C453.9 474 443.4 480 432 480H32c-11.5 0-22-6.1-27.7-16.1s-5.7-22.2 .1-32.1l112-192z" />
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
