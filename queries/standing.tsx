import {
  BASE_FOOTBALL_URL,
  requestOptions,
  COMPETITION_ID,
} from "@/utils/config"

export const fetchTeamsStanding = async (season: number) => {
  if (process.env.API_KEY) {
    const response = await fetch(
      `${BASE_FOOTBALL_URL}/standings?league=${COMPETITION_ID}&season=${season}`,
      requestOptions
    )

    return response.json()
  }
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/standings/${season}/teams`
  )

  const standing = await data.json()

  return standing
}

export const fetchTopAssists = async (season: number) => {
  if (process.env.API_KEY) {
    const response = await fetch(
      `${BASE_FOOTBALL_URL}/players/topassists?season=${season}&league=${COMPETITION_ID}`,
      requestOptions
    )

    return response.json()
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/standings/${season}/assists`
  )

  const standing = await data.json()

  return standing
}

export const fetchTopScorers = async (season: number) => {
  if (process.env.API_KEY) {
    const response = await fetch(
      `${BASE_FOOTBALL_URL}/players/topscorers?season=${season}&league=${COMPETITION_ID}`,
      requestOptions
    )

    return response.json()
  }

  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/standings/${season}/scorers`
  )

  const scorers = await data.json()

  return scorers
}
