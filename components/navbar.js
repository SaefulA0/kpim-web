function Navbar() {
  return (
    <>
      <header className="font-inter text-gray-700 body-font">
        <div className="container flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 md:text-slate-100 mb-4 md:mb-0">
            <img
              src="img/Logo.svg"
              alt="Logo"
              className="w-10 h-10 rounded-full"
            />
            <span className="ml-3 text-xl">Koperasi Indonesia</span>
          </a>
          {/* <nav class="md:mx-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-black cursor-pointer">First Link</a>
            <a class="mr-5 hover:text-black cursor-pointer">Second Link</a>
            <a class="mr-5 hover:text-black cursor-pointer">Third Link</a>
            <a class="mr-5 hover:text-black cursor-pointer">Fourth Link</a>
          </nav> */}
        </div>
      </header>
    </>
  );
}
export default Navbar;
