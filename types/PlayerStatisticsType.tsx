export type PlayerStatisticsProps = {
  statistics: Statistics[]
}

export type Statistics = {
  games: { appearences: number }
  league: { name: string; logo: string }
  team: { id: number; name: string; logo: string }
  goals: { total: number; assists: number }
}
