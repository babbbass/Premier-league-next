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
  const { playerId } = req.query
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/trophies?player=${playerId}`,
    requestOptions
  )

  const playerPalamares = await response.json()

  res.status(200).json(playerPalamares)
  return res.json(playerPalamares)
}
