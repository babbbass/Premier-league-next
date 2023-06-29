import React from "react"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import Link from "next/link"
import { standing } from "@/utils/dataTest/standingAssists"
import { rankingProps, RankingScorersProps } from "@/types/rankingType"
import Image from "next/image"
import { Error } from "@/components/error/error"
import { fetchTopScorers } from "@/queries/standing"

export function StandingScorers({
  competitionId,
  season,
  active,
}: rankingProps) {
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["topScorers", [season, competitionId]],
  //   queryFn: () => fetchTopScorers(season, competitionId),
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
          <th>B</th>
          <th>
            <span>P</span>
          </th>
        </tr>
      </thead>
      <tbody>
        {standing.map((player: RankingScorersProps, key: number) => (
          <tr key={++key}>
            <td>
              <Link
                href={`/player/${player.player.id}`}
                className={styles.link}
              >
                {++key}
              </Link>
            </td>
            <td className={styles.playerCase}>
              <Link
                href={`/player/${player.player.id}`}
                className={styles.link}
              >
                <img
                  className={styles.imgPlayer}
                  src={player.player.photo}
                  alt={`Logo - ${player.player.name}`}
                  loading='lazy'
                />
                {player.player.name}
              </Link>
            </td>
            <td className={`text-center ${styles.goalsAssists}`}>
              {player.statistics[0].goals.total}
            </td>
            <td className={`text-center`}>
              {player.statistics[0].goals.assists}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
