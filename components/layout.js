import Head from "next/head";
import SideNavbar from "./sidebar";
import Footer from "./footer";
import Router from "next/router";
import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function Layout(props) {
  const { status } = useSession();

  useEffect(() => {
    if (status === "unauthenticated") Router.replace("/login");
  }, [status]);

  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" type="image/x-icon" href="../../img/Logo.svg" />
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
