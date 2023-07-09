import { requestOptionsFootballDataOrg } from "@/utils/config"
const date = new Date().toJSON().split("T")
const dateNow = date.at(0)

type requestParameters = {
  competitionId: number
  matchDay: number
  season: number
}

export const fetchMatches = async ({
  competitionId,
  matchDay,
  season,
}: requestParameters) => {
  if (matchDay) {
    return fetchMatchesDay(competitionId, matchDay, season)
  }

  const url = `https://api.football-data.org/v4/competitions/${competitionId}/matches?season=${season}`

  const response = await fetch(url, requestOptionsFootballDataOrg)
  const data = await response.json()
  const matches = data.matches.filter((match: any) => {
    return match.season.currentMatchday === match.matchday
  })
  return matches
}

const fetchMatchesDay = async (
  competitionId: number,
  matchDay: number,
  season: number
) => {
  const url = `/api/handleResults/${competitionId}/${matchDay}/${season}`

  const response = await fetch(url)
  const data = await response.json()

  return data
}

export const fetchMatch = async (matchId: number) => {
  const response = await fetch(
    `https://api.football-data.org/v4/matches/${matchId}`,
    requestOptionsFootballDataOrg
  )
  return await response.json()
}
