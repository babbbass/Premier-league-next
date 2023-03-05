import React from "react"
import Head from "next/head"
import { AllTeams } from "@/components/team/allTeams"
import styles from "@/styles/Home.module.css"

const COMPETITIONID = 39

export default function Teams() {
  return (
    <>
      <Head>
        <title>Equipes - Premier league</title>
        <meta
          name='description'
          content='Infos et résultats sur la premier league anglaise'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <AllTeams competitionId={COMPETITIONID} />
      </main>
    </>
  )
}
