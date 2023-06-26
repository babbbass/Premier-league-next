import React from "react"
import { dehydrate, QueryClient, useQuery } from "react-query"
import { fetchMatches } from "@/queries/matchs"
import Image from "next/image"
import Link from "next/link"

const season = 2021
export default function Results(props: any) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["matches"],
    queryFn: () => fetchMatches(season),
  })

  const matches = data ? data.matches : []

  return (
    <div className='px-4 lg:w-1/2  md:w-4/6 md:m-auto flex flex-col'>
      <div className='bg-slate-300 mt-6 italic font-medium text-left pl-2 h-8 flex items-center'>
        Journée {matches.at(1).matchday}
      </div>
      {matches.map((match: any, index = 0) => (
        <div
          key={index++}
          className='mx-6 mt-6 flex flex-col hover:bg-slate-300 hover:transition-colors'
        >
          <Link href={`/match/${match.id}`}>
            <div
              className={`inline flex items-center mb-4 w-full ${
                match.score.winner === "HOME_TEAM"
                  ? "font-medium"
                  : "font-light"
              }
            `}
            >
              <Image
                src={`${match.homeTeam.crest}`}
                width={30}
                height={20}
                alt={`logo ${match.homeTeam.name}`}
                className='mr-2'
              />
              <div className='w-2/3 text-left'>{match.homeTeam.shortName}</div>
              <div className='w-1/6 text-right pr-2'>
                {match.score.fullTime.home}
              </div>
              <div className='text-slate-400'>
                ({match.score.halfTime.home})
              </div>
            </div>
            <div
              className={`inline flex items-center ${
                match.score.winner === "AWAY_TEAM"
                  ? "font-medium"
                  : "font-light"
              }
            `}
            >
              <Image
                src={`${match.awayTeam.crest}`}
                width={30}
                height={20}
                alt={`logo ${match.awayTeam.name}`}
                className='mr-2'
              />
              <div className='w-2/3 text-left'>{match.awayTeam.shortName}</div>
              <div className='w-1/6 text-right pr-2'>
                {match.score.fullTime.away}
              </div>
              <div className='text-slate-400'>
                ({match.score.halfTime.away})
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery(["matches"], () => fetchMatches(season))

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
