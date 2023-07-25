import React from "react"
import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { TeamSquad } from "@/components/team/teamSquad"
import { fetchTeamSquad, fetchTeamStatistics } from "@/queries/team"
import { useRouter } from "next/router"
import { QueryClient, dehydrate } from "react-query"

type ContextServerSide = {
  params: {
    teamId: string
  }
}

export default function Players() {
  const router = useRouter()
  const teamId = parseInt(router.query.teamId as string)

  return (
    <>
      <Head>
        <title>Effectif des équipes</title>
        <meta
          name='description'
          content='Infos et résultats sur la premier league anglaise'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <TeamSquad id={teamId} />
      </main>
    </>
  )
}

export async function getServerSideProps(context: ContextServerSide) {
  const queryClient = new QueryClient()
  const TEAMID = parseInt(context.params.teamId)

  await queryClient.fetchQuery(["teamSquad", TEAMID], () =>
    fetchTeamSquad(TEAMID)
  )

  await queryClient.prefetchQuery(["teamStatistics", TEAMID], () =>
    fetchTeamStatistics(TEAMID)
  )
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
