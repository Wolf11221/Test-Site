import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Head>
      <title>Test Site | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>Najlepsza strona roku 2022!</h1>
      <p className={styles.text}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis labore maiores eaque, possimus sequi accusamus doloribus. Consectetur quos aliquam ipsam, omnis numquam hic quam distinctio iusto voluptate ex aspernatur quasi?</p>
      <Link href="/About"><a className={styles.btn}>Button</a></Link>
    </div>
    </>
  );
}
