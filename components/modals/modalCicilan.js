import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

export default function ModalCicilan({ data }) {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        onClick={openModal}
        className="flex w-full items-center cursor-pointer text-sm rounded-b-md px-2 py-2 hover:bg-[#68D391] hover:bg-opacity-20"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="w-6 h-6 mr-1 stroke-[#4A5568]"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
          />
        </svg>
        Detail Cicilan
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 align-middle shadow-xl transition-all">
                  <div className="mx-auto cursor-pointer md:my-4">
                    <img
                      src="../../img/modalsIMG/ValLogo.png"
                      alt="Logo"
                      className="mx-auto"
                    />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Konfirmasi Edit Data Anggota
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Apakah anda yakin <br />
                      ingin mengedit data anggota ini?
                    </p>
                  </div>
                  <div className="w-full flex justify-center gap-4 mt-4">
                    <form>
                      <button
                        type="submit"
                        onClick={closeModal}
                        className="w-20 inline-flex justify-center rounded-md border border-transparent bg-[#3182CE] hover:bg-[#1E6CB6] px-4 py-2 text-sm font-medium text-slate-100  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      >
                        Edit
                      </button>
                    </form>
                    <button
                      type="button"
                      className="w-20 inline-flex justify-center rounded-md border border-transparent bg-[#4A5568] px-4 py-2 text-sm font-medium text-slate-100 hover:bg-[#343A45] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Tutup
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
