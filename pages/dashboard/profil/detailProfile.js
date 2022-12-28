import Layout from "../../../components/layout";
import { getSession, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Header from "../../../components/header";
import { signOut } from "next-auth/react";
import Router from "next/router";
import { useEffect } from "react";

function detailAnggota({ data }) {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") signOut(), Router.replace("/login");
  }, [status]);

  return (
    <Layout title="Detail Profile">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <Header title="Detail Profile" />
          <div className="flex flex-wrap md:flex-nowrap">
            {/* flex kanan */}
            <div className="w-full container rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
              {/* form untuk mengisi data anggota baru */}
              <form>
                <div className="flex flex-col justify-center">
                  <div className="my-3 mx-auto">
                    {data.avatar ? (
                      <img
                        className="object-cover rounded-full"
                        src={`../../../uploads/${data.avatar}`}
                        alt="profile photo"
                        width={100}
                        height={100}
                      />
                    ) : (
                      <img
                        className="object-cover w-16 h-16 rounded-full"
                        src="../../img/defaultUser.png"
                        alt="profile photo"
                        width={100}
                        height={100}
                      />
                    )}
                  </div>
                  {/* Username */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Username
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {data.username}
                      </p>
                    </label>
                  </div>
                  {/* password */}
                  {/* <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Password
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Lorem Ipsum
                      </p>
                    </label>
                  </div> */}
                  {/* NIK */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        NIK
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {data.nik}
                      </p>
                    </label>
                  </div>
                  {/* Nama Anggota */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nama Anggota
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {data.nama_anggota}
                      </p>
                    </label>
                  </div>
                  {/* Tempat & Tanggal Lahir */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tempat & Tanggal Lahir
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {data.ttl}
                      </p>
                    </label>
                  </div>
                  {/* Alamat */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Alamat
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {data.alamat}
                      </p>
                    </label>
                  </div>
                  {/* Pekerjaan */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Pekerjaan
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {data.pekerjaan}
                      </p>
                    </label>
                  </div>
                  {/* Jabatan */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Jabatan
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {data.jabatan}
                      </p>
                    </label>
                  </div>
                  {/* Keanggotaan */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Keanggotaan
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {data.keanggotaan ? "Anggota" : "Bukan Anggota"}
                      </p>
                    </label>
                  </div>
                  {/* Status */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Status
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {data.status ? "Aktif" : "Tidak Aktif"}
                      </p>
                    </label>
                  </div>
                  {/* Tanggal Daftar Anggota */}
                  <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tanggal Daftar Anggota
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        <time dateTime={data.tgl_daftar}>
                          {convertTime(data.tgl_daftar)}
                        </time>
                      </p>
                    </label>
                  </div>
                  {/* Nominal Simpanan Pokok */}
                  {/* <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nominal Simpanan Pokok
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Lorem Ipsum
                      </p>
                    </label>
                  </div> */}
                  {/* Keterangan Simpanan Pokok */}
                  {/* <div className="my-3">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Keterangan Simpanan Pokok
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Lorem Ipsum
                      </p>
                    </label>
                  </div> */}
                  {/* section button */}
                  <div className="flex justify-between mt-12 gap-5">
                    {/* button batal */}
                    <button
                      type="button"
                      onClick={() => router.back()}
                      className="w-full text-center py-2 rounded-lg bg-[#718096] hover:bg-[#4A5568] text-white shadow-md"
                    >
                      Kembali
                    </button>
                    {/* button simpan */}
                    <a
                      href="/dashboard/profil/editProfile"
                      type="button"
                      className="w-full text-center py-2 rounded-lg bg-[#48BB78] hover:bg-[#38A169] text-white shadow-md"
                    >
                      Edit Profile
                    </a>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kiri */}
            <div className="w-full container flex rounded-lg py-8 px-12 justify-center items-center bg-[#F0FFF4]">
              <img
                src="../../img/newLogoKI.png"
                alt="Logo"
                className="aspect-square"
              />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
export default detailAnggota;

export async function getServerSideProps(req, res) {
  const session = await getSession(req, res);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const id = session.user.user.username;
  const response = await fetch(`http://kpim_backend.test/api/user/${id}`, {
    headers: {
      Authorization: `Bearer ${session.user.access_token}`,
    },
  });
  const data = await response.json();
  if (data.message === "This action is unauthorized.") {
    return {
      redirect: {
        destination: "/session",
        permanent: false,
      },
    };
  }

  return {
    props: {
      data: data.user,
    },
  };
}

export const convertTime = (time) => {
  return new Date(time).toLocaleDateString("id-uk", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
