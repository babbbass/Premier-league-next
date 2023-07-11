import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useQuery } from "react-query"
import { fetchMatches } from "@/queries/matchs"
import MatchDaySelect from "./matchDaySelect"

const competitionId = 2021

export default function MatchDay() {
  const [season, setSeason] = useState(2023)
  const [matchDay, setMatchDay] = useState(0)

  const { isLoading, isError, data } = useQuery({
    queryKey: ["matches", [competitionId, matchDay, season]],
    queryFn: () => fetchMatches({ competitionId, matchDay, season }),
  })

  if (isLoading) {
    return (
      <div className='flex my-20 items-center justify-center'>
        Chargement...
      </div>
    )
  }

  const matches = data.matches ? data.matches : data ? data : []
  const matchday = matches[0].matchday
  return (
    <>
      <div className='mt-6 text-purple-900 text-sm md:text-base italic font-medium pl-2 h-8 flex justify-between items-center'>
        <div className='mx-2 w-1/2 cursor-pointer'>
          {matchday > 1 && (
            <span
              onClick={() => setMatchDay(() => matchday - 1)}
              className='mr-2'
            >{`<<`}</span>
          )}
          Journée {matchday}
          {matchday < 38 && (
            <span
              onClick={() => setMatchDay(() => matchday + 1)}
              className='ml-2'
            >{`>>`}</span>
          )}
        </div>
        <MatchDaySelect setSeason={setSeason} season={season} />
      </div>
      {matches.map((match: any, index = 0) => (
        <div
          key={index++}
          className='mx-6 mt-6 p-2 flex flex-col hover:bg-purple-900 hover:text-white hover:transition-colors'
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
                className='mr-2'
                src={`${match.homeTeam.crest}`}
                width={30}
                height={20}
                alt={`logo ${match.homeTeam.name}`}
              />
              <div className='w-2/3 text-left'>{match.homeTeam.shortName}</div>
              <div className='w-1/6 text-right pr-2'>
                {match.score.fullTime.home}
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
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}
