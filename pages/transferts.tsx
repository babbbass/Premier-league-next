import Head from "next/head"
import Teams from "@/components/team/transfers/teams"
import { fetchTeamsOfCompetition } from "@/queries/team"
import { dehydrate, QueryClient } from "react-query"
import { SEASON } from "@/utils/config"

export default function Transfert() {
  return (
    <>
      <Head>
        <title>Transfert - Premier league</title>
        <meta
          name='description'
          content='transfert football premier league anglaise'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>
        <Teams season={SEASON} />
      </div>
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
