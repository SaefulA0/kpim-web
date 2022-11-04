import Profile from "./profile";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function HeaderPinjaman() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <div className="flex flex-wrap justify-between">
          <div>
            {/* Header */}
            <h1 className="text-2xl font-bold text-[#303030]">
              Daftar Pinjaman{" "}
              <span className="font-bold underline text-[#303030]">
                {session.user.user.nama_anggota}
              </span>
            </h1>
            <Link href="/">
              <button className="px-4 py-1 my-8 text-white shadow-md rounded-full bg-[#38A169]">
                Bayar Simpanan Wajib
              </button>
            </Link>
          </div>
          <div>
            {/* Profil component */}
            <div className="flex justify-end items-center">
              <Profile />
            </div>
          </div>
        </div>
      </>
    );
  }
}
