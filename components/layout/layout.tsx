import { useContext } from "react"
import { MenuContext } from "@/context/context"

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

export default function Layout({ children }: Props) {
  const { active } = useContext(MenuContext)
  console.log(active)
  return (
    <div
      className={`flex flex-col px-2 min-h-screen bg-white  ${
        active ? "fixed top-4 bottom-4 left-4 right-4" : ""
      }`}
    >
      {children}
    </div>
  )
}
