export type PlayerStatisticsProps = {
  statistics: Statistics[]
}

export type Statistics = {
  games: { appearences: number }
  league: { name: string }
  team: { id: number; name: string }
  goals: { total: number; assists: number }
}
