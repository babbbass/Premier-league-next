import { StandingTeams } from "./teams"
import { render, screen, waitFor } from "@testing-library/react"
import "@testing-library/jest-dom/extend-expect"
import { rest } from "msw"
import { setupServer } from "msw/node"
import { QueryClient, QueryClientProvider } from "react-query"
import { server } from "@/tests/mocks/server" // Créez le fichier "mocks/server.js" pour gérer les appels API

const queryClient = new QueryClient()

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => {
  server.close()
  queryClient.clear()
})

describe("StandingTeams", () => {
  test("Should render without crash", async () => {
    render(<StandingTeams season={2023} active={true} />)
  })
})
