import React from "react"
import { useQuery } from "react-query"
import Link from "next/link"
// import { teams } from "@/utils/dataTest/teams"
import { Error } from "@/components/error/error"
import { TeamsProps } from "@/types/TeamsProps"
import { Team } from "@/types/TeamProps"
import { fetchTeamsOfCompetition } from "@/queries/team"

export function AllTeams({ season }: TeamsProps) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["allTeams", season],
    queryFn: () => fetchTeamsOfCompetition(season),
  })

  // if (!data.results) {
  //   return (
  //     <Error active={true} message='Nombre requete atteinte: 100 par Jour' />
  //   )
  // }

  const teams = data ? data.response : []

  return (
    <div className={`flex-wrap w-full sm:w-4/5 flex justify-between`}>
      {teams.map((team: Team) => (
        <Link
          href={`/team/${team.team.id}`}
          key={team.team.id}
          className={`w-[48%] sm:w-[30%] border border-purple-700 rounded-xl h-60 flex flex-col italic mt-4 py-4 overflow-hidden`}
        >
          <div className='h-1/3 flex text-xl text-center justify-center items-center font-bold text-red-500'>
            {team.team.name}
          </div>
          <div className='flex h-1/2 my-4 items-center justify-center'>
            <img
              className='w-3/5 sm:w-1/2'
              src={team.team.logo}
              alt={`${team.team.name}-logo`}
              loading='lazy'
            />
          </div>
          <div className='text-center'>{team.venue.city}</div>
        </Link>
      ))}
    </div>
  )
}
