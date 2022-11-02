import Head from "next/head";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

export default function landingPage() {
  return (
    <main className="relative font-inter">
      <Head>
        <title>Koperasi Pekerja Indonesia Maju</title>
        <link rel="icon" type="image/x-icon" href="img/Logo.svg" />
      </Head>
      <div className="absolute left-0 w-full">
        <Navbar />
      </div>
      {/* hero section */}
      <section className="bg-heroBG bg-no-repeat bg-center bg-cover">
        <div className="container mx-auto px-5 py-24 flex md:flex-row flex-col w-full h-screen justify-around items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 mt-36 md:mt-0 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="w-3/4 sm:text-4xl text-3xl mb-4 font-bold text-gray-900 md:text-slate-100">
              Selamat Datang di Koperasi Pekerja Indonesia Maju
            </h1>
            <p className="mb-8 leading-relaxed text-sm text-gray-800 md:text-slate-200">
              Lorem Bapaknya Ipsum
            </p>
            <button className="text-white bg-[#48BB78] shadow-lg border-0 py-2 px-6 focus:outline-none hover:bg-[#276749] rounded text-base">
              Dashboard Koperasi
            </button>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-2/3">
            <img src="img/Logo.svg" alt="Logo" className="mx-auto w-96" />
          </div>
        </div>
      </section>
      {/* penutup hero section*/}
      {/* section 2 */}
      <section className="text-gray-600 bg-[#EDF2F7]">
        <div className="container px-2 py-8 mx-auto">
          <div className="flex flex-wrap justify-center md:justify-evenly">
            <div className="py-4 md:py-6 px-6 m-1 w-80 md:w-96 flex items-center shadow-sm rounded-lg bg-white">
              <img
                src="img/LandingPage/people.svg"
                alt="Logo"
                className="w-14"
              />
              <div className="text-start ml-1 md:ml-2 px-2">
                <h2 className="title-font font-bold text-sm md:text-base text-gray-900">
                  Anggota Aktif
                </h2>
                <p className="leading-relaxed text-xs md:text-sm">
                  512 Anggota
                </p>
              </div>
            </div>
            <div className="py-4 md:py-6 px-6 m-1 w-80 md:w-96 flex items-center shadow-sm rounded-lg bg-white">
              <img
                src="img/LandingPage/agreement.svg"
                alt="Logo"
                className="w-14"
              />
              <div className="text-start ml-1 md:ml-2 px-2">
                <h2 className="title-font font-bold text-sm md:text-base text-gray-900">
                  Bantuan yang tersalurkan
                </h2>
                <p className="leading-relaxed text-xs md:text-sm">128 Kali</p>
              </div>
            </div>
            <div className="py-4 md:py-6 px-6 m-1 w-80 md:w-96 flex items-center shadow-sm rounded-lg bg-white">
              <img
                src="img/LandingPage/money.svg"
                alt="Logo"
                className="w-14"
              />
              <div className="text-start ml-1 md:ml-2 px-2">
                <h2 className="title-font font-bold text-sm md:text-base text-gray-900">
                  Dana Yang Tersalurkan
                </h2>
                <p className="leading-relaxed text-xs md:text-sm">
                  Rp 2.000.000
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* penutup section 2 */}
      {/* tentang section */}
      <section className="text-gray-600 bg-white">
        <div className="container px-10 py-16 mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="md:w-1/2 mr-0 mb-8 md:mr-32">
              <h2 className="pl-3 sm:text-4xl text-3xl mb-6 font-semibold text-gray-800 border-l-4 border-[#024547]">
                Tentang
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                Sejarah singkat gerakan koperasi bermula pada abad ke-20 yang
                pada umumnya merupakan hasil dari usaha yang tidak spontan dan
                tidak dilakukan oleh orang-orang yang sangat kaya. Koperasi
                tumbuh dari kalangan rakyat, ketika penderitaan dalam lapangan
                ekonomi dan sosial yang ditimbulkan oleh sistem kapitalisme
                semakin memuncak. Beberapa orang yang penghidupannya sederhana
                dengan kemampuan ekonomi terbatas, terdorong oleh penderitaan
                dan beban ekonomi yang sama, secara spontan mempersatukan diri
                untuk menolong dirinya sendiri dan manusia sesamanya.
              </p>
            </div>
            <div className="w-fit">
              <img
                src="img/LandingPage/samplePhoto1.png"
                alt="Logo"
                width={412}
                height={412}
              />
            </div>
          </div>
        </div>
      </section>
      {/* penutup tentang section */}
      {/* jasa section */}
      <section className="text-gray-600 bg-[#EDF2F7]">
        <div className="container px-10 md:px-4 py-16 mx-auto">
          <div className="flex flex-wrap flex-col-reverse md:flex-row items-center justify-center">
            <div className="flex flex-wrap items-center justify-center w-fit md:w-1/2 mr-0 md:mr-16">
              <div className="w-40 m-5 md:w-64">
                <img
                  src="img/LandingPage/money.svg"
                  alt="Logo"
                  className="w-12 mb-4"
                />
                <h2 className="title-font mb-1.5 font-bold text-sm md:text-base text-gray-900">
                  Bantuan Keuangan
                </h2>
                <p className="leading-relaxed text-xs md:text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
              <div className="w-40 m-5 md:w-64">
                <img
                  src="img/LandingPage/aim.svg"
                  alt="Logo"
                  className="w-12 mb-4"
                />
                <h2 className="title-font mb-1.5 font-bold text-sm md:text-base text-gray-900">
                  Membantu Mencapai Tujuan
                </h2>
                <p className="leading-relaxed text-xs md:text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
              <div className="w-40 md:w-64 m-5">
                <img
                  src="img/LandingPage/warehouse.svg"
                  alt="Logo"
                  className="w-12 mb-4"
                />
                <h2 className="title-font mb-1.5 font-bold text-sm md:text-base text-gray-900">
                  Bantuan Sembako
                </h2>
                <p className="leading-relaxed text-xs md:text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
              <div className="w-40 md:w-64 m-5">
                <img
                  src="img/LandingPage/business.svg"
                  alt="Logo"
                  className="w-12 mb-4"
                />
                <h2 className="title-font mb-1.5 font-bold text-sm md:text-base text-gray-900">
                  Membantu Ekonomi
                </h2>
                <p className="leading-relaxed text-xs md:text-sm">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                  diam nonumy eirmod tempor
                </p>
              </div>
            </div>
            <div className="md:w-1/3 mb-8">
              <h2 className="pl-3 sm:text-4xl text-3xl mb-6 font-semibold text-gray-800 border-l-4 border-[#024547]">
                Jasa
              </h2>
              <p className="text-sm md:text-base leading-relaxed">
                koperasi memiliki fungsi dan peranan antara lain yaitu
                mengembangkan potensi dan kemampuan ekonomi anggota dan
                masyarakat, berupaya mempertinggi kualitas kehidupan manusia,
                memperkokoh perekonomian rakyat, mengembangkan perekonomian
                nasional, serta mengembangkan kreativitas dan jiwa berorganisasi
                bagi pelajar bangsa.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* penutup jasa section */}
      {/* temui kami section */}
      <section className="text-gray-600 bg-white">
        <div className="container px-10 py-16 mx-auto">
          <div className="flex flex-wrap items-center justify-center">
            <div className="w-full md:w-1/2 mr-0 md:mb-4 md:mr-32">
              <h2 className="pl-3 sm:text-4xl text-3xl mb-6 font-semibold text-gray-800 border-l-4 border-[#024547]">
                Temui Kami
              </h2>
              {/*  */}
              <div className="w-full">
                <div className="flex items-start mb-4 w-72">
                  <img
                    src="img/LandingPage/address.svg"
                    alt="address"
                    className="w-12"
                  />
                  <div className="ml-3 mt-3">
                    <h2 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                      Alamat
                    </h2>
                    <p className="leading-relaxed text-xs md:text-sm">
                      Jalan pecinan lama no 13 kelurahan Braga, kecamaan sumur
                      bandung, Kota Bandung, Jawa Barat, kode pos 40111
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4 w-72">
                  <img
                    src="img/LandingPage/conversation.svg"
                    alt="conversation"
                    className="w-12"
                  />
                  <div className="ml-3 mt-3">
                    <h2 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                      Telepon
                    </h2>
                    <p className="leading-relaxed text-xs md:text-sm">
                      0812-1212-3123
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4 w-72">
                  <img
                    src="img/LandingPage/gmail.svg"
                    alt="gmail"
                    className="w-12"
                  />
                  <div className="ml-3 mt-3">
                    <h2 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                      Email
                    </h2>
                    <p className="leading-relaxed text-xs md:text-sm">
                      Examplehehe.mail.com
                    </p>
                  </div>
                </div>
                <div className="flex items-start mb-4 w-72">
                  <img
                    src="img/LandingPage/whatsapp.svg"
                    alt="whatsapp"
                    className="w-12"
                  />
                  <div className="ml-3 mt-3">
                    <h2 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                      Whatsapp
                    </h2>
                    <p className="leading-relaxed text-xs md:text-sm">
                      0815-2312-5645
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-auto">
              <div className="mb-4 w-full">
                <div className="flex items-start mb-4 w-full">
                  <img
                    src="img/LandingPage/smartphoneGmaps.svg"
                    alt="smartphoneGmaps"
                    className="w-12"
                  />
                  <div className="ml-3 mt-3">
                    <h2 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                      Maps
                    </h2>
                  </div>
                </div>
                <img
                  src="img/LandingPage/Map.png"
                  alt="Map"
                  width={412}
                  height={312}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* penutup temui kami section */}
      {/* Pengurus section */}
      <section className="text-gray-600 bg-[#EDF2F7]">
        <div className="container px-5 md:px-4 py-16 mx-auto">
          <div className="block text-center mb-6">
            <h2 className="pl-3 sm:text-4xl text-3xl mb-3 font-semibold text-gray-800">
              Pengurus
            </h2>
            <p className="text-sm leading-relaxed w-96 mx-auto">
              Problems trying to resolve the conflict between the two major
              realms of Classical physics: Newtonian mechanics
            </p>
          </div>
          <div className="flex flex-wrap justify-center w-full">
            <div className="w-48 md:w-1/5 h-fit bg-white m-2 shadow-sm rounded-md">
              <img
                src="img/LandingPage/media.png"
                alt="media"
                className="w-full rounded-t-md"
              />
              <div className="py-4 text-center">
                <h3 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                  username
                </h3>
                <p className="leading-relaxed text-xs md:text-sm">jabatan</p>
              </div>
            </div>
            <div className="w-48 md:w-1/5 h-fit bg-white m-2 shadow-sm rounded-md">
              <img
                src="img/LandingPage/media.png"
                alt="media"
                className="w-full rounded-t-md"
              />
              <div className="py-4 text-center">
                <h3 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                  username
                </h3>
                <p className="leading-relaxed text-xs md:text-sm">jabatan</p>
              </div>
            </div>
            <div className="w-48 md:w-1/5 h-fit bg-white m-2 shadow-sm rounded-md">
              <img
                src="img/LandingPage/media.png"
                alt="media"
                className="w-full rounded-t-md"
              />
              <div className="py-4 text-center">
                <h3 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                  username
                </h3>
                <p className="leading-relaxed text-xs md:text-sm">jabatan</p>
              </div>
            </div>
            <div className="w-48 md:w-1/5 h-fit bg-white m-2 shadow-sm rounded-md">
              <img
                src="img/LandingPage/media.png"
                alt="media"
                className="w-full rounded-t-md"
              />
              <div className="py-4 text-center">
                <h3 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                  username
                </h3>
                <p className="leading-relaxed text-xs md:text-sm">jabatan</p>
              </div>
            </div>
            <div className="w-48 md:w-1/5 h-fit bg-white m-2 shadow-sm rounded-md">
              <img
                src="img/LandingPage/media.png"
                alt="media"
                className="w-full rounded-t-md"
              />
              <div className="py-4 text-center">
                <h3 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                  username
                </h3>
                <p className="leading-relaxed text-xs md:text-sm">jabatan</p>
              </div>
            </div>
            <div className="w-48 md:w-1/5 h-fit bg-white m-2 shadow-sm rounded-md">
              <img
                src="img/LandingPage/media.png"
                alt="media"
                className="w-full rounded-t-md"
              />
              <div className="py-4 text-center">
                <h3 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                  username
                </h3>
                <p className="leading-relaxed text-xs md:text-sm">jabatan</p>
              </div>
            </div>
            <div className="w-48 md:w-1/5 h-fit bg-white m-2 shadow-sm rounded-md">
              <img
                src="img/LandingPage/media.png"
                alt="media"
                className="w-full rounded-t-md"
              />
              <div className="py-4 text-center">
                <h3 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                  username
                </h3>
                <p className="leading-relaxed text-xs md:text-sm">jabatan</p>
              </div>
            </div>
            <div className="w-48 md:w-1/5 h-fit bg-white m-2 shadow-sm rounded-md">
              <img
                src="img/LandingPage/media.png"
                alt="media"
                className="w-full rounded-t-md"
              />
              <div className="py-4 text-center">
                <h3 className="title-font mb-1 font-bold text-sm md:text-base text-gray-900">
                  username
                </h3>
                <p className="leading-relaxed text-xs md:text-sm">jabatan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* penutup jasa section */}
      <Footer />
    </main>
  );
}
