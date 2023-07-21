import React from "react"
import { useQuery } from "react-query"
import { fetchMatch } from "@/queries/matchs"
import Image from "next/image"
import Link from "next/link"
import { match } from "@/utils/dataTest/match"
import { transformDate } from "@/utils/functions"

type match = {
  matchId: number
}

export function Match({ matchId }: match) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["fetchMatch", matchId],
    queryFn: () => fetchMatch(matchId),
  })

  const match = data ? data.response : []
  return (
    <>
      <Link
        href={{
          pathname: "/results",
          query: { round: parseInt(match[0].league.round.split("-")[1]) },
        }}
      >
        <div className='flex flex-col text-red-500 italic font-semibold text-xs items-center justify-center md:text-sm uppercase p-10'>
          {match[0].league.round}
          <br />
          <br />
          {`${transformDate(match[0].fixture.date).day} - 
            ${transformDate(match[0].fixture.date).hour}`}
        </div>
      </Link>
      <div className='py-4 w-full h-full flex text-xs md:text-sm items-center justify-center'>
        <div className='flex h-full flex-col items-center justify-center w-1/5'>
          <Link href={`/team/${match[0].teams.home.id}`}>
            <Image
              src={`${match[0].teams.home.logo}`}
              width={50}
              height={20}
              alt={`logo ${match[0].teams.home.name}`}
              className='mb-4 mx-auto mt-6 h-3/5 flex items-center'
            />
            <div
              className={`h-10 text-purple-900 italic ${
                match[0].teams.home.winner ? "font-bold" : "font-light"
              }`}
            >
              {match[0].teams.home.name}
            </div>
          </Link>
        </div>
        <div className='flex bg-purple-900 text-slate-50 flex-col px-2 mx-6 items-center text-xs'>
          <div className='font-bold text-lg flex'>
            <div className=''>{match[0].goals.home}</div>
            <div className='px-2'>-</div>
            <div className=''>{match[0].goals.away}</div>
          </div>
          <div className='text-center font-light'>
            {match[0].fixture.status.short}
          </div>
        </div>
        <div className='flex h-full flex-col items-center justify-center w-1/5'>
          <Link href={`/team/${match[0].teams.away.id}`}>
            <Image
              src={`${match[0].teams.away.logo}`}
              width={50}
              height={20}
              alt={`logo ${match[0].teams.away.name}`}
              className='mb-4 mx-auto mt-6 3/5 flex items-center'
            />
            <div
              className={`h-10 text-purple-900 italic ${
                match[0].teams.away.winner ? "font-bold" : "font-light"
              }`}
            >
              {match[0].teams.away.name}
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}
