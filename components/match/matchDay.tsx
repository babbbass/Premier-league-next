import React, { useEffect, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { useQuery } from "react-query"
import { fetchMatches } from "@/queries/matchs"
// import { results } from "@/utils/dataTest/results"
// import MatchDaySelect from "./matchDaySelect"
import { useRouter } from "next/router"
import { transformDate } from "@/utils/functions"
import { SEASON } from "@/utils/config"

export default function MatchDay() {
  const [matchDay, setMatchDay] = useState(0)
  const router = useRouter()

  useEffect(() => {
    router.query.round
      ? setMatchDay(parseInt(router.query.round as string, 10))
      : ""
  }, [router.query.round])

  const { isLoading, isError, data } = useQuery({
    queryKey: ["matches", [SEASON, matchDay]],
    queryFn: () => fetchMatches(SEASON, matchDay),
  })

  if (isLoading) {
    return (
      <div className='flex h-screen my-20 items-center justify-center'>
        Chargement...
      </div>
    )
  }

  const matches = data ? data.response : []

  // const matches = results
  const day =
    matches.length >= 1 ? parseInt(matches[0].league.round.split("-")[1]) : 0
  return (
    <>
      <div className='mt-6 text-purple-900 text-sm md:text-base text-center italic font-medium pl-2 h-8 flex justify-between items-center'>
        <div className='mx-2 w-full cursor-pointer '>
          {day > 1 && (
            <span
              onClick={() => setMatchDay(() => day - 1)}
              className='mr-10  hover:text-pink-500'
            >{`<<`}</span>
          )}
          <span className='hover:text-pink-500'>Journée {day}</span>
          {day < 38 && (
            <span
              onClick={() => setMatchDay(() => day + 1)}
              className='ml-10 hover:text-pink-500'
            >{`>>`}</span>
          )}
        </div>
        {/* {/* <MatchDaySelect setSeason={setSeason} season={season} />  */}
      </div>

      {matches.map((match: any, index = 0) => (
        <div
          key={index++}
          className='mx mt-6 p-2 flex text-xs md:text-base hover:bg-pink-500 hover:text-white hover:transition-colors'
        >
          <Link className='flex w-full' href={`/match/${match.fixture.id}`}>
            <div className='flex items-center justify-center w-1/5 text-xs  hover:text-white mr-2'>
              <span>{transformDate(match.fixture.date).day}</span>
              <span className='hidden md:inline-block ml-1'>
                {transformDate(match.fixture.date).hour}
              </span>
            </div>
            <div className='flex flex-col w-4/5'>
              <div
                className={`flex items-center mb-4 ${
                  match.teams.home.winner ? "font-medium" : "font-light"
                }
          `}
              >
                <Image
                  className='mr-2'
                  src={`${match.teams.home.logo}`}
                  width={30}
                  height={20}
                  alt={`logo ${match.teams.home.name}`}
                />
                <div className='w-2/3 text-left'>{match.teams.home.name}</div>
                <div className='w-1/6 text-right pr-2'>{match.goals.home}</div>
              </div>
              <div
                className={`flex items-center ${
                  match.teams.away.winner ? "font-medium" : "font-light"
                }
          `}
              >
                <Image
                  src={`${match.teams.away.logo}`}
                  width={30}
                  height={20}
                  alt={`logo ${match.teams.away.name}`}
                  className='mr-2'
                />
                <div className='w-2/3 text-left'>{match.teams.away.name}</div>
                <div className='w-1/6 text-right pr-2'>{match.goals.away}</div>
              </div>
            </div>
          </Link>
        </div>
      ))}
    </>
  )
}
