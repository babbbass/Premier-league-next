import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { QueryClient, QueryClientProvider } from "react-query"

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
      <Footer />
    </>
  )
}
