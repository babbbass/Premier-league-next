export const fetchMatches = async (
  season: number,
  round: number | undefined
) => {
  const data = round
    ? await fetch(`/api/matchs/${round}/results`)
    : await fetch("/api/matchs/results")
  const matches = await data.json()

  return matches
}

export const fetchMatch = async (matchId: number) => {
  const data = await fetch(
    `${process.env.NEXT_PUBLIC_SITE_HOST}/api/match/${matchId}`
  )

  const matchDatas = await data.json()

  return matchDatas
}
