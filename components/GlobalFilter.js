import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

export const GlobalFilter = ({ filter, setFilter }) => {
  return (
    <div className="flex justify-end items-center">
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
                Masukan nama anggota untuk mencari anggota
              </p>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
      {/*  */}
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
          value={filter || ""}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>
    </div>
  );
};
