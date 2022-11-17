import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Profile() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <div className="bg-[#68D391] bg-opacity-20 mr-4 rounded-2xl px-2 py-4">
          <div className="flex items-center">
            <div>
              <img
                src="../../img/defaultUser.png"
                alt="Logo"
                width={42}
                height={42}
              />
            </div>
            <div className="mx-2">
              <h5 className="font-medium text-left text-sm mb-1">
                {session.user.user.nama_anggota}
              </h5>
              <p className="text-[#68D391] text-left text-sm">
                {session.user.user.jabatan}
              </p>
            </div>
            <button
              onClick={() => signOut()}
              className="flex w-fit items-center cursor-pointer text-sm rounded-b-md px-2 py-2 hover:bg-[#68D391] hover:bg-opacity-20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="18"
                height="18"
                className="fill-gray-800"
              >
                <path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" />
              </svg>
            </button>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <Link href="/login">login duls bos</Link>
    </>
  );
}
