import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useState } from "react"
import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <div className='px-2 flex flex-col min-h-screen bg-white'>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </Hydrate>
      </QueryClientProvider>
    </div>
  )
}
