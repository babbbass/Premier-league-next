import { requestOptionsFootballDataOrg } from "@/utils/config"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const season = req.query.season
  const matchDay = req.query.matchDay
  const competitionId = req.query.competitionId

  const url = `https://api.football-data.org/v4/competitions/${competitionId}/matches?matchday=${matchDay}&season=${season}`
  const response = await fetch(url, requestOptionsFootballDataOrg)

  const data = await response.json()

  res.status(200).json(data)
  return data
}
