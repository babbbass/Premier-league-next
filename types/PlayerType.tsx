export type PlayerProps = {
  player: {
    id: number
    name?: string
    age?: number
    number?: number
    photo?: string
    position?: string
    nationality?: string
    weight?: number
    height?: string
    season?: number
  }
  statistics: statisticPlayer[]
}

type statisticPlayer = {
  team: {
    id: number
    name: string
    logo: string
  }
}
