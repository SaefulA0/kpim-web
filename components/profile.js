import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

function profile() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <Menu as="div" className="relative w-fit mt-1">
          <Menu.Button>
            <div className="flex cursor-pointer bg-[#68D391] bg-opacity-20 pl-3 pr-4 py-2 items-center rounded-2xl">
              <div>
                <img
                  src="../img/defaultUser.png"
                  alt="Logo"
                  width={42}
                  height={42}
                />
              </div>
              <div className="grow mx-2">
                <h5 className="font-medium text-left text-base mb-1">
                  {session.user.user.nama_anggota}
                </h5>
                <p className="text-[#68D391] text-left text-sm">
                  {session.user.user.jabatan}
                </p>
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  className="w-5 h-5"
                >
                  <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
                </svg>
              </div>
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
            <Menu.Items className="absolute z-10 w-36 mt-1 right-0 divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <Menu.Item>
                <a
                  href="/"
                  className="flex w-full items-center cursor-pointer text-sm rounded-t-md px-2 py-2 hover:bg-[#68D391] hover:bg-opacity-20"
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
                  Edit Profil
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="/"
                  className="flex w-full items-center cursor-pointer text-sm rounded-b-md px-2 py-2 hover:bg-[#68D391] hover:bg-opacity-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="18"
                    height="18"
                    className="fill-gray-800 mr-1.5"
                  >
                    <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
                  </svg>
                  Detail Profil
                </a>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => signOut()}
                  className="flex w-full items-center cursor-pointer text-sm rounded-b-md px-2 py-2 hover:bg-[#68D391] hover:bg-opacity-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    width="18"
                    height="18"
                    className="fill-gray-800 mr-1.5"
                  >
                    <path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" />
                  </svg>
                  Sign out
                </button>
              </Menu.Item>
            </Menu.Items>
          </Transition>
        </Menu>
      </>
    );
  }

  return (
    <>
      <Link href="/login">login duls bos</Link>
    </>
  );
}
export default profile;
