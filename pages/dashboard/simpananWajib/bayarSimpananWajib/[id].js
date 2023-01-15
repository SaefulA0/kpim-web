import Layout from "../../../../components/layout";
import Header from "../../../../components/header";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Router from "next/router";
import { signOut } from "next-auth/react";
import { getSession } from "next-auth/react";
import axios from "axios";

export default function bayarSimpananWajib({ data, token }) {
  const router = useRouter();
  const { status } = useSession();
  const idSimpanan = data.id;
  const client_key = "SB-Mid-client-U_jtoAZ2jvLmO6O5";

  useEffect(() => {
    if (status === "unauthenticated") signOut(), Router.replace("/login");
  }, [status]);

  useEffect(() => {
    const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
    const myMidtransClientKey = `${client_key}`;

    const scriptTag = document.createElement("script");
    scriptTag.src = midtransScriptUrl;
    scriptTag.setAttribute("data-client-key", myMidtransClientKey);
    scriptTag.async = true;

    document.body.appendChild(scriptTag);
    return () => {
      document.body.removeChild(scriptTag);
    };
  }, []);

  const onPressPay = async (e) => {
    e.preventDefault();
    const data = await fetch(
      `http://kpim_backend.test/api/snap?type=wajib&id=${idSimpanan}`,
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    );
    const res = await data.json();
    const snapToken = res.snapToken;
    window.snap.pay(snapToken, {
      onSuccess: async () => {
        const res = await axios({
          method: "POST",
          url: `http://kpim_backend.test/api/payment/wajib?id=${idSimpanan}`,
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log("Transaksi Berhasil");
      },
      onPending: (result) => {
        console.log("pending transaction", result);
      },
      onError: (result) => {
        console.log("error transaction", result);
      },
      onClose: () => {
        console.log(
          "customer close the popup window without the finishing the payment"
        );
      },
    });
  };

  return (
    <Layout title="Bayar Simpanan Wajib">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <Header title="Bayar Simpanan Wajib" />
          {/* main */}
          <div className="flex flex-wrap justify-between md:flex-nowrap">
            {/* flex kiri */}
            <div className="md:w-full h-fit container rounded-lg mb-8 md:mb-0 py-8 px-12 bg-[#F7FAFC]">
              {/* form untuk mengisi data anggota baru */}
              <form>
                <div className="flex flex-col justify-center">
                  {/* field nama anggota */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tanggal Bayar
                      </span>
                      <input
                        type="text"
                        name="tgl_bayar"
                        disabled
                        defaultValue={convertTime(data.tgl_bayar)}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field nama anggota */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Status
                      </span>
                      <input
                        type="text"
                        name="nama_anggota"
                        disabled
                        defaultValue={data.status ? "Lunas" : "Belum Lunas"}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field nominal pembayaran */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nominal Bayar
                      </span>
                      <input
                        type="text"
                        name="nominal_bayar"
                        disabled
                        defaultValue={data.nominal_bayar
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                        className="mt-1 px-3 py-2 text-gray-500 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* section button */}
                  <div className="flex justify-between mt-12">
                    {/* button batal */}
                    <button
                      type="button"
                      onClick={() => router.back()}
                      className="w-full px-7 mr-4 md:px-16 lg:px-20 py-2 rounded-lg bg-[#718096] hover:bg-[#4A5568] text-white shadow-md"
                    >
                      Kembali
                    </button>
                    {/* button simpan */}
                    <button
                      onClick={onPressPay}
                      className="w-full px-7 md:px-16 lg:px-20 py-2 rounded-lg bg-[#48BB78] hover:bg-[#38A169] text-white shadow-md"
                    >
                      Bayar
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kanan */}
            <div className="md:ml-16 h-screen md:w-full bg-cardBG3 bg-no-repeat bg-center container rounded-lg py-8 px-5 md:px-12 bg-[#F0FFF4]"></div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
  const token = session.user.access_token;

  // mendapatkan id dari endpoint halaman
  const { id } = context.params;

  // mengambil data api simpanan wajib
  const response1 = await fetch(
    `http://kpim_backend.test/api/simpanan-wajib/${id}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const dataPJN = await response1.json();
  const pinjamanData = JSON.parse(JSON.stringify(dataPJN));
  // console.log(pinjamanData);

  return {
    props: {
      token: token,
      data: pinjamanData.simpanan_wajib,
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
