import React from "react"
import { dehydrate, QueryClient } from "react-query"
import { fetchMatches } from "@/queries/matchs"
import MatchDay from "@/components/match/matchDay"
import { SEASON } from "@/utils/config"

export default function Results() {
  return (
    <div className='px-4 lg:w-1/2  md:w-4/6 md:m-auto flex flex-col'>
      <MatchDay />
    </div>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()
  const matchDay = 0

  await queryClient.prefetchQuery(["matches", [SEASON, matchDay]], () =>
    fetchMatches(SEASON, matchDay)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
