import React from "react"
import { useRouter } from "next/router"
import { QueryClient, dehydrate } from "react-query"
import { Match as MatchComponent } from "@/components/match/match"
import { fetchMatch } from "@/queries/matchs"

type Context = {
  params: {
    id: string
  }
}

export default function Match() {
  const router = useRouter()
  const id = parseInt(router.query.id as string)

  return (
    <div className='flex flex-col mb-auto justify-center py-4'>
      <MatchComponent matchId={id} />
    </div>
  )
}

export async function getServerSideProps(context: Context) {
  const queryClient = new QueryClient()
  const matchId = parseInt(context.params.id)

  await queryClient.fetchQuery(["fetchMatch", matchId], () =>
    fetchMatch(matchId)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
