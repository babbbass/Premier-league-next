import Head from "next/head"
import Image from "next/image"
import styles from "@/styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <>
      <Head>
        <title>Premier league - Next</title>
        <meta
          name='description'
          content='Infos et résultats sur la premier league anglaise'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <nav className={styles.linkContainer}>
          <Link href='/standings' className={styles.card}>
            <button className={`${styles.homeButton} ${styles.card}`}>
              Classement
            </button>
          </Link>
          <Link href='/teams'>
            <button className={styles.homeButton}>Equipes</button>
          </Link>
          <Link href='/results'>
            <button className={styles.homeButton}>Resultats</button>
          </Link>
        </nav>
      </main>
    </>
  )
}
