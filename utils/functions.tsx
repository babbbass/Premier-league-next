import { PlayerProps } from "@/types/PlayerType"
import Link from "next/link"
import styles from "@/components/team/squad.module.css"

type Player = PlayerProps["player"]
type PlayerArray = Player[]

export function playersForPosition(position: PlayerArray) {
  return position.map((player) => (
    <Link
      href={`/player/${player.id}`}
      className={`flex rounded-xl border border-purple-700 overflow-hidden mt-4 p-2 italic items-center h-16 w-full ${styles.card}`}
      key={player.id}
    >
      <div className={styles.imgContainer}>
        <img
          className={styles.playerImg}
          src={player.photo}
          alt={`${player.name}-photo`}
        />
      </div>
      <div className='text-red-500 text-xl font-bold'>{player.name}</div>
      <div className={`flex items-center ${styles.info}`}>
        <div className={styles.age}>{player.age} ans</div>
        <div>N°{player.number}</div>
      </div>
    </Link>
  ))
}

export const filterSquadByposition = (squad: PlayerArray, position: string) => {
  return squad.filter((player) => player.position?.toLowerCase() === position)
}
