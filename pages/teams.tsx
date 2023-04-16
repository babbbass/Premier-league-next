import React from "react"
import Head from "next/head"
import { AllTeams, fetchTeamsOfCompetition } from "@/components/team/allTeams"
import styles from "@/styles/Home.module.css"
import { dehydrate, QueryClient } from "react-query"

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

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery(["allTeams", COMPETITIONID], () =>
    fetchTeamsOfCompetition(COMPETITIONID)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
