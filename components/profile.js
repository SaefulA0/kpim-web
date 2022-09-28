function profile() {
  return (
    <>
      <div className="flex cursor-pointer bg-[#68D391] bg-opacity-20 pl-2 pr-4 py-2 items-center rounded-2xl">
        <div>
          <img src="img/defaultUser.png" alt="Logo" width={42} height={42} />
        </div>
        <div className="grow ml-2">
          <h5 className="font-medium">Nama User</h5>
          <p className="text-[#68D391]">Jabatan</p>
        </div>
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-5 h-5"
          >
            <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
          </svg>
        </div>
      </div>
    </>
  );
}
export default profile;
