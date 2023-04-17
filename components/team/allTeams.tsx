import React from "react"
import { useQuery, QueryClient } from "react-query"
import Link from "next/link"
import { teams } from "@/utils/dataTest/teams"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import styles from "./styles.module.css"
import { Error } from "@/components/error/error"
import { TeamsProps } from "@/types/TeamsProps"
import { Team } from "@/types/TeamProps"

export const fetchTeamsOfCompetition = async (
  competitionId: TeamsProps["competitionId"]
) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/teams?league=${competitionId}&season=2022`,
    requestOptions
  )

  return await response.json()
}
export function AllTeams({ competitionId }: TeamsProps) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["allTeams", competitionId],
    queryFn: () => fetchTeamsOfCompetition(competitionId),
  })

  const teams = data ? data.response : []

  // if (isError) {
  //   return <Error message='Erreur Requete' />
  // }

  return (
    <div className={styles.container}>
      {teams.map((team: Team) => (
        <Link
          href={`/team/${team.team.id}`}
          key={team.team.id}
          className={styles.card}
        >
          <div className={styles.teamName}>{team.team.name}</div>
          <div className={styles.imgContainer}>
            <img
              className={styles.teamImg}
              src={team.team.logo}
              alt={`${team.team.name}-logo`}
            />
          </div>
          <div className={styles.teamInfo}>
            <div>Fondé en: {team.team.founded}</div>
            <div>{team.venue.name}</div>
            <div>{team.venue.city}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
