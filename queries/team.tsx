import {
  BASE_FOOTBALL_URL,
  COMPETITION_ID,
  SEASON,
  requestOptions,
} from "@/utils/config"

export const fetchTeamsOfCompetition = async (season: number) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/team/${season}/all`
  )

  const teams = await data.json()

  return teams
}

export const fetchTeamSquad = async (teamId: number) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/team/${SEASON}/${teamId}/squad`
  )

  const team = await data.json()

  return team
}

export const fetchTeamStatistics = async (teamId: number) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/team/${SEASON}/${teamId}/statistics`
  )

  const teamStatistics = await data.json()

  return teamStatistics
}
