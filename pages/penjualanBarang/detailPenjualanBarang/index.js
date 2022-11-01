import Layout from "../../../components/layout";
import Profile from "../../../components/profile";
import Link from "next/link";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

function detailPenjualanBarang() {
  return (
    <Layout title="Detail Penjualan Barang">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-10 mb-14">
          {/* header */}
          <div className="flex flex-wrap justify-between">
            <div>
              {/* Header */}
              <h1 className="text-2xl font-bold text-[#303030]">
                Detail Penjualan Barang NoTransaksi
              </h1>
              <div className="flex items-center my-8">
                {/* jumlah record */}
                <p>Semua</p>
                <span>()</span>
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
                    <Popover.Panel className="absolute right-5 -top-4 z-10 transform px-4">
                      <div className="w-96 p-4 bg-slate-50 rounded-xl shadow-lg">
                        <p className="text-sm">
                          Masukan nama barang untuk mencari barang
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
          <div className="mt-10 container flex items-center justify-center bg-slate-200 w-full h-96">
            <Link href="/pembelianBarang/detailPembelianBarang">
              <button>tabel</button>
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default detailPenjualanBarang;
