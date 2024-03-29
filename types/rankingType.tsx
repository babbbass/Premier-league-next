export type rankingProps = {
  competitionId?: number
  season: number
  active: boolean
}

export type RankingTeamProps = {
  rank: number
  team: {
    id: number
    name: string
    logo: string
  }
  points: number
  all: {
    played: number
    win: number
    draw: number
    lose: number
    goals: {
      for: number
      against: number
    }
  }
}

export type RankingScorersProps = {
  player: {
    id: number
    name: string
    photo: string
  }
  statistics: {
    games: { appearences: number }
    goals: { total: number; assists: number }
  }[]
}

export type RankingAssistsProps = {
  player: {
    id: number
    name: string
    photo: string
  }
  statistics: {
    games: { appearences: number }
    goals: { total: number; assists: number }
  }[]
}
