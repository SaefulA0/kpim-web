import Layout from "../../../components/layout";
import { getSession, useSession } from "next-auth/react";
import Header from "../../../components/header";
import { Router, useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import ModalEditPassSuccess from "../../../components/modals/modalChangePassword/modalEditPassSucces";
import ModalEditPassFailed from "../../../components/modals/modalChangePassword/modalEditPassFailed";
import ModalValEditPass from "../../../components/modals/modalChangePassword/modalValEditPass";
import { signOut } from "next-auth/react";

export default function gantiPassword({ data, token }) {
  const { data: session, status } = useSession();
  const user = `${data.username}`;
  const [modalEditPassSucces, setModalEditPassSuccess] = useState(false);
  const [modalEditPassFailed, setModalEditPassFailed] = useState(false);
  const router = useRouter([]);
  const [userInfo, setUserInfo] = useState({
    username: `${data.username}`,
    old_password: "",
    password: "",
    confirm_password: "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();

    // update password
    await axios({
      method: "PUT",
      url: `http://kpim_backend.test/api/user/${user}`,
      headers: {
        Authorization: `Bearer  ${token}`,
      },
      data: {
        username: userInfo.username,
        old_password: userInfo.old_password,
        password: userInfo.password,
        confirm_password: userInfo.confirm_password,
      },
    }).catch(function (error) {
      if (error.response) {
        setModalEditPassFailed(true);
      }
    });
  };

  useEffect(() => {
    if (status === "unauthenticated") signOut(), Router.replace("/login");
  }, [status]);

  return (
    <Layout title="Edit Password">
      <main className="font-inter">
        {modalEditPassSucces ? <ModalEditPassSuccess /> : null}
        {modalEditPassFailed ? <ModalEditPassFailed /> : null}
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <Header title="Ganti Password" />
          <div className="flex flex-wrap md:flex-nowrap">
            {/* flex kiri */}
            <div className="w-full h-fit rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
              {/* form untuk mengisi data anggota baru */}
              <form onSubmit={handleUpdate}>
                <div className="flex flex-col justify-center">
                  <div
                    className="flex items-center justify-between p-5 mb-4 text-sm text-blue-700 bg-blue-100 rounded-lg"
                    role="alert"
                  >
                    <ul className="list-outside list-disc whitespace-normal px-4 border-r-2 border-blue-200">
                      <li className="font-medium">
                        pastikan password lama kamu sesuai
                      </li>
                      <li className="font-medium">
                        Password baru harus memiliki minimal 8 karakter
                      </li>
                      <li className="font-medium">
                        pastikan konfirmasi passsword sudah sesuai dengan
                        password baru
                      </li>
                    </ul>
                    <svg
                      aria-hidden="true"
                      className="flex-shrink-0 inline w-6 h-6 mx-3 "
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </div>
                  {/* field old password */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Masukan Password Lama
                      </span>
                      <input
                        type="password"
                        name="password"
                        minLength={8}
                        required
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            old_password: target.value,
                          })
                        }
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field new password */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Masukan Password Baru
                      </span>
                      <input
                        type="password"
                        name="password"
                        minLength={8}
                        required
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            password: target.value,
                          })
                        }
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field confirm password */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Konfirmasi Password baru
                      </span>
                      <input
                        type="password"
                        name="password"
                        required
                        onChange={({ target }) =>
                          setUserInfo({
                            ...userInfo,
                            confirm_password: target.value,
                          })
                        }
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
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
                      <ModalValEditPass />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kanan */}
            <div className="w-full h-screen container flex rounded-lg py-8 px-12 justify-center items-center bg-[#F0FFF4]">
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
