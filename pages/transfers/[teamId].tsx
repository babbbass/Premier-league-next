import React from "react"
import { useRouter } from "next/router"
import { useQuery, QueryClient, dehydrate } from "react-query"
import { fetchTransfersTeam } from "@/queries/team"
import { getYear } from "@/utils/functions"
import { Transfers } from "@/components/transfers/transfers"
import Link from "next/link"
import { SEASON } from "@/utils/config"

type Context = {
  params: {
    teamId: string
  }
}
export default function Team() {
  const router = useRouter()
  const teamId = parseInt(router.query.teamId as string)

  const { isLoading, isError, data } = useQuery({
    queryKey: ["transfersTeam", teamId],
    queryFn: () => fetchTransfersTeam(teamId),
  })

  const allTransfers = data ? data.response : []
  const transfers = allTransfers.filter(
    (transfer: any) => getYear(transfer.transfers[0].date) === SEASON
  )
  const inTransfers = transfers.filter(
    (transfer: any) => transfer.transfers[0].teams.in.id === teamId
  )

  const outTransfers = transfers.filter(
    (transfer: any) => transfer.transfers[0].teams.in.id !== teamId
  )

  return (
    <div className='flex flex-col justify-center items-center m-2'>
      <h1 className='ml-20 inline text-pink-500 font-bold my-6 text-2xl'>
        <Link href='/transferts'>Transferts</Link>
      </h1>
      <div className='flex flex-col justify-center sm:flex-row sm:justify-between w-full'>
        <div className='sm:w-1/2'>
          <h3 className='font-bold text-xl'>Arrivées</h3>
          <Transfers transfers={inTransfers} teamId={teamId} />
        </div>
        <div className='sm:w-1/2'>
          <h3 className='font-bold text-xl'>Départ</h3>
          <Transfers transfers={outTransfers} teamId={teamId} />
        </div>
      </div>
    </div>
  )
}

export async function getServerSideProps(context: Context) {
  const queryClient = new QueryClient()
  const teamId = parseInt(context.params.teamId)

  await queryClient.fetchQuery(["transfersTeam", teamId], () =>
    fetchTransfersTeam(teamId)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
