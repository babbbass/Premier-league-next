import {
  requestOptions,
  BASE_FOOTBALL_URL,
  SEASON,
  COMPETITION_ID,
} from "@/utils/config"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { teamId } = req.query
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/teams/statistics?team=${teamId}&season=${SEASON}&league=${COMPETITION_ID}`,
    requestOptions
  )

  const teamStatistics = await response.json()

  res.status(200).json(teamStatistics)
  return res.json(teamStatistics)
}
