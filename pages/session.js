import { signOut, useSession } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";
import Head from "next/head";

export default function Session() {
  const { data: session, status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login");
  }, [status]);

  return (
    <main className="body-font bg-slate-100">
      <Head>
        <title>KPIM</title>
        <link rel="icon" type="image/x-icon" href="img/Logo.svg" />
      </Head>
      <div className="w-screen h-screen flex flex-col justify-center items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          />
        </svg>

        <div className="text-center mt-3 mb-6">
          <h1 className="font-semibold text-xl">Session kamu sudah habis</h1>
          <p className="text-lg">Silakan Login kembali</p>
        </div>
        <button
          onClick={() => signOut()}
          className="w-fit flex px-4 items-center justify-between h-fit bg-white hover:bg-[#EFF6FF] border border-gray-200 rounded-md shadow-md"
        >
          <div className="flex items-center">
            <h5 className="text-sm py-2 px-3 font-semibold tracking-tight text-gray-800">
              Login
            </h5>
          </div>
        </button>
      </div>
    </main>
  );
}
