import React from "react"
import Head from "next/head"
import { AllTeams } from "@/components/team/allTeams"
import { fetchTeamsOfCompetition } from "@/queries/team"
import styles from "@/styles/Home.module.css"
import { dehydrate, QueryClient } from "react-query"
import { COMPETITION_ID } from "@/utils/config"

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
        <AllTeams competitionId={COMPETITION_ID} />
      </main>
    </>
  )
}

// export async function getServerSideProps() {
//   const queryClient = new QueryClient()

//   await queryClient.fetchQuery(["allTeams", COMPETITION_ID], () =>
//     fetchTeamsOfCompetition(COMPETITION_ID)
//   )

//   return {
//     props: {
//       dehydratedState: dehydrate(queryClient),
//     },
//   }
// }
