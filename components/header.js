import Profile from "./profileMD";

export default function Header(props) {
  return (
    <>
      <div className="flex flex-wrap items-center justify-between pb-6">
        <div>
          {/* Header */}
          <h1 className="text-2xl font-bold text-[#303030]">{props.title}</h1>
        </div>
        <div>
          {/* Profil component */}
          <div className="hidden md:flex justify-end items-center">
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}
