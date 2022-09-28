import Layout from "../components/layout";
import styles from "../styles/Home.module.css";

function Home() {
  return (
    <Layout title="Home">
      <main className={styles.main}>
        <h1 className="text-3xl font-bold underline text-cyan-400">Duar</h1>
      </main>
    </Layout>
  );
}

export default Home;
