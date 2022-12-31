import Layout from "../../../components/layout";
import { getSession, useSession } from "next-auth/react";
import Header from "../../../components/header";
import { Router, useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalEditSuccess from "../../../components/modals/modalEditSucces";
import ModalEditFailed from "../../../components/modals/modalFailedEdit";
import ModalValEdit from "../../../components/modals/modalValEdit";
import { signOut } from "next-auth/react";
import BtnGantiPass from "../../../components/buttons/btnGantiPass";

export default function editProfile({ data, token }) {
  const { data: session, status } = useSession();
  const router = useRouter([]);
  const user = `${data.username}`;
  const [modalEditSucces, setModalEditSucces] = useState(false);
  const [modalEditFailed, setModalEditFailed] = useState(false);
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [name, setName] = useState(`${data.avatar}`);
  const [userInfo, setUserInfo] = useState({
    nama_anggota: `${data.nama_anggota}`,
    password: `${data.password}`,
    ttl: `${data.ttl}`,
    alamat: `${data.alamat}`,
    pekerjaan: `${data.pekerjaan}`,
  });

  useEffect(() => {
    if (status === "unauthenticated") signOut(), Router.replace("/login");
  }, [status]);

  // show avatar in client
  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];
      setName(event.target.files[0].name);
      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    // update avatar in local
    const body = new FormData();
    body.append("file", image);
    const response = await fetch("/api/upload", {
      method: "POST",
      body,
    }).then(
      await axios({
        method: "PUT",
        url: `http://kpim_backend.test/api/user/${user}`,
        headers: {
          Authorization: `Bearer  ${token}`,
        },
        data: {
          avatar: name,
          username: user,
          nama_anggota: userInfo.nama_anggota,
          alamat: userInfo.alamat,
          ttl: userInfo.ttl,
          pekerjaan: userInfo.pekerjaan,
        },
      }).then(({ error }) => {
        if (error) {
          setModalEditFailed(true);
        } else {
          setModalEditSucces(true);
        }
      })
    );
  };

  return (
    <Layout title="Edit Profile">
      <main className="font-inter">
        {modalEditSucces ? <ModalEditSuccess /> : null}
        {modalEditFailed ? <ModalEditFailed /> : null}
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <Header title="Edit Profile" />
          <div className="flex flex-wrap md:flex-nowrap">
            {/* flex kiri */}
            <div className="w-full rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
              {/* form untuk mengisi data anggota baru */}
              <form onSubmit={handleUpdate}>
                <div className="flex flex-col justify-center">
                  {/* field Avatar */}
                  <div className="my-2">
                    <span className="block text-sm mb-2 font-semibold text-[#667080]">
                      Foto Profil
                    </span>
                    <label className="flex cursor-pointer items-center space-x-6">
                      <div className="shrink-0">
                        {createObjectURL ? (
                          <img
                            className="object-cover w-16 h-16 rounded-full"
                            src={createObjectURL}
                            alt="profile photo 2"
                          />
                        ) : (
                          <img
                            className="object-cover w-16 h-16 rounded-full"
                            src={`../../../uploads/${data.avatar}`}
                            alt="profile photo 1"
                          />
                        )}
                      </div>
                      <label className="block">
                        <input
                          type="file"
                          name="avatar"
                          defaultValue={data.avatar}
                          onChange={uploadToClient}
                          className="block w-fit text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                        />
                      </label>
                    </label>
                  </div>
                  <div className="my-2">
                    <BtnGantiPass />
                  </div>
                  {/* field Nama */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nama
                      </span>
                      <input
                        type="text"
                        name="nama_anggota"
                        required
                        placeholder={data.nama_anggota}
                        defaultValue={data.nama_anggota}
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            nama_anggota: target.value,
                          })
                        }
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field Tempat  & Tanggal Lahir*/}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tempat & Tanggal Lahir
                      </span>
                      <input
                        type="text"
                        name="ttl"
                        required
                        placeholder={data.ttl}
                        defaultValue={data.ttl}
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            ttl: target.value,
                          })
                        }
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field Alamat */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Alamat
                      </span>
                      <input
                        type="text"
                        name="alamat"
                        required
                        placeholder={data.alamat}
                        defaultValue={data.alamat}
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            alamat: target.value,
                          })
                        }
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field Pekerjaan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Pekerjaan
                      </span>
                      <input
                        type="text"
                        name="pekerjaan"
                        required
                        placeholder={data.pekerjaan}
                        defaultValue={data.pekerjaan}
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            pekerjaan: target.value,
                          })
                        }
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* Alert */}
                  <div
                    className="flex items-center p-3 mt-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                    role="alert"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={2}
                      stroke="currentColor"
                      className="w-8 h-8 mr-1"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
                      />
                    </svg>
                    Data dibawah ini tidak dapat diubah oleh anggota,
                    <br /> silakan hubungi staff Koperasi
                  </div>
                  {/* field Username */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Username
                      </span>
                      <input
                        type="text"
                        name="username"
                        disabled
                        placeholder={data.username}
                        defaultValue={data.username}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field NIK */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        NIK
                      </span>
                      <input
                        type="number"
                        name="nik"
                        disabled
                        placeholder={data.nik}
                        defaultValue={data.nik}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field jabatan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Jabatan
                      </span>
                      <input
                        type="text"
                        name="jabatan"
                        disabled
                        placeholder={data.jabatan}
                        defaultValue={data.jabatan}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* select keanggotaan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Keanggotaan
                      </span>
                      <input
                        type="text"
                        name="keanggotaan"
                        disabled
                        placeholder={data.keanggotaan}
                        defaultValue={
                          data.keanggotaan ? "Anggota" : "Bukan Anggota"
                        }
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* select status */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Status
                      </span>
                      <input
                        type="text"
                        name="status"
                        disabled
                        placeholder={data.status}
                        defaultValue={data.status ? "Aktif" : "Nonaktif"}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
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
                    <div className="w-full">
                      <ModalValEdit />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kanan */}
            <div className="w-full container bg-cardBG3 bg-no-repeat bg-center flex rounded-lg py-8 px-12 justify-center bg-[#F0FFF4]">
              {/* <CardChangePWD /> */}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

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
  const username = session.user.user.username;
  const response = await fetch(
    `http://kpim_backend.test/api/user/${username}`,
    {
      headers: {
        Authorization: `Bearer ${session.user.access_token}`,
      },
    }
  );
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
      token: session.user.access_token,
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
