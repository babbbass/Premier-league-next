import React from "react"
import { useQuery } from "react-query"
import Link from "next/link"
// import { standing } from "@/utils/dataTest/standingAssists"
import { rankingProps, RankingAssistsProps } from "@/types/rankingType"
import { Error } from "@/components/error/error"
import { fetchTopAssists } from "@/queries/standing"

export function StandingAssists({ season, active }: rankingProps) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["topAssits", season],
    queryFn: () => fetchTopAssists(season),
  })

  // if (data.results) {
  //   return (
  //     <Error active={active} message='Nombre requete atteinte: 100 par Jour' />
  //   )
  // }

  const standing = data ? data.response : []

  return (
    <table
      className={`w-full md:w-4/5 m-auto min-w-[272px] border-spacing-0 text-sm ${
        active ? "m-4" : "hidden"
      }`}
    >
      <thead className='bg-slate-50 text-purple-500 h-10'>
        <tr>
          <th>#</th>
          <th className='text-left pl-4'>Joueur</th>
          <th>Buts</th>
          <th>Passes</th>
        </tr>
      </thead>
      <tbody>
        {standing.map((statsPlayer: RankingAssistsProps, key: number) => (
          <tr key={`${++key}`}>
            <td>{`${++key}`}</td>
            <td className='py-2 pl-2 flex items-center text-purple-900 font-semibold'>
              <Link
                href={`/player/${statsPlayer.player.id}`}
                className='contents'
              >
                <img
                  className='h-6 mr-2'
                  src={statsPlayer.player.photo}
                  alt={`Logo - ${statsPlayer.player.name}`}
                  loading='lazy'
                />
                {statsPlayer.player.name}
              </Link>
            </td>
            <td className='text-center'>
              {statsPlayer.statistics[0].goals.total}
            </td>
            <td className='text-center text-purple-900 font-semibold'>
              {statsPlayer.statistics[0].goals.assists}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
