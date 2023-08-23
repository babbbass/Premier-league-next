import Teams from "@/components/team/transfers/teams"
import { fetchTeamsOfCompetition } from "@/queries/team"
import { dehydrate, QueryClient } from "react-query"
import { SEASON } from "@/utils/config"
import HeadTag from "@/components/tags/head"

export default function Transfert() {
  return (
    <>
      <HeadTag title='transferts' content='transferts de la ' />
      <Teams season={SEASON} />
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
