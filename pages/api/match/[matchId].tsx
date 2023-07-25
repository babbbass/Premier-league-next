import { requestOptions, BASE_FOOTBALL_URL } from "@/utils/config"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { matchId } = req.query
  const url = `${BASE_FOOTBALL_URL}/fixtures?id=${matchId}`
  const response = await fetch(url, requestOptions)
  const matches = await response.json()

  res.status(200).json(matches)
  return res.json(matches)
}
