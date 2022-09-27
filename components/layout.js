import Head from "next/head";
import SideNavbar from "./sidebar";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" type="image/x-icon" href="img/Logo.png" />
      </Head>
      <main>
        <div className="flex">
          <div className="basis-auto">
            <SideNavbar />
          </div>
          <div className="basis-full">{props.children}</div>
        </div>
      </main>
    </div>
  );
}
