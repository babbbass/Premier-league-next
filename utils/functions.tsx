import { PlayerProps } from "@/types/PlayerType"

type Player = PlayerProps["player"]
type PlayerArray = Player[]

export const filterSquadByposition = (squad: PlayerArray, position: string) => {
  return squad.filter((player) => player.position?.toLowerCase() === position)
}

export function transformDate(date: string) {
  const newDate = new Date(date)
  const dateMatch = {
    day: `${("0" + newDate.getDate()).slice(-2)}.${(
      "0" +
      (newDate.getMonth() + 1)
    ).slice(-2)}`,
    hour: `${("0" + newDate.getHours()).slice(-2)}:${(
      "0" + newDate.getMinutes()
    ).slice(-2)}`,
  }

  return dateMatch
}
