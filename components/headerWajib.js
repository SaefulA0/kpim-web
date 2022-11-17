import { useSession } from "next-auth/react";
import Profile from "./profile";

export default function Header() {
  const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
      <>
        <div className="flex flex-wrap justify-between pb-6">
          <div>
            {/* Header */}
            <h1 className="text-2xl mb-6 font-bold text-[#303030]">
              Daftar Simpanan Wajib{" "}
              <span className="font-bold underline text-[#303030]">
                {session.user.user.nama_anggota}
              </span>
            </h1>
            <span>Semua ()</span>
          </div>
          <div>
            {/* Profil component */}
            <div className="hidden md:flex justify-end items-center">
              <Profile />
            </div>
          </div>
        </div>
      </>
    );
  }
}
