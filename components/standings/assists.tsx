import React from "react"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import Link from "next/link"
import { standing } from "@/utils/dataTest/standingAssists"

type standingProps = {
  competitionId: number
  season: number
  active: boolean
}

type player = {
  player: {
    id: string
    name: string
  }
  statistics: [
    {
      goals: {
        assists: number
        total: number
      }
      games: {
        appearences: number
      }
    }
  ]
}

const fetchTopAssists = async ({ season, competitionId }: any) => {
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
}: standingProps) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["top assits", [competitionId, season]],
    queryFn: () => fetchTopAssists({ season, competitionId }),
  })

  const standing = data ? data.response : []

  return (
    <div className={active ? styles.active : styles.hidden}>
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
          {standing.map((player: any, key: number) => (
            <Link href={`/player/${player.player.id}`} className={styles.link}>
              <tr>
                <td>{key + 1}</td>
                <td>{player.player.name}</td>
                <td>{player.statistics[0].games.appearences}</td>
                <td>{player.statistics[0].goals.assists}</td>
                <td>{player.statistics[0].goals.total}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  )
}
