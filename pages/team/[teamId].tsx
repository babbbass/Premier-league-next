import React from "react"
import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { TeamSquad } from "@/components/player/teamSquad"
import { useRouter } from "next/router"

export default function Players() {
  const router = useRouter()
  const { teamId } = router.query

  return (
    <>
      <Head>
        <title>Effectif - team</title>
        <meta
          name='description'
          content='Infos et résultats sur la premier league anglaise'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <TeamSquad teamId={teamId} />
      </main>
    </>
  )
}
