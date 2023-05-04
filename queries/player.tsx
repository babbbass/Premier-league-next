import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"

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

export const fetchPlayerPalmares = async (playerId: number) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/trophies?player=${playerId}`,
    requestOptions
  )

  return await response.json()
}
