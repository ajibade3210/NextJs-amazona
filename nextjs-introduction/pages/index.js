import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Js Application</title>
      </Head>
      <Link href="/about">About</Link>
      <h1 className={styles.homePageTitle}>Aloha</h1>
    </div>
  );
}
