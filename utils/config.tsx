const myHeaders = new Headers()

myHeaders.append("x-rapidapi-key", "ea4658f5065098466676ebb039cc9194")
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io")

export const requestOptions: RequestInit = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
}

export const BASE_FOOTBALL_URL = `https://v3.football.api-sports.io`

export const COMPETITION_ID = 39
export const SEASON = 2022

// Data football.org

const headersDataFootball = new Headers()

headersDataFootball.append("X-Auth-Token", "8e14cf89be6f49f48ad302e77b47f7fd")

export const requestOptionsFootballDataOrg: RequestInit = {
  method: "GET",
  headers: headersDataFootball,
  redirect: "follow",
}
