import {
  requestOptions,
  BASE_FOOTBALL_URL,
  COMPETITION_ID,
} from "@/utils/config"

export const fetchMatches = async (
  season: number,
  round: number | undefined
) => {
  const url = round
    ? `${BASE_FOOTBALL_URL}/fixtures?league=${COMPETITION_ID}&season=${season}&round=Regular+Season+-+${round}`
    : `${BASE_FOOTBALL_URL}/fixtures?league=${COMPETITION_ID}&season=${season}&last=10`
  console.log(url)
  const response = await fetch(url, requestOptions)

  return await response.json()
}

export const fetchMatch = async (matchId: number) => {
  const url = `${BASE_FOOTBALL_URL}/fixtures?id=${matchId}`
  const response = await fetch(url, requestOptions)

  return await response.json()
}
