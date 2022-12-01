import { data } from "autoprefixer";
import { getSession } from "next-auth/react";
import Link from "next/link";
import Layout from "../../components/layout";
import Profile from "../../components/profile";
import { signOut, useSession } from "next-auth/react";

export default function dashboardpengurus(props) {
const {dataSimpananSukarela} = props;
const {dataSimpananWajib} = props;

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
            {/* Left */}
                <div className="flex flex-row justify-between w-full">
                    <div className="flex flex-row text-green-400 mx-8 mt-14">
                        <div className="text-md">Halo</div>
                        <p className="text-md font-bold mx-1">{session.user.user.nama_anggota},</p>
                        <div>selamat datang!</div>
                    </div>
                    {/* Profile */}
                <div className="flex pr-8 mt-8 justify-end">
                    <Profile/>
                </div>
                </div>
                <div className="flex flex-row">
                <div className="mx-8 mt-5 font-bold text-3xl mb-4">Dashboard</div>
                <div className="mx-40 pl-96 mt-5 font-bold text-3xl mb-4">Pengingat</div>
                </div>
                <div className="flex flex-row">
                <div className="basis-auto  mx-8 border-r pr-10 h-screen text-white">   
                <div className="grid grid-cols-2 gap-5 drop-shadow-lg">
                    <div className="w-80 h-40 rounded-xl bg-[#8AC53E] bg-cardBG1">
                        <div className="mx-8 mt-5 text-2xl font-bold">Simpanan Sukarela</div>
                        <Link href="/">
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
                        <Link href="/">
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
                <div className="basis-10">
                <div className="text-gray-500">
                    <div className="w-96 h-96 rounded-xl bg-green-300 bg-opacity-50 ">
                        <div className="pt-2 ml-5 text-xs">Pinjaman yang belum lunas</div>
                        <div className="w-11/12 h-36 flex flex-row py-5 bg-[#EDF2F7] rounded-xl mx-auto mt-3 font-semibold drop-shadow-lg">
                            <div className="flex-col">
                            <div className="text-gray-600 pt-5 pl-5">Tenggat Waktu</div>
                            <div className="text-[#FF3A29] text-2xl pt-3 pl-8">02 SEP</div>
                            </div>
                            <div className="flex-col border-l-4 ml-5 text-gray-600 border-gray-600">
                            <div className="pt-5 pl-5">Nominal Cicilan</div>
                            <div className="text-2xl pl-5">Rp 14.000</div>
                            <div className="flex pl-3">
                                <Link href="/">
                                    <div className="ml-2 text-md font-medium cursor-pointer">Lihat Selengkapnya</div>
                                </Link>
                                    <svg className="mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="#4A5568" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                            </div>
                            </div>
                        </div>
                        <div className="pt-2 ml-5 text-xs">Simpanan wajib yang belum lunas</div>
                        <div className="w-11/12 h-36 flex flex-row py-5 bg-[#EDF2F7] rounded-xl mx-auto mt-3 font-semibold drop-shadow-lg">
                            <div className="flex-col">
                            <div className="text-gray-600 pt-5 pl-5">Tenggat Waktu</div>
                            <div className="text-[#FF3A29] text-2xl pt-3 pl-8">02 SEP</div>
                            </div>
                            <div className="flex-col border-l-4 ml-5 text-gray-600 border-gray-600">
                            <div className="pt-5 pl-5">Nominal Simpanan</div>
                            <div className="text-2xl pl-5">Rp 14.000</div>
                            <div className="flex pl-3">
                                <Link href="/">
                                    <div className="ml-2 text-md font-medium cursor-pointer">Lihat Selengkapnya</div>
                                </Link>
                                    <svg className="mt-1 ml-1" xmlns="http://www.w3.org/2000/svg" width="14" height="20" fill="#4A5568" viewBox="0 0 24 24"><path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z"/></svg>
                            </div>
                            </div>
                        </div>
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
    const response1 = await fetch(`http://kpim_backend.test/api/simpanan-sukarela?username=${session.user.user.username}`);
    const response2 = await fetch(`http://kpim_backend.test/api/simpanan-wajib?username=${session.user.user.username}`);
    const dataSimpananSukarela = await response1.json();
    const dataSimpananWajib = await response2.json();
    return {
        props: {
            dataSimpananSukarela: dataSimpananSukarela.simpanan_sukarela,
            dataSimpananWajib: dataSimpananWajib.simpanan_wajib,
        },
    };
}

