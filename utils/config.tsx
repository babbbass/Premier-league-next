const myHeaders = new Headers()

myHeaders.append("x-rapidapi-key", `${process.env.API_KEY}`)
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io")

export const requestOptions: RequestInit = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
}

export const BASE_FOOTBALL_URL = `https://v3.football.api-sports.io`

export const COMPETITION_ID = 39
export const SEASON = 2022
