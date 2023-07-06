import React, { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useQuery } from "react-query"
import { fetchMatches } from "@/queries/matchs"
import MatchDaySelect from "./matchDaySelect"

const competition = 2021

export default function MatchDay() {
  const [season, setSeason] = useState("")
  const [matchDay, setMatchDay] = useState(0)

  const { isLoading, isError, data } = useQuery({
    queryKey: ["matches", [competition, season, matchDay]],
    queryFn: () => fetchMatches(competition, season, matchDay),
  })

  if (isLoading) {
    return (
      <div className='flex my-20 items-center justify-center'>
        Chargement...
      </div>
    )
  }

  let matches = data ? data.matches : []
  if (!matchDay) {
    matches = matches.filter((match: any) => {
      return match.season.currentMatchday === match.matchday
    })
    setMatchDay(() => matches[0].season.currentMatchday)
  }

  if (matches.length > 0) {
    if (!season) {
      const year = matches[0].season.startDate.split("-")
      setSeason(year[0])
    }
  }

  return (
    <>
      <div className='bg-purple-900 mt-6 italic font-medium text-white text-left pl-2 h-8 flex justify-between items-center'>
        <div className='mx-6 cursor-pointer'>
          {matchDay > 1 && (
            <span
              onClick={() => setMatchDay(() => matchDay - 1)}
              className='mr-2'
            >{`<<`}</span>
          )}
          Journée {matchDay}
          {matchDay < 38 && (
            <span
              onClick={() => setMatchDay(() => matchDay + 1)}
              className='ml-2'
            >{`>>`}</span>
          )}
        </div>
        <MatchDaySelect setSeason={setSeason} season={season} />
      </div>
      {matches.map((match: any, index = 0) => (
        <div
          key={index++}
          className='mx-6 mt-6 p-2 flex flex-col hover:bg-purple-700 hover:text-white hover:transition-colors'
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
