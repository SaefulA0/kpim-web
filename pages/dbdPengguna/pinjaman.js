import Layout from "../../components/layout";
import HeaderPinjaman from "../../components/headerPinjaman.js";
import { getSession } from "next-auth/react";

export default function pinjaman({ data }) {
  return (
    <Layout title="Daftar Pinjaman">
      <main className="font-inter">
        <div className="w-auto min-h-screen mx-8 mt-12 pt-2 mb-14">
          {/* header */}
          <HeaderPinjaman />
          {/* tabel */}
          <div className="mt-10 container">
            <table className="w-full table-auto mb-8 text-sm text-left text-gray-500">
              <thead className="text-xs text-gray-700 uppercase">
                <tr>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    Id
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    Tanggal Peminjaman
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    Tgl Terakhir <br /> Bayar
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    Jatuh Tenpo
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    Sisa Cicilan
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2">
                    Durasi Cicilan
                  </th>
                  <th scope="col" className="py-3 px-6 border-b-2 text-center">
                    Status
                  </th>
                  <th className="py-3 px-6 border-b-2 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((datas) => {
                  return (
                    <tr key={datas.id} className="bg-white border-b">
                      <th
                        scope="row"
                        className="py-4 text-center font-medium text-gray-900 whitespace-nowrap"
                      >
                        {datas.id}
                      </th>
                      <td className="py-4 px-6">{datas.tgl_pinjaman}</td>
                      <td className="py-4 px-6">
                        {datas.updated_at.toLocaleString("en-AU")}
                      </td>
                      <td className="py-4 px-6">{datas.jatuh_tempo}</td>
                      <td className="py-4 px-6">{datas.sisa_cicilan}</td>
                      <td className="py-4 px-6">{datas.durasi_cicilan}</td>
                      <td className="py-4 px-3 text-center">
                        {datas.status ? (
                          <p className="bg-[#4299E1] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                            Lunas
                          </p>
                        ) : (
                          <p className="bg-[#718096] truncate text-white mx-auto px-4 py-1 rounded-full w-fit">
                            Belum Lunas
                          </p>
                        )}
                      </td>

                      <td className="py-4 px-6 flex text-center">
                        <button className="mx-auto mr-1.5 mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white text-sm shadow-md">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-6 h-6 mr-1"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z"
                            />
                          </svg>
                          Bayar
                        </button>
                        <a
                          href={`/anggota/detail/${datas.id}`}
                          className="mx-auto mb-1 px-3 py-1.5 flex items-center rounded-lg bg-[#3182CE] hover:bg-[#0060BB] text-white text-sm shadow-md"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5 mr-1"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
                            />
                          </svg>
                          Detail
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
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
  const response = await fetch(
    `http://kpim_backend.test/api/pinjaman?username=${session.user.user.username}`
  );
  const data = await response.json();

  return {
    props: {
      data: data.pinjaman,
    },
  };
}
