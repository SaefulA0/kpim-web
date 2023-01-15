import Link from "next/link";

export default function CardLPSimpWajib({ totalwajib }) {
  return (
    <>
      {/* simpana wajib */}
      <Link href="/dashboard/simpananWajib">
        <div className="h-24 cursor-pointer py-4 md:py-0 px-6 md:px-0 md:pl-6 m-1 w-80 md:w-fit flex items-center shadow-sm rounded-lg bg-white hover:bg-slate-50">
          <img src="img/LandingPage/tax.svg" alt="Logo" className="w-14" />
          <div className="text-start mx-1 md:mx-2 px-2">
            <h2 className="title-font font-bold text-sm md:text-base text-gray-900">
              Simpanan wajib yang kamu miliki
            </h2>
            <p className="leading-relaxed text-xs md:text-sm">
              Rp. {totalwajib.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
            </p>
          </div>
          <div className="w-8 h-full flex items-center bg-[#48BB78] rounded-r-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-6 h-6 mx-auto stroke-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M8.25 4.5l7.5 7.5-7.5 7.5"
              />
            </svg>
          </div>
        </div>
      </Link>
    </>
  );
}
