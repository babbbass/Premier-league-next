import React from "react"
import Head from "next/head"
import { AllTeams } from "@/components/team/allTeams"
import { fetchTeamsOfCompetition } from "@/queries/team"
import styles from "@/styles/Home.module.css"
import { dehydrate, QueryClient } from "react-query"
import { SEASON } from "@/utils/config"
import HeadTag from "@/components/tags/head"

export default function Teams() {
  return (
    <>
      <HeadTag title='Equipes' content='Toutes les équipes de la ' />
      <main className={styles.main}>
        <AllTeams season={SEASON} />
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery(["allTeams", SEASON], () =>
    fetchTeamsOfCompetition(SEASON)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
