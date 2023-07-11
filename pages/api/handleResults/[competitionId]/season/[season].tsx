import { requestOptionsFootballDataOrg } from "@/utils/config"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const season = req.query.season
  const competitionId = req.query.competitionId

  const url = `https://api.football-data.org/v4/competitions/${competitionId}/matches?season=${season}`
  const response = await fetch(url, requestOptionsFootballDataOrg)

  const data = await response.json()
  const matches = data.matches.filter((match: any) => {
    return match.season.currentMatchday === match.matchday
  })

  res.status(200).json(matches)
  return matches
}
