import Image from "next/image";
import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Layout title="Home">
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline text-cyan-400">
          Hello Boys!
        </h1>
      </main>
    </Layout>
  );
}
