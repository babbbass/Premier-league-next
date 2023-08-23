// import { Slider } from "@/components/slider/slider"
import { fetchTeamsOfCompetition } from "@/queries/team"
import { dehydrate, QueryClient } from "react-query"
import Teams from "@/components/team/transfers/teams"
import { SEASON } from "@/utils/config"

export default function Home() {
  return (
    <>
      <main className={`flex grow w-full h-full justify-center items-center`}>
        {/* <Slider /> */}
        <Teams season={SEASON} />
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
