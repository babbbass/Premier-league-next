import React from "react"
import { useQuery } from "react-query"
import Link from "next/link"
// import { standing } from "@/utils/dataTest/standingAssists"
import { rankingProps, RankingScorersProps } from "@/types/rankingType"
import { Error } from "@/components/error/error"
import { fetchTopScorers } from "@/queries/standing"

export function StandingScorers({
  competitionId,
  season,
  active,
}: rankingProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["topScorers", [season, competitionId]],
    queryFn: () => fetchTopScorers(season, competitionId),
  })

  // if (data.results) {
  //   return (
  //     <Error active={active} message='Nombre requete atteinte: 100 par Jour' />
  //   )
  // }
  const standing = data ? data.response : []

  return (
    <table
      className={`w-full  md:w-4/5 m-auto min-w-[272px] border-spacing-0 text-sm ${
        active ? "m-4" : "hidden"
      }`}
    >
      <thead className='bg-slate-50 text-purple-500 h-10'>
        <tr>
          <th>#</th>
          <th className='text-left pl-4'>Joueur</th>
          <th>Passes</th>
          <th>
            <span>Buts</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {standing.map((player: RankingScorersProps, key: number) => (
          <tr key={++key}>
            <td>
              <Link href={`/player/${player.player.id}`} className='contents'>
                {++key}
              </Link>
            </td>
            <td className='py-2 pl-2 flex items-center text-purple-900 font-semibold'>
              <Link href={`/player/${player.player.id}`} className='contents'>
                <img
                  className='h-6 mr-2'
                  src={player.player.photo}
                  alt={`Logo - ${player.player.name}`}
                  loading='lazy'
                />
                {player.player.name}
              </Link>
            </td>
            <td className={`text-center`}>
              {player.statistics[0].goals.assists}
            </td>
            <td className='text-center text-purple-900 font-semibold'>
              {player.statistics[0].goals.total}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
