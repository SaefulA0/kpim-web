import Head from "next/head";

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>{props.title}</title>
        <link rel="icon" type="image/x-icon" href="img/Logo.png" />
      </Head>
      {props.children}
    </div>
  );
}
