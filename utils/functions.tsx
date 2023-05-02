import { PlayerProps } from "@/types/PlayerType"
import Link from "next/link"
import styles from "@/components/team/squad.module.css"

type Player = PlayerProps["player"]
type PlayerArray = Player[]

export function playersForPosition(position: PlayerArray) {
  return position.map((player) => (
    <Link href={`/player/${player.id}`} className={styles.card} key={player.id}>
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
        <div>{player.age} ans</div>
      </div>
    </Link>
  ))
}

export const filterSquadByposition = (squad: PlayerArray, position: string) => {
  return squad.filter((player) => player.position?.toLowerCase() === position)
}
