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
  const { playerId, season } = req.query
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/players?id=${playerId}&season=${season}`,
    requestOptions
  )

  const playerDatas = await response.json()

  res.status(200).json(playerDatas)
  return res.json(playerDatas)
}
