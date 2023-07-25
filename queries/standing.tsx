import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"

export const fetchTeamsStanding = async (season: number) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/standings/${season}/teams`
  )

  const standing = await data.json()

  return standing
}

export const fetchTopAssists = async (season: number) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/standings/${season}/assists`
  )

  const standing = await data.json()

  return standing
}

export const fetchTopScorers = async (season: number) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/standings/${season}/scorers`
  )

  const scorers = await data.json()

  return scorers
}
