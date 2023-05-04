import React from "react"
import { useQuery } from "react-query"
import Link from "next/link"
// import { teams } from "@/utils/dataTest/teams"
import styles from "./styles.module.css"
import { Error } from "@/components/error/error"
import { TeamsProps } from "@/types/TeamsProps"
import { Team } from "@/types/TeamProps"
import { fetchTeamsOfCompetition } from "@/queries/team"

export function AllTeams({ competitionId }: TeamsProps) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["allTeams", competitionId],
    queryFn: () => fetchTeamsOfCompetition(competitionId),
  })

  if (!data.results) {
    return (
      <Error active={true} message='Nombre requete atteinte: 100 par Jour' />
    )
  }

  const teams = data ? data.response : []

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
              loading='lazy'
            />
          </div>
          <div className={styles.teamInfo}>
            {/* <div>{team.team.founded}</div> */}
            {/* <div>{team.venue.name}</div> */}
            <div>{team.venue.city}</div>
          </div>
        </Link>
      ))}
    </div>
  )
}
