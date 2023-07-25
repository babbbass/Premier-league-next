import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"

export const fetchPlayerDatas = async (
  playerId: number,
  season: number | undefined
) => {
  if (process.env.API_KEY) {
    const response = await fetch(
      `${BASE_FOOTBALL_URL}/players?id=${playerId}&season=${season}`,
      requestOptions
    )

    return response.json()
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/player/${playerId}/${season}/datas`
  )

  const playerDatas = await data.json()
  return playerDatas
}

export const fetchPlayerPalmares = async (playerId: number) => {
  if (process.env.API_KEY) {
    const response = await fetch(
      `${BASE_FOOTBALL_URL}/trophies?player=${playerId}`,
      requestOptions
    )

    return response.json()
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/player/${playerId}/palmares`
  )

  const palmares = await data.json()
  return palmares
}
