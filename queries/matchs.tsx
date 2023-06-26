import { requestOptionsFootballDataOrg } from "@/utils/config"

export const fetchMatches = async (competitionId: number) => {
  const response = await fetch(
    `https://api.football-data.org/v4/competitions/${competitionId}/matches?matchday=30&season=2022`,
    requestOptionsFootballDataOrg
  )
  return await response.json()
}

export const fetchMatch = async (matchId: number) => {
  const response = await fetch(
    `https://api.football-data.org/v4/matches/${matchId}`,
    requestOptionsFootballDataOrg
  )
  return await response.json()
}
