import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function ProfileSM() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <div className="flex justify-between bg-[#68D391] bg-opacity-20">
          <Link href="/dashboard/profil/detailProfile">
            <div className="flex cursor-pointer items-center px-2 py-4">
              <div>
                {session.user.user.avatar ? (
                  <img
                    src={`../../../uploads/${session.user.user.avatar}`}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-md"
                  />
                ) : (
                  <img
                    src={`../../../img/defaultUser.png`}
                    alt="Avatar"
                    width={42}
                    height={42}
                    className="rounded-md"
                  />
                )}
              </div>
              <div className="mx-2">
                <h5 className="font-medium truncate text-left text-sm mb-1">
                  {session.user.user.nama_anggota}
                </h5>
                <p className="text-[#68D391] text-left text-sm">
                  {session.user.user.jabatan}
                </p>
              </div>
            </div>
          </Link>
          <button
            onClick={() => signOut()}
            className="flex w-fit items-center cursor-pointer text-sm rounded-b-md px-4 py-2 hover:bg-[#68D391] hover:bg-opacity-20"
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
          </button>
        </div>
      </>
    );
  }

  return null;
}
