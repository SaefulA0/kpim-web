import Head from "next/head";
import SideNavbar from "./sidebar";
import Footer from "./footer";

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" type="image/x-icon" href="../img/Logo.png" />
      </Head>
      <main>
        <div className="flex">
          <div className="basis-auto border-r-2">
            <SideNavbar />
          </div>
          <div className="basis-full">{props.children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
}
