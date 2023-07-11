import React from "react"
import { useQuery } from "react-query"
import { fetchMatch } from "@/queries/matchs"
import Image from "next/image"
import Link from "next/link"

type match = {
  matchId: number
}
export function Match({ matchId }: match) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["fetchMatch", matchId],
    queryFn: () => fetchMatch(matchId),
  })

  const match = data ? data : []
  return (
    <>
      <Link href='/results'>
        <div className='flex flex-col text-red-500 italic font-semibold text-xs items-center justify-center md:text-sm uppercase px-20'>
          <Image
            src={`${match.competition.emblem}`}
            width={120}
            height={120}
            alt={`logo ${match.competition.name}`}
            className='inline-block mr-2'
          />
          Journée {match.season.currentMatchday}
        </div>
      </Link>
      <div className='py-4 w-full h-full flex text-xs md:text-sm items-center justify-center'>
        <div className='flex h-full flex-col items-center w-1/5'>
          <Link href=''>
            <Image
              src={`${match.homeTeam.crest}`}
              width={50}
              height={20}
              alt={`logo ${match.homeTeam.name}`}
              className='mb-4 mx-auto mt-6'
            />
            <div
              className={`h-10 text-purple-900 italic ${
                match.score.winner === "HOME_TEAM" ? "font-bold" : "font-light"
              }`}
            >
              {match.homeTeam.shortName}
            </div>
          </Link>
        </div>
        <div className='flex bg-purple-900 text-slate-50 flex-col px-2 mx-6 items-center text-xs'>
          <div className='font-bold text-lg flex'>
            <div className=''>{match.score.fullTime.home}</div>
            <div className='px-2'>-</div>
            <div className=''>{match.score.fullTime.away}</div>
          </div>
          <div className='text-center font-light'>{match.status}</div>
        </div>
        <div className='flex h-full flex-col items-center justify-center w-1/5'>
          <Link href=''>
            <Image
              src={`${match.awayTeam.crest}`}
              width={50}
              height={20}
              alt={`logo ${match.awayTeam.name}`}
              className='mb-4 mx-auto mt-6'
            />
            <div
              className={`h-10 text-purple-900 italic ${
                match.score.winner === "AWAY_TEAM" ? "font-bold" : "font-light"
              }`}
            >
              {match.awayTeam.shortName}
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
