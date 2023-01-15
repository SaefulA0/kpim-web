import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { signOut, useSession } from "next-auth/react";
import avatar from "../public/img/defaultUser.png";
import Image from "next/image";
import Link from "next/link";

export default function ProfilNAV() {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <Menu as="div" className="relative w-fit mt-1">
          <Menu.Button>
            <div className="flex cursor-pointer bg-[#68D391] bg-opacity-20 pl-3 pr-4 py-2 items-center rounded-2xl">
              <div>
                {session.user.user.avatar ? (
                  <img
                    src={`/../../../uploads/${session.user.user.avatar}`}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-md"
                  />
                ) : (
                  <Image
                    src={avatar}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-md"
                  />
                )}
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
                  href="/dashboard/profil/editProfile"
                  className="flex text-gray-700 w-full items-center cursor-pointer text-sm rounded-t-md px-2 py-2 hover:bg-[#68D391] hover:bg-opacity-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 mr-1 stroke-gray-700"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                    />
                  </svg>
                  Edit Profil
                </a>
              </Menu.Item>
              <Menu.Item>
                <a
                  href="/dashboard/profil/detailProfile"
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
                  Detail Profil
                </a>
              </Menu.Item>
              <Menu.Item>
                <button
                  onClick={() => signOut()}
                  className="flex text-gray-700 w-full items-center cursor-pointer text-sm rounded-b-md px-2 py-2 hover:bg-[#68D391] hover:bg-opacity-20"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="w-6 h-6 stroke-gray-700 mr-1.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
                    />
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
      <Link href="/login">
        <div className="flex cursor-pointer px-4 py-2 items-center gap-1 mr-2 hover:bg-[#68D391] hover:bg-opacity-20 rounded-md">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Login
        </div>
      </Link>
    </>
  );
}
