import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { useState } from "react"
import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { Hydrate, QueryClient, QueryClientProvider } from "react-query"
import Context from "@/context/context"
import Layout from "@/components/layout/layout"

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <>
      <Context>
        <QueryClientProvider client={queryClient}>
          <Hydrate state={pageProps.dehydratedState}>
            <Layout>
              <Header />
              <Component {...pageProps} />
              <Footer />
            </Layout>
          </Hydrate>
        </QueryClientProvider>
      </Context>
    </>
  )
}
