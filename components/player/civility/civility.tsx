import React from "react"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import { Statistics } from "@/components/player/statistics/statistics"
import Link from "next/link"
import { Error } from "@/components/error/error"
import { player as playerInfos } from "@/utils/dataTest/player"
import { PlayerProps } from "@/types/PlayerType"
import { Palmares } from "@/components/player/palmares/palmares"

export const fetchPlayerDatas = async (
  playerId: number,
  season: number | undefined
) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players?id=${playerId}&season=${season}`,
    requestOptions
  )

  return await response.json()
}

export function Civility({ id, season }: PlayerProps["player"]) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["fetchPlayer", [id, season]],
    queryFn: () => fetchPlayerDatas(id, season),
  })

  const playerInfos = data ? data.response : []
  console.log(playerInfos)

  //   if (!playerInfos) {
  //     return <Error />
  //   }

  return (
    <div className={styles.container}>
      <Link
        href={
          playerInfos[0] ? `/team/${playerInfos[0].statistics[0].team.id}` : ""
        }
        className={styles.card}
      >
        {playerInfos.map((infos: PlayerProps, key: number) => (
          <div
            key={`${++key}-${infos.player.name}-civility`}
            className={styles.civilityContainer}
          >
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
        {playerInfos.length !== 0 ? (
          <Statistics statistics={playerInfos[0].statistics} />
        ) : (
          ""
        )}
        <Palmares player={playerInfos[0].player} />
      </Link>
    </div>
  )
}
