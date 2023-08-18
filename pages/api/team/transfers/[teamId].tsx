import { requestOptions, BASE_FOOTBALL_URL } from "@/utils/config"
import type { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { teamId } = req.query
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/transfers?team=${teamId}`,
    requestOptions
  )

  const transfers = await response.json()

  res.status(200).json(transfers)
  // return res.json(transfers)
}
