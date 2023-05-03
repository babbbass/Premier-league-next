import React from "react"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import Link from "next/link"
import { standing } from "@/utils/dataTest/standingAssists"
import { rankingProps, RankingScorersProps } from "@/types/rankingType"
import Image from "next/image"
import { Error } from "@/components/error/error"

export const fetchTopScorers = async (
  season: number,
  competitionId: number
) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players/topscorers?season=${season}&league=${competitionId}`,
    requestOptions
  )

  return await response.json()
}

export function StandingScorers({
  competitionId,
  season,
  active,
}: rankingProps) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["topScorers", [season, competitionId]],
    queryFn: () => fetchTopScorers(season, competitionId),
  })

  if (!data.results) {
    return (
      <Error active={active} message='Nombre requete atteinte: 100 par Jour' />
    )
  }
  const standing = data ? data.response : []

  return (
    <div className={active ? styles.active : styles.notActive}>
      <table className={styles.table}>
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
              <td className={styles.goalsAssists}>
                {player.statistics[0].goals.total}
              </td>
              <td>{player.statistics[0].goals.assists}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
