import React from "react"
import { useQuery } from "react-query"
import Link from "next/link"
// import { standingTeams as standings } from "@/utils/dataTest/standing"
import { Error } from "@/components/error/error"
import { rankingProps, RankingTeamProps } from "@/types/rankingType"
import { fetchTeamsStanding } from "@/queries/standing"

export function StandingTeams({ competitionId, season, active }: rankingProps) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["standingTeams", [season, competitionId]],
    queryFn: () => fetchTeamsStanding(season, competitionId),
  })

  // if (data?.results) {
  //   return (
  //     <Error active={active} message='Nombre requete atteinte: 100 par Jour' />
  //   )
  // }

  const standings = data ? data.response[0]?.league.standings[0] : []

  return (
    <table
      className={`w-full md:w-4/5 m-auto min-w-[272px] text-sm border-spacing-0 ${
        active ? "" : "hidden"
      }`}
    >
      <thead className='bg-slate-50 text-purple-500 h-10'>
        <tr>
          <th>#</th>
          <th className={`text-left pl-4`}>Equipe</th>
          <th>MJ</th>
          <th>B</th>
          <th>Pts</th>
        </tr>
      </thead>
      <tbody>
        {standings.map((team: RankingTeamProps, key: number) => (
          <tr key={`${team.team.id}-${key}`}>
            <td>{team.rank}</td>
            <td
              className={`py-2 pl-2 flex items-center text-purple-900 font-semibold`}
            >
              <Link href={`/team/${team.team.id}`} className='contents'>
                <img
                  className='h-6 mr-2'
                  src={team.team.logo}
                  alt={`Logo - ${team.team.name}`}
                  loading='lazy'
                />
                {team.team.name}
              </Link>
            </td>
            <td className='text-center'>{team.all.played}</td>
            <td className={`text-center`}>
              {team.all.goals.for}:{team.all.goals.against}
            </td>
            <td className='text-center text-purple-900 font-semibold'>
              {team.points}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
