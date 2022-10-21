import Link from "next/link";
import Layout from "../../components/layout";

function user({ user }) {
  return (
    <Layout title="Anggota">
      <main className="font-inter">
        <div className="w-auto h-auto mx-8 my-12">
          <h1 className="text-2xl font-bold text-[#303030] mb-16">
            Detail Anggota
          </h1>
          <div className="flex flex-wrap md:flex-nowrap">
            {/* flex kanan */}
            <div className="w-full container rounded-lg py-8 px-12 md:mr-16 bg-[#F7FAFC]">
              {/* form untuk mengisi data anggota baru */}
              <form>
                <div className="flex flex-col justify-center">
                  <button className=""></button>
                  {/* Username */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Username
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {user.username}
                      </p>
                    </label>
                  </div>
                  {/* password */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Password
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Hello
                      </p>
                    </label>
                  </div>
                  {/* NIK */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        NIK
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        212123213123
                      </p>
                    </label>
                  </div>
                  {/* Nama Anggota */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nama Anggota
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        {user.name}
                      </p>
                    </label>
                  </div>
                  {/* Tempat & Tanggal Lahir */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tempat & Tanggal Lahir
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Bandung, 12 April 2000
                      </p>
                    </label>
                  </div>
                  {/* Alamat */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Alamat
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Jln.Riau
                      </p>
                    </label>
                  </div>
                  {/* Pekerjaan */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Pekerjaan
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Karyawan Swasta
                      </p>
                    </label>
                  </div>
                  {/* Jabatan */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Jabatan
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Operator
                      </p>
                    </label>
                  </div>
                  {/* Keanggotaan */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Keanggotaan
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Anggota
                      </p>
                    </label>
                  </div>
                  {/* Pekerjaan */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Pekerjaan
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Karyawan Swasta
                      </p>
                    </label>
                  </div>
                  {/* Status */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Status
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Aktif
                      </p>
                    </label>
                  </div>
                  {/* Pekerjaan */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Pekerjaan
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Karyawan Swasta
                      </p>
                    </label>
                  </div>
                  {/* Tanggal Daftar Anggota */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Tanggal Daftar Anggota
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        10/11/2022
                      </p>
                    </label>
                  </div>
                  {/* Nominal Simpanan Pokok */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Nominal Simpanan Pokok
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Rp 1.000.000
                      </p>
                    </label>
                  </div>
                  {/* Keterangan Simpanan Pokok */}
                  <div className="my-2">
                    <label className="block border-b-2">
                      <span className="block text-sm font-semibold text-[#667080]">
                        Keterangan Simpanan Pokok
                      </span>
                      <p className="text-[#667080] text-sm my-2 border-[#667080]">
                        Lorem Ipsum
                      </p>
                    </label>
                  </div>
                  {/* section button */}
                  <div className="flex justify-between my-8">
                    {/* button batal */}
                    <button className="px-7 mr-2 md:px-16 lg:px-20 py-2 rounded-lg bg-[#F56565] hover:bg-[#ca4040] text-white shadow-md">
                      Hapus
                    </button>
                    {/* button simpan */}
                    <Link href="/anggota">
                      <button
                        type="submit"
                        className="px-5 ml-2 md:px-16 lg:px-20 py-2 rounded-lg bg-[#3182CE] hover:bg-[#0968C0] text-white shadow-md"
                      >
                        Simpan
                      </button>
                    </Link>
                  </div>
                </div>
              </form>
            </div>
            {/* flex kiri */}
            <div className="w-full container flex rounded-lg py-8 px-12 justify-center items-center bg-[#F0FFF4]">
              <img
                src="../img/newLogoKI.png"
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

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: {
        id: `${user.id}`,
      },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const data = await res.json();

  return {
    props: {
      user: data,
    },
  };
}

export default user;
