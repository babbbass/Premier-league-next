import {
  requestOptions,
  BASE_FOOTBALL_URL,
  COMPETITION_ID,
} from "@/utils/config"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { season } = req.query
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players/topassists?season=${season}&league=${COMPETITION_ID}`,
    requestOptions
  )

  const assists = await response.json()

  res.status(200).json(assists)
  return res.json(assists)
}
