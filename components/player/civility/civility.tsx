import React from "react"
import { useQuery } from "react-query"
import { Statistics } from "@/components/player/statistics/statistics"
import Link from "next/link"
import { Error } from "@/components/error/error"
// import { player as playerInfos } from "@/utils/dataTest/player"
import { PlayerProps } from "@/types/PlayerType"
import { Palmares } from "@/components/player/palmares/palmares"
import { fetchPlayerDatas } from "@/queries/player"

export function Civility({ id, season }: PlayerProps["player"]) {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["fetchPlayer", [id, season]],
    queryFn: () => fetchPlayerDatas(id, season),
  })

  if (!data?.results) {
    return (
      <Error active={true} message='Nombre requete atteinte: 100 par Jour' />
    )
  }

  const playerInfos = data ? data.response : []

  return (
    <div className='w-full flex flex-col items-center justify-center'>
      {playerInfos.map((infos: any, key: number) => (
        <div
          key={`${++key}-${infos.player.name}-civility`}
          className='mb-6 flex flex-col sm:w-4/5 md:w-3/5 sm:flex-row justify-between w-full'
        >
          <div className='flex sm:w-4/5 sm:justify-start items-center justify-center'>
            <div className='w-1/3 flex flex-col overflow-hidden items-center justify-center mr-2 mt-0 ml-0'>
              <div className='w-full font-bold italic text-red-500 text-xl mb-4'>
                {infos.player.name}
              </div>
              <img
                src={infos.player.photo}
                alt={`${infos.player.name}-photo`}
                className='w-30'
              />
              <h2 className='font-medium mt-2 italic'>
                {infos.player.nationality}
              </h2>
            </div>
            <div className='pt-4 h-full flex flex-col justify-center text-xs'>
              <div className='h-6 flex items-center justify-between'>
                <span>Age:</span>
                {infos.player.age}
              </div>
              <div className='h-6 flex items-center justify-between'>
                <span className='mr-4'>Taille: </span>
                {infos.player.height}
              </div>

              <div className='h-6 flex items-center justify-between'>
                <span className='mr-4'>Poids: </span>
                {infos.player.weight}
              </div>
            </div>
          </div>
          <Link
            className='sm:w-1/5 sm:mt-6 sm:flex-col sm:justify-center mt-10 w-full flex justify-between items-center'
            href={
              playerInfos[0]
                ? `/team/${playerInfos[0].statistics[0].team.id}`
                : ""
            }
          >
            <img
              src={infos.statistics[0].team.logo}
              alt={`${infos.statistics[0].team.name}-logo`}
              className='w-20'
            />
            <div className='font-bold italic mt-2'>
              {infos.statistics[0].team.name}
            </div>
          </Link>
        </div>
      ))}
      {playerInfos.length !== 0 ? (
        <Statistics statistics={playerInfos[0].statistics} />
      ) : (
        ""
      )}
      <Palmares player={playerInfos[0].player} />
    </div>
  )
}
