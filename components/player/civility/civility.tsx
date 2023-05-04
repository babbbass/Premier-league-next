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
import { fetchPlayerDatas } from "@/queries/player"

export function Civility({ id, season }: PlayerProps["player"]) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["fetchPlayer", [id, season]],
    queryFn: () => fetchPlayerDatas(id, season),
  })

  if (!data.results) {
    return (
      <Error active={true} message='Nombre requete atteinte: 100 par Jour' />
    )
  }

  const playerInfos = data ? data.response : []

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        {playerInfos.map((infos: PlayerProps, key: number) => (
          <div
            key={`${++key}-${infos.player.name}-civility`}
            className={styles.civilityContainer}
          >
            <div className={styles.player}>
              <div className={styles.imgContainer}>
                <div className={styles.country}>{infos.player.nationality}</div>
                <img
                  src={infos.player.photo}
                  alt={`${infos.player.name}-photo`}
                />
                <h2>{infos.player.name}</h2>
              </div>
              <div className={styles.civility}>
                <div className={styles.name}>
                  <span className={styles.age}>Age:</span>
                  {infos.player.age}
                </div>
                <div className={styles.height}>
                  <span className={styles.nameValue}>Taille: </span>
                  {infos.player.height}
                </div>

                <div className={styles.weight}>
                  <span className={styles.nameValue}>Poids: </span>
                  {infos.player.weight}
                </div>
              </div>
            </div>
            <Link
              className={styles.team}
              href={
                playerInfos[0]
                  ? `/team/${playerInfos[0].statistics[0].team.id}`
                  : ""
              }
            >
              <img
                src={infos.statistics[0].team.logo}
                alt={`${infos.statistics[0].team.name}-logo`}
              />
              {/* </Link> */}
              <div className={styles.teamName}>
                {infos.statistics[0].team.name}
              </div>
            </Link>
          </div>
        ))}
        {playerInfos.length !== 0 ? (
          <Statistics statistics={playerInfos[0].statistics} />
        ) : (
          ""
        )}
        <Palmares player={playerInfos[0].player} />
      </div>
    </div>
  )
}
