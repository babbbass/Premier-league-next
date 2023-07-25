import { requestOptions, BASE_FOOTBALL_URL } from "@/utils/config"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { teamId } = req.query
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players/squads?team=${teamId}`,
    requestOptions
  )

  const team = await response.json()

  res.status(200).json(team)
  return res.json(team)
}
