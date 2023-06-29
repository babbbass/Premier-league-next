import { requestOptionsFootballDataOrg } from "@/utils/config"
const date = new Date().toJSON().split("T")
const dateNow = date.at(0)

export const fetchMatches = async (
  competitionId: number,
  season: number | string | null = null,
  matchDay: number | null = null
) => {
  const url = !season
    ? `https://api.football-data.org/v4/competitions/${competitionId}/matches?fromDate=${dateNow}`
    : matchDay
    ? `https://api.football-data.org/v4/competitions/${competitionId}/matches?matchday=${matchDay}&season=${season}`
    : `https://api.football-data.org/v4/competitions/${competitionId}/matches?season=${season}`

  const response = await fetch(url, requestOptionsFootballDataOrg)

  return await response.json()
}

export const fetchMatch = async (matchId: number) => {
  const response = await fetch(
    `https://api.football-data.org/v4/matches/${matchId}`,
    requestOptionsFootballDataOrg
  )
  return await response.json()
}
