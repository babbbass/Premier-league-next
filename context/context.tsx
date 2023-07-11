import { createContext, useState } from "react"

type Props = {
  children: string | JSX.Element | JSX.Element[]
}

type MenuContextType = {
  active: boolean
  setActive: (value: boolean) => void
}
export const MenuContext = createContext<MenuContextType>({
  active: false,
  setActive: () => {},
})

export default function Context({ children }: Props) {
  const [active, setActive] = useState(false)

  return (
    <MenuContext.Provider value={{ active, setActive }}>
      {children}
    </MenuContext.Provider>
  )
}
