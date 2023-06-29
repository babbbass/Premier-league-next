import React from "react"
import {
  PlayerStatisticsProps as PlayerStatictics,
  Statistics,
} from "@/types/PlayerStatisticsType"

export function Statistics({ statistics }: PlayerStatictics) {
  return (
    <>
      <div className='w-full mb-10'>
        <div className='w-full flex flex-col justify-center items-center'>
          <h2 className='w-full mb-6 font-bold text-2xl text-center text-purple-900'>
            Statistiques
          </h2>
          <table className='w-full sm:w-2/3'>
            <thead>
              <tr>
                <th></th>
                <th className='text-red-500'>M</th>
                <th className='text-red-500'>B</th>
                <th className='text-red-500'>P</th>
              </tr>
            </thead>
            <tbody>
              {statistics.map((infos: Statistics, key: number) => (
                <tr
                  key={`${++key}-${infos.league.name}-statistics`}
                  className='font-normal h-8'
                >
                  <td className='text-left flex items-center italic'>
                    <img className='h-6 mr-2' src={infos.league.logo} />
                    {infos.league.name}
                  </td>
                  <td className='text-center italic'>
                    {infos.games.appearences}
                  </td>
                  <td className='text-center italic'>{infos.goals.total}</td>
                  <td className='text-center italic'>
                    {infos.goals.assists ? infos.goals.assists : 0}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
