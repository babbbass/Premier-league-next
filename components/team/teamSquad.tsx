import React from "react"
import { useQuery } from "react-query"
//import { squad, team } from "@/utils/dataTest/squad"
import { Error } from "@/components/error/error"
import { PlayerProps } from "@/types/PlayerType"
import { playersForPosition, filterSquadByposition } from "@/utils/functions"
import { HeaderTeam } from "@/components/team/headerTeam"
import { fetchTeamSquad, fetchTeamStatistics } from "@/queries/team"

type Player = PlayerProps["player"]

export function TeamSquad({ id }: Player) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["teamSquad", id],
    queryFn: () => fetchTeamSquad(id),
  })

  if (!data.results) {
    return (
      <Error active={true} message='Nombre requete atteinte: 100 par Jour' />
    )
  }

  const squad = data ? data.response[0]?.players : []
  const team = data ? data.response[0]?.team : []

  const teamsStatistics = useQuery({
    queryKey: ["teamStatistics", id],
    queryFn: () => fetchTeamStatistics(id),
  })

  let teamFit = teamsStatistics.data
    ? teamsStatistics.data.response.form
        .substring(teamsStatistics.data.response.form.length - 6)
        .split("")
    : []
  const goalkeepers = filterSquadByposition(squad, "goalkeeper")
  const defenders = filterSquadByposition(squad, "defender")
  const midfielders = filterSquadByposition(squad, "midfielder")
  const attackers = filterSquadByposition(squad, "attacker")

  return (
    <div className='w-full sm:w-2/3 flex flex-wrap'>
      <HeaderTeam team={team} teamForm={teamFit} />
      <h3
        className={`w-full text-left text-purple-900 mt-6 mb-2 font-semibold text-2xl`}
      >
        Gardiens
      </h3>
      {playersForPosition(goalkeepers)}
      <h3 className='w-full text-left text-purple-900 mt-6 mb-2 font-semibold text-2xl'>
        Défenseurs
      </h3>
      {playersForPosition(defenders)}
      <h3 className='w-full text-left text-purple-900 mt-6 mb-2 font-semibold text-2xl'>
        Milieux
      </h3>
      {playersForPosition(midfielders)}
      <h3 className='w-full text-left text-purple-900 mt-6 mb-2 font-semibold text-2xl'>
        Attaquants
      </h3>
      {playersForPosition(attackers)}
    </div>
  )
}
