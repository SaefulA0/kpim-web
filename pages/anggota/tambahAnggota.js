import Link from "next/link";
import Layout from "../../components/layout";

function tambahAnggota() {
  return (
    <Layout title="Anggota">
      <main>
        <div className="w-auto h-auto mx-8 my-12">
          <h1 className="text-2xl font-bold text-[#303030] mb-16">
            Tambah Anggota
          </h1>
          <div className="flex flex-wrap md:flex-nowrap">
            {/* flex kanan */}
            <div className="w-full container rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
              {/* form untuk mengisi data anggota baru */}
              <form>
                <div className="flex flex-col justify-center">
                  <button className=""></button>
                  {/* field NIK */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        NIK
                      </span>
                      <input
                        type="number"
                        name="NIK"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field password */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Password
                      </span>
                      <input
                        type="password"
                        name="password"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field Nama */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nama
                      </span>
                      <input
                        type="text"
                        name="Nama"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field Tempat */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tempat
                      </span>
                      <input
                        type="text"
                        name="Tempat"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field Tanggal Lahir */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tanggal Lahir
                      </span>
                      <input
                        type="date"
                        name="Tanggal Lahir"
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
                        name="Alamat"
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
                        name="Pekerjaan"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  {/* field Jabatan */}
                  <div className="my-2">
                    <label className="block">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Jabatan
                      </span>
                      <input
                        type="text"
                        name="Jabatan"
                        className="mt-1 px-3 py-2 border shadow-sm border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                      />
                    </label>
                  </div>
                  <div className="flex justify-around my-8">
                    {/* button batal */}
                    <Link href="/anggota">
                      <button className="px-7 md:px-20 py-2 rounded-lg bg-[#F56565] hover:bg-[#ca4040] text-white shadow-md">
                        Batal
                      </button>
                    </Link>
                    {/* button simpan */}
                    <button
                      type="submit"
                      className="px-5 md:px-20 py-2 rounded-lg bg-[#48BB78] hover:bg-[#3da066] text-white shadow-md"
                    >
                      Simpan
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kiri */}
            <div className="w-full container rounded-lg py-8 px-12 bg-[#F0FFF4]">
              <div className="bg-[#FFE5D3] flex p-6 rounded-lg items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  className="w-12 h-12 mr-2"
                >
                  <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
                </svg>
                <p className="text-sm md:text-base">
                  Untuk nomor anggota akan otomatis tersedia ketika anggota baru
                  berhasil dibuat
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default tambahAnggota;
