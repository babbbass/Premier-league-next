import React from "react"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import Link from "next/link"
import { standingTeams as standings } from "@/utils/dataTest/standing"
import { Error } from "@/components/error/error"
import { rankingProps, RankingTeamProps } from "@/types/rankingType"
import Image from "next/image"

export const fetchTeamsStanding = async (
  season: number,
  competitionId: number
) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/standings?league=${competitionId}&season=${season}`,
    requestOptions
  )

  return await response.json()
}

export function StandingTeams({ competitionId, season, active }: rankingProps) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["standingTeams", [season, competitionId]],
    queryFn: () => fetchTeamsStanding(season, competitionId),
  })

  if (!data.results) {
    return (
      <Error active={active} message='Nombre requete atteinte: 100 par Jour' />
    )
  }

  const standings = data ? data.response[0]?.league.standings[0] : []

  return (
    <div className={active ? styles.active : styles.notActive}>
      <h2 className={styles.titlePage}>
        Classement
        <br />-<br />
        <span>Equipes</span>
      </h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>#</th>
            <th className={styles.headerTeam}>Equipe</th>
            <th>MJ</th>
            <th>Buts</th>
            <th>
              <span>Pts</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {standings.map((team: RankingTeamProps, key: number) => (
            <tr key={`${team.team.id}-${key}`}>
              <td>{team.rank}</td>
              <td className={styles.teamCase}>
                <Link href={`/team/${team.team.id}`} className={styles.link}>
                  <Image
                    className={styles.logoTeam}
                    src={team.team.logo}
                    alt={`Logo - ${team.team.name}`}
                    width={15}
                    height={15}
                  />
                  {team.team.name}
                </Link>
              </td>
              <td>{team.all.played}</td>
              <td>
                {team.all.goals.for}:{team.all.goals.against}
              </td>
              <td>{team.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
