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
    `${BASE_FOOTBALL_URL}/teams?league=${COMPETITION_ID}&season=${season}`,
    requestOptions
  )

  const teams = await response.json()

  // res.status(200).json(teams)
  return res.json(teams)
}
