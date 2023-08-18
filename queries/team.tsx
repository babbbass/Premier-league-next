import {
  BASE_FOOTBALL_URL,
  COMPETITION_ID,
  SEASON,
  requestOptions,
} from "@/utils/config"

export const fetchTeamsOfCompetition = async (season: number) => {
  if (process.env.API_KEY) {
    const response = await fetch(
      `${BASE_FOOTBALL_URL}/teams?league=${COMPETITION_ID}&season=${season}`,
      requestOptions
    )

    return response.json()
  }
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/team/${season}/all`
  )

  const teams = await data.json()

  return teams
}

export const fetchTeamSquad = async (teamId: number) => {
  if (process.env.API_KEY) {
    const response = await fetch(
      `${BASE_FOOTBALL_URL}/players/squads?team=${teamId}`,
      requestOptions
    )

    return response.json()
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/team/${SEASON}/${teamId}/squad`
  )

  const team = await data.json()

  return team
}

export const fetchTeamStatistics = async (teamId: number) => {
  if (process.env.API_KEY) {
    const response = await fetch(
      `${BASE_FOOTBALL_URL}/teams/statistics?team=${teamId}&season=${SEASON}&league=${COMPETITION_ID}`,
      requestOptions
    )

    return response.json()
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/team/${SEASON}/${teamId}/statistics`
  )

  const teamStatistics = await data.json()

  return teamStatistics
}

export const fetchTransfersTeam = async (teamId: number) => {
  if (process.env.API_KEY) {
    const response = await fetch(
      `${BASE_FOOTBALL_URL}/transfers?team=${teamId}`,
      requestOptions
    )

    return response.json()
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/team/transfers/${teamId}`
  )

  const transfers = await data.json()
  return transfers
}
