import { Menu } from "@headlessui/react";

function profile() {
  return (
    <>
      <Menu as="div" className="relative w-fit mt-1">
        <Menu.Button className="">
          <div className="flex cursor-pointer bg-[#68D391] bg-opacity-20 pl-2 pr-4 py-2 items-center rounded-2xl">
            <div>
              <img
                src="img/defaultUser.png"
                alt="Logo"
                width={42}
                height={42}
              />
            </div>
            <div className="grow mx-2">
              <h5 className="font-medium text-left">Neneng Artemis</h5>
              <p className="text-[#68D391] text-left">Sekertaris</p>
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
        </Menu.Button>
        <Menu.Items className="absolute z-10 w-full origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <a
                href="/"
                className={`${
                  active
                    ? "bg-[#68D391] bg-opacity-20 text-gray-800"
                    : "text-gray-900"
                } group flex w-full items-center rounded-t-md px-2 py-2`}
              >
                Edit Profil
              </a>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <a
                href="/"
                className={`${
                  active
                    ? "bg-[#68D391] bg-opacity-20 text-gray-800"
                    : "text-gray-800"
                } group flex w-full items-center rounded-b-md px-2 py-2`}
              >
                Detail Profil
              </a>
            )}
          </Menu.Item>
        </Menu.Items>
      </Menu>
    </>
  );
}
export default profile;
