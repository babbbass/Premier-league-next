import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"

export const fetchTeamsStanding = async (
  season: number,
  competitionId: number
) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/standings?league=${competitionId}&season=${season}`,
    requestOptions
  )

  return await response.json()
}

export const fetchTopAssists = async (
  season: number,
  competitionId: number
) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players/topassists?season=${season}&league=${competitionId}`,
    requestOptions
  )

  return await response.json()
}

export const fetchTopScorers = async (
  season: number,
  competitionId: number
) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players/topscorers?season=${season}&league=${competitionId}`,
    requestOptions
  )

  return await response.json()
}
