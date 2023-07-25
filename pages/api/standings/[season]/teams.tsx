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
    `${BASE_FOOTBALL_URL}/standings?league=${COMPETITION_ID}&season=${season}`,
    requestOptions
  )

  const matches = await response.json()

  res.status(200).json(matches)
  return res.json(matches)
}
