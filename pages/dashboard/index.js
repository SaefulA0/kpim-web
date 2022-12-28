import { data } from "autoprefixer";
import { getSession } from "next-auth/react";
import Link from "next/link";
import Layout from "../../components/layout";
import Profile from "../../components/profileMD";
import { signOut, useSession } from "next-auth/react";

export default function dashboardpengurus(props) {
const {dataSimpananSukarela} = props;
const {dataSimpananWajib} = props;
const {reminderPinjaman} = props;
const {reminderSimpananWajib} = props;

const hitungsukarela = dataSimpananSukarela.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.nominal_sukarela
}, 0);

const hitungwajib = dataSimpananWajib.reduce((prevVal, currentVal) => {
    return prevVal + currentVal.nominal_bayar
}, 0);

const totalsukarela = hitungsukarela;
const totalwajib = hitungwajib;


const { data: session, status } = useSession();
  if (status === "authenticated") {
    return (
<Layout title="Dashboard Anggota">
          <main className="body-font">
            <div className="flex flex-wrap justify-between px-10 h-screen">
                <div className="">
                    <div className="flex flex-row text-green-400 mt-14 mb-10">
                        <div className="text-md">Halo</div>
                        <p className="text-md font-bold">{session.user.user.nama_anggota},</p>
                        <div>selamat datang!</div>
                    </div>
                        <div className="mt-5 font-bold text-3xl mb-4">Dashboard</div>
                        <div className="flex flex-wrap gap-5 drop-shadow-lg text-white">
                            <div className="w-80 h-40 rounded-xl bg-[#8AC53E] bg-cardBG1">
                                <div className="mx-8 mt-5 text-2xl font-bold">Simpanan Sukarela</div>
                                    <Link href="/dashboard/simpananSukarela">
                                    <div className="flex mx-8 mt-3 text-sm font-medium cursor-pointer">Lihat Selengkapnya<svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="#FFFFFF" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></div>
                                    </Link>
                                        <p className="mx-8 mt-3 text-2xl font-semibold">
                                        Rp{" "}
                                        {totalsukarela
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                        </p>
                            </div>
                            <div className="w-80 h-40 rounded-xl bg-[#FF993A] bg-cardBG2">
                                <div className="mx-8 mt-5 text-2xl font-bold">Simpanan Wajib</div>
                                    <Link href="/dashboard/simpananWajib">
                                    <div className="flex mx-8 mt-3 text-sm font-medium cursor-pointer">Lihat Selengkapnya<svg className="ml-1" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="#FFFFFF" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg></div>
                                    </Link>
                                        <p className="mx-8 mt-3 text-2xl font-semibold">
                                        Rp{" "}
                                        {totalwajib
                                        .toString()
                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                                        </p>
                            </div>
                        </div>
                </div>
                <div className="border-r"></div>
                <div>
                    <div className="hidden md:flex mt-8 justify-end">
                        <Profile/>
                    </div>
                        <div className="mt-5 font-bold text-3xl mb-4">Pengingat</div>
                            <div className="text-gray-500">
                                <div className="w-96 rounded-xl bg-green-300 bg-opacity-50 pb-5">
                                {reminderPinjaman.map((reminderPinjaman) => {
                                        return (
                                        <div>
                                        <div className="pt-2 ml-5 text-xs">Pinjaman yang belum lunas</div>
                                            <div className="w-11/12 h-36 flex flex-row py-5 bg-[#EDF2F7] rounded-xl mx-auto mt-3 font-semibold drop-shadow-lg">
                                                <div className="flex-col">
                                                    <div className="text-gray-600 pt-5 pl-5">Tenggat Waktu</div>
                                                    <div className="text-[#FF3A29] text-2xl pt-3 pl-8"><time dateTime={reminderPinjaman.jatuh_tempo}>{convertTime(reminderPinjaman.jatuh_tempo)}</time></div>
                                                </div>
                                            <div className="flex-col border-l-4 ml-5 text-gray-600 border-gray-600">
                                                <div className="pt-5 pl-5">Nominal Cicilan</div>
                                                    <div className="text-2xl pl-5">Rp{" "}
                                                    {reminderPinjaman.nominal_cicilan
                                                    .toString()
                                                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                                            <div className="flex pl-3">
                                            <Link href="/dashboard/pinjaman/detailPinjaman">
                                                <div className="ml-2 text-md font-medium cursor-pointer">Lihat Selengkapnya</div>
                                            </Link>
                                                <svg className="mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="#4A5568" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                                            </div>
                                            </div>
                                            </div>
                                        </div>
                                        );
                                    })}
                                    {reminderSimpananWajib.map((reminderSimpananWajib) => {
                                        return (
                                    <div>
                                    <div className="pt-2 ml-5 text-xs">Simpanan wajib yang belum lunas</div>
                                        <div className="w-11/12 h-36 flex flex-row py-5 bg-[#EDF2F7] rounded-xl mx-auto mt-3 font-semibold drop-shadow-lg">
                                            <div className="flex-col">
                                                <div className="text-gray-600 pt-5 pl-5">Tenggat Waktu</div>
                                                <div className="text-[#FF3A29] text-2xl pt-3 pl-8"><time dateTime={current}>{convertTime(current)}</time></div>
                                            </div>
                                            <div className="flex-col border-l-4 ml-5 text-gray-600 border-gray-600">
                                                <div className="pt-5 pl-5">Nominal Simpanan</div>
                                                    <div className="text-2xl pl-5">Rp{" "}
                                                        {reminderSimpananWajib.nominal_bayar
                                                        .toString()
                                                        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}</div>
                                                    <div className="flex pl-3">
                                                        <Link href="/dashboard/simpananWajib">
                                                            <div className="ml-2 text-md font-medium cursor-pointer">Lihat Selengkapnya</div>
                                                        </Link>
                                                            <svg className="mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="#4A5568" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                                                    </div>
                                            </div>
                                        </div>
                                    </div>
                                    );
                                })}
                                </div>
                            </div>
                </div>
            </div>
          </main>  
        </Layout>
    );
 }
}

export async function getServerSideProps(req, res){
    const session = await getSession(req, res);
    if (!session){
        return {
            redirect: {
                destination: "/login",
                permanent: false,
            },
        };
    }
    const response1 = await fetch(`http://kpim_backend.test/api/simpanan-sukarela?username=${session.user.user.username}`,{
        headers: {
            Authorization: `Bearer ${session.user.access_token}`,
        },
    });
    const response2 = await fetch(`http://kpim_backend.test/api/simpanan-wajib?username=${session.user.user.username}`,{
        headers: {
            Authorization: `Bearer ${session.user.access_token}`,
        },
    });
    const response3 = await fetch(`http://kpim_backend.test/api/pinjaman?username=${session.user.user.username}&reminder=true`,{
        headers: {
            Authorization: `Bearer ${session.user.access_token}`,
        },
    });
    const response4 = await fetch(`http://kpim_backend.test/api/simpanan-wajib?username=${session.user.user.username}&reminder=true`,{
        headers: {
            Authorization: `Bearer ${session.user.access_token}`,
        },
    });
    const dataSimpananSukarela = await response1.json();
    const dataSimpananWajib = await response2.json();
    const reminderPinjaman = await response3.json();
    const reminderSimpananWajib = await response4.json();
    return {
        props: {
            dataSimpananSukarela: dataSimpananSukarela.simpanan_sukarela,
            dataSimpananWajib: dataSimpananWajib.simpanan_wajib,
            reminderPinjaman: reminderPinjaman.pinjaman,
            reminderSimpananWajib : reminderSimpananWajib.simpanan_wajib,
        },
    };
}

export const convertTime = (time) => {
    return new Date(time).toLocaleDateString("id-uk", {
      month: "short",
      day: "numeric",
    });
  };
 
var now = new Date();
const current = new Date(now.getFullYear(), now.getMonth()+ 1, 1);
