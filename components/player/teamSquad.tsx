import React from "react"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import { useQuery } from "react-query"
import { squad, team } from "@/utils/dataTest/squad"
import Link from "next/link"
import styles from "./styles.module.css"
import { Error } from "@/components/error/error"

type team = {
  teamId: number
}

type player = {
  id: number
  name: string
  age: number
  number: number
  photo: string
  position: string
}

const fetchTeamSquad = async (teamId: number) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players/squads?team=${teamId}`,
    requestOptions
  )

  return await response.json()
}

export function TeamSquad({ teamId }: team) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["fetching team squad", teamId],
    queryFn: () => fetchTeamSquad(teamId),
  })

  if (isError) {
    return <Error message='Erreur dans la requete' />
  }

  const squad = data ? data.response[0]?.players : []
  const team = data ? data.response[0]?.team : []

  if (!squad) {
    return <Error message='Nombre requete atteinte: 100 par Jour' />
  }
  const goalkeepers = squad.filter(
    (player: player) => player.position.toLowerCase() === "goalkeeper"
  )
  const defenders = squad.filter(
    (player: player) => player.position.toLowerCase() === "defender"
  )
  const midfielders = squad.filter(
    (player: player) => player.position.toLowerCase() === "midfielder"
  )
  const attackers = squad.filter(
    (player: player) => player.position.toLowerCase() === "attacker"
  )

  function playersForPosition(position: any) {
    return position.map((player: player) => (
      <Link
        href={`/player/${player.id}`}
        className={styles.card}
        key={player.id}
      >
        <div className={styles.name}>{player.name}</div>
        <div className={styles.imgContainer}>
          <img
            className={styles.playerImg}
            src={player.photo}
            alt={`${player.name}-photo`}
          />
        </div>
        <div className={styles.info}>
          <div>N° {player.number}</div>
          <div>{player.position}</div>
          <div>{player.age} ans</div>
        </div>
      </Link>
    ))
  }

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
