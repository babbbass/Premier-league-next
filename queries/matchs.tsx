import {
  BASE_FOOTBALL_URL,
  requestOptions,
  COMPETITION_ID,
  SEASON,
} from "@/utils/config"
export const fetchMatches = async (
  season: number,
  round: number | undefined
) => {
  if (process.env.API_KEY) {
    const url = `${BASE_FOOTBALL_URL}/fixtures?league=${COMPETITION_ID}&season=${SEASON}&last=10`
    const response = await fetch(url, requestOptions)
    return await response.json()
  }
  const data = round
    ? await fetch(`/api/matchs/${round}/results`)
    : await fetch("/api/matchs/results")
  const matches = await data.json()

  return matches
}

export const fetchMatch = async (matchId: number) => {
  if (process.env.API_KEY) {
    const response = await fetch(
      `${BASE_FOOTBALL_URL}/fixtures?id=${matchId}`,
      requestOptions
    )
    return await response.json()
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/match/${matchId}`
  )

  const matchDatas = await data.json()

  return matchDatas
}
