import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"

export const fetchTeamsOfCompetition = async (competitionId: number) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/teams?league=${competitionId}&season=2022`,
    requestOptions
  )

  return await response.json()
}

export const fetchTeamSquad = async (teamId: number) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players/squads?team=${teamId}`,
    requestOptions
  )

  return await response.json()
}
