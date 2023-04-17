import React from "react"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import { useQuery } from "react-query"
import { squad, team } from "@/utils/dataTest/squad"
import styles from "./squad.module.css"
import { Error } from "@/components/error/error"
import { PlayerProps } from "@/types/PlayerType"
import { playersForPosition, filterSquadByposition } from "@/utils/functions"

type Player = PlayerProps["player"]

export const fetchTeamSquad = async (teamId: number) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players/squads?team=${teamId}`,
    requestOptions
  )

  return await response.json()
}

export function TeamSquad({ id }: Player) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["teamSquad", id],
    queryFn: () => fetchTeamSquad(id),
  })

  // if (isError) {
  //   return <Error message='Erreur dans la requete' />
  // }

  const squad = data ? data.response[0]?.players : []
  const team = data ? data.response[0]?.team : []

  if (!squad) {
    return <Error message='Nombre requete atteinte: 100 par Jour' />
  }

  const goalkeepers = filterSquadByposition(squad, "goalkeeper")
  const defenders = filterSquadByposition(squad, "defender")
  const midfielders = filterSquadByposition(squad, "midfielder")
  const attackers = filterSquadByposition(squad, "attacker")

  return (
    <div className={styles.container}>
      <h2 className={styles.teamName}>EFFECTIF - {team.name}</h2>
      <h3 className={styles.positions}>Gardiens</h3>
      {playersForPosition(goalkeepers)}
      <h3 className={styles.positions}>Défenseurs</h3>
      {playersForPosition(defenders)}
      <h3 className={styles.positions}>Milieux</h3>
      {playersForPosition(midfielders)}
      <h3 className={styles.positions}>Attaquants</h3>
      {playersForPosition(attackers)}
    </div>
  )
}
