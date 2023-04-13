import React from "react"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import Link from "next/link"
import { standing } from "@/utils/dataTest/standingAssists"
import { rankingProps, RankingScorersProps } from "@/types/rankingType"

const fetchTopScorers = async (season: number, competitionId: number) => {
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
  // const { data, isLoading, isError } = useQuery({
  //   queryKey: ["top Scorers", [competitionId, season]],
  //   queryFn: () => fetchTopScorers(competitionId, season),
  // })

  // const standing = data ? data.response : []

  return (
    <div className={active ? styles.active : styles.notActive}>
      <h2 className={styles.titlePage}>
        Classement
        <br />-<br />
        <span>Buteurs</span>
      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Club</th>
            <th>MJ</th>
            <th>Buts</th>
            <th>
              <span>Passes</span>
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
              <td>
                <Link
                  href={`/player/${player.player.id}`}
                  className={styles.link}
                >
                  {player.player.name}
                </Link>
              </td>
              <td>{player.statistics[0].games.appearences}</td>
              <td>{player.statistics[0].goals.total}</td>
              <td>{player.statistics[0].goals.assists}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
