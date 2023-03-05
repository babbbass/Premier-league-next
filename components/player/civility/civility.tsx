import React from "react"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import { Statistics } from "@/components/player/statistics/statistics"
import Link from "next/link"
import { Error } from "@/components/error/error"

type player = {
  player: {
    playerId: number
    name: string
    nationality: string
    age: number
    weight: number
    height: number
    photo: string
    season: number
  }
}

const fetchPlayerDatas = async (playerId: number, season: number) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players?id=${playerId}&season=${season}`,
    requestOptions
  )

  return await response.json()
}

export function Civility({ playerId, season }: player["player"]) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["fetch player", [playerId, season]],
    queryFn: () => fetchPlayerDatas(playerId, season),
  })

  const playerInfos = data ? data.response : []

  if (!playerInfos) {
    return <Error />
  }
  return (
    <div className={styles.container}>
      <Link
        href={
          playerInfos[0] ? `/team/${playerInfos[0].statistics[0].team.id}` : ""
        }
        className={styles.card}
      >
        {playerInfos.map((infos: player) => (
          <div className={styles.civilityContainer}>
            <h2>{infos.player.name}</h2>
            <div className={styles.imgContainer}>
              <img
                src={infos.player.photo}
                alt={`${infos.player.name}-photo`}
              />
            </div>
            <div className={styles.civility}>
              <div className={styles.name}>
                <span className={styles.nameValue}>Age:</span>
                {infos.player.age}
              </div>
              <div className={styles.name}>
                <span className={styles.nameValue}>Taille: </span>
                {infos.player.height}
              </div>
              <div className={styles.name}>
                <span className={styles.nameValue}>Pays: </span>
                {infos.player.nationality}
              </div>
              <div className={styles.name}>
                <span className={styles.nameValue}>Poids: </span>
                {infos.player.weight}
              </div>
            </div>
          </div>
        ))}
        {playerInfos.length !== 0 ? <Statistics player={playerInfos} /> : ""}
      </Link>
    </div>
  )
}
