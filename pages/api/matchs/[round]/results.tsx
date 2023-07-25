import {
  requestOptions,
  BASE_FOOTBALL_URL,
  COMPETITION_ID,
  SEASON,
} from "@/utils/config"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { round } = req.query
  // console.log(round)
  // return
  const url = `${BASE_FOOTBALL_URL}/fixtures?league=${COMPETITION_ID}&season=${SEASON}&round=Regular+Season+-+${round}`
  const response = await fetch(url, requestOptions)
  const matches = await response.json()

  res.status(200).json(matches)
  return matches
}
