import ProfilNAV from "./profilNAV";

function Navbar() {
  return (
    <>
      <header className="font-inter text-gray-700 body-font">
        <div className="flex justify-between p-5 md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 md:text-slate-100 mb-4 md:mb-0">
            <img
              src="img/Logo.svg"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="hidden md:flex ml-3 text-xl">
              Koperasi Indonesia
            </span>
          </a>
          <ProfilNAV />
        </div>
      </header>
    </>
  );
}
export default Navbar;
