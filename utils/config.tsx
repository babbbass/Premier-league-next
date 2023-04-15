const myHeaders = new Headers()

myHeaders.append("x-rapidapi-key", "ea4658f5065098466676ebb039cc9194")
myHeaders.append("x-rapidapi-host", "v3.football.api-sports.io")

export const requestOptions: RequestInit = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow",
}

export const BASE_FOOTBALL_URL = `https://v3.football.api-sports.io`
