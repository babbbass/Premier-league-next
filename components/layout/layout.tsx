import { useContext } from "react"
import { MenuContext } from "@/context/context"

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

export default function Layout({ children }: Props) {
  const { active } = useContext(MenuContext)
  return (
    <div
      className={`flex flex-col min-h-screen bg-white  ${
        active ? "fixed top-4 bottom-4 left-4 right-4" : ""
      }`}
    >
      {children}
    </div>
  )
}
