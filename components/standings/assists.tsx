import React from "react"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import Link from "next/link"
import { standing } from "@/utils/dataTest/standingAssists"
import { rankingProps, RankingAssistsProps } from "@/types/rankingType"

const fetchTopAssists = async (season: number, competitionId: number) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players/topassists?season=${season}&league=${competitionId}`,
    requestOptions
  )

  return await response.json()
}

export function StandingAssists({
  competitionId,
  season,
  active,
}: rankingProps) {
  // const { isLoading, isError, data } = useQuery({
  //   queryKey: ["top assits", [competitionId, season]],
  //   queryFn: () => fetchTopAssists(season, competitionId),
  // })

  // const standing = data ? data.response : []

  return (
    <div className={active ? styles.active : styles.notActive}>
      <h2 className={styles.titlePage}>
        Classement
        <br />-<br />
        <span>Passeurs</span>
      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Club</th>
            <th>MJ</th>
            <th>Passes</th>
            <th>
              <span>Buts</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {standing.map((statsPlayer: RankingAssistsProps, key: number) => (
            <tr key={`${++key}`}>
              <td>{`${++key}`}</td>
              <td>
                <Link
                  href={`/player/${statsPlayer.player.id}`}
                  className={styles.link}
                >
                  {statsPlayer.player.name}
                </Link>
              </td>
              <td>{statsPlayer.statistics[0].games.appearences}</td>
              <td>{statsPlayer.statistics[0].goals.assists}</td>
              <td>{statsPlayer.statistics[0].goals.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
