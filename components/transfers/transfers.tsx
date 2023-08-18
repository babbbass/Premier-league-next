import React from "react"
import Image from "next/image"
import Link from "next/link"

export function Transfers({ transfers, teamId }: any) {
  return (
    <div>
      {transfers.map((transfer: any) => (
        <div key={transfer.player.id} className='my-4 w-full'>
          <div className='mb-2 font-bold text-purple-900'>
            <Link href={`/player/${transfer.player.id}`}>
              {transfer.player.name}
            </Link>
          </div>
          <div className='flex justify-center items-center'>
            <div className='mr-2'>
              <Image
                src={transfer.transfers[0].teams.out.logo}
                alt={`${transfer.transfers[0].teams.out.name}-logo`}
                height={40}
                width={40}
              />
            </div>
            <div className='text-sm'>
              {transfer.transfers[0].teams.out.name}
            </div>
            <span
              className={`mx-2 ${
                transfer.transfers[0].teams.in.id === teamId
                  ? `text-green-900`
                  : `text-red-500`
              }`}
            >
              ➔
            </span>
            <div className='text-sm'>{transfer.transfers[0].teams.in.name}</div>{" "}
            <div className='ml-2'>
              <Image
                src={transfer.transfers[0].teams.in.logo}
                alt={`${transfer.transfers[0].teams.in.name}-logo`}
                height={40}
                width={40}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
