import React from "react"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import Link from "next/link"
import { standing } from "@/utils/dataTest/standingAssists"
import { rankingProps, RankingAssistsProps } from "@/types/rankingType"
import { Error } from "@/components/error/error"
import { fetchTopAssists } from "@/queries/standing"

export function StandingAssists({
  competitionId,
  season,
  active,
}: rankingProps) {
  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ["topAssits", [season, competitionId]],
  //   queryFn: () => fetchTopAssists(season, competitionId),
  // })

  // if (!data.results) {
  //   return (
  //     <Error active={active} message='Nombre requete atteinte: 100 par Jour' />
  //   )
  // }

  // const standing = data ? data.response : []

  return (
    <table
      className={`${styles.table} ${active ? styles.active : styles.notActive}`}
    >
      <thead>
        <tr>
          <th>#</th>
          <th className={styles.headerPlayer}>Joueur</th>
          <th>P</th>
          <th>
            <span>B</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {standing.map((statsPlayer: RankingAssistsProps, key: number) => (
          <tr key={`${++key}`}>
            <td>{`${++key}`}</td>
            <td className={styles.playerCase}>
              <Link
                href={`/player/${statsPlayer.player.id}`}
                className={styles.link}
              >
                <img
                  className={styles.imgPlayer}
                  src={statsPlayer.player.photo}
                  alt={`Logo - ${statsPlayer.player.name}`}
                  loading='lazy'
                />
                {statsPlayer.player.name}
              </Link>
            </td>
            <td className='text-center'>
              {statsPlayer.statistics[0].goals.assists}
            </td>
            <td className='text-center'>
              {statsPlayer.statistics[0].goals.total}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
