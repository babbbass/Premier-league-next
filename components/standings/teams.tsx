import React from "react"
import { useQuery, QueryClient } from "react-query"
import styles from "./styles.module.css"
// import { teams } from "@/utils/dataTest/teams"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import Link from "next/link"
import { standingTeams as standings } from "@/utils/dataTest/standing"
import { Error } from "@/components/error/error"

const fetchTeamsStanding = async (competitionId: number, season: number) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/standings?league=${competitionId}&season=${season}`,
    requestOptions
  )

  return await response.json()
}

type standingTeams = {
  competitionId: number
  season: number
  active: boolean
}

type team = {
  rank: number
  points: number
  all: {
    played: number
    win: number
    draw: number
    lose: number
  }
  team: {
    id: number
    name: string
  }
}

export function StandingTeams({
  competitionId,
  season,
  active,
}: standingTeams) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["allTeams", competitionId, season],
    queryFn: () => fetchTeamsStanding(competitionId, season),
  })

  const standings = data ? data.response[0]?.league.standings[0] : []

  if (!standings) {
    return (
      <Error active={active} message='Nombre requete atteinte: 100 par Jour' />
    )
  }

  return (
    <div className={active ? styles.active : styles.hidden}>
      <h2 className={styles.titlePage}>
        Classement
        <br />-<br />
        <span>Equipes</span>
      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Pos</th>
            <th>Club</th>
            <th>MJ</th>
            <th>G</th>
            <th>
              <span>N</span>
            </th>
            <th>
              <span>P</span>
            </th>
            <th>
              <span>Pts</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team: team) => (
            <Link href={`/team/${team.team.id}`} className={styles.link}>
              <tr>
                <td>{team.rank}</td>
                <td>{team.team.name}</td>
                <td>{team.all.played}</td>
                <td>{team.all.win}</td>
                <td>{team.all.draw}</td>
                <td>{team.all.lose}</td>
                <td>{team.points}</td>
              </tr>
            </Link>
          ))}
        </tbody>
      </table>
    </div>
  )
}
