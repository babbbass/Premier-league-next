import { useQuery } from "react-query"
import Link from "next/link"
// import { teams } from "@/utils/dataTest/teams"
import { Error } from "@/components/error/error"
import { TeamsProps } from "@/types/TeamsProps"
import { Team } from "@/types/TeamProps"
import { fetchTeamsOfCompetition } from "@/queries/team"

export default function Teams({ season }: TeamsProps) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["allTeams", season],
    queryFn: () => fetchTeamsOfCompetition(season),
  })

  // if (!data.results) {
  //   return (
  //     <Error active={true} message='Nombre requete atteinte: 100 par Jour' />
  //   )
  // }

  const teams = data ? data.response : []

  return (
    <div className={`flex flex-wrap justify-center items-center`}>
      {teams.map((team: Team) => (
        <Link
          href={`/transfers/${team.team.id}`}
          key={team.team.id}
          className={`w-1/3 sm:w-[30%] border border-purple-700 rounded-xl h-20 italic m-4 py-4 overflow-hidden`}
        >
          <div className='h-1/3 flex flex-col text-xs sm:flex-row-reverse text-center justify-center items-center font-bold text-red-500 py-6'>
            <div className='mb-2'>{team.team.name}</div>
            <div className='flex justify-center sm:block'>
              <img
                className='w-1/5 sm:w-2/5'
                src={team.team.logo}
                alt={`${team.team.name}-logo`}
                loading='lazy'
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}
