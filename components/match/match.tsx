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
        <div className='flex flex-col items-center justify-center md:text-sm uppercase px-20 mb-6'>
          <Image
            src={`${match.competition.emblem}`}
            width={120}
            height={120}
            alt={`logo ${match.competition.name}`}
            className='inline-block mr-2'
          />
          {match.competition.name} - Journée {match.season.currentMatchday}
        </div>
      </Link>
      <div className='py-4 w-full h-full flex items-center justify-center'>
        <div className='flex flex-col items-center w-1/5'>
          <Link href=''>
            <Image
              src={`${match.homeTeam.crest}`}
              width={50}
              height={20}
              alt={`logo ${match.homeTeam.name}`}
              className='mb-4 mx-auto mt-6'
            />
            <span
              className={`${
                match.score.winner === "HOME_TEAM" ? "font-bold" : "font-light"
              }`}
            >
              {match.homeTeam.shortName}
            </span>
          </Link>
        </div>
        <div className='flex flex-col px-6'>
          <div className='font-bold text-4xl flex'>
            <div className=''>{match.score.fullTime.home}</div>
            <div className='px-2'>-</div>
            <div className=''>{match.score.fullTime.away}</div>
          </div>
          <div className='text-xs text-center font-light'>{match.status}</div>
        </div>
        <div className='flex flex-col items-center justify-center w-1/5'>
          <Link href=''>
            <Image
              src={`${match.awayTeam.crest}`}
              width={50}
              height={20}
              alt={`logo ${match.awayTeam.name}`}
              className='mb-4 mx-auto mt-6'
            />
            <span
              className={`${
                match.score.winner === "AWAY_TEAM" ? "font-bold" : "font-light"
              }`}
            >
              {match.awayTeam.shortName}
            </span>
          </Link>
        </div>
      </div>
    </>
  )
}
