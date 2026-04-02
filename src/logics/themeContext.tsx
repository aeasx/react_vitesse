import { createContext, type MouseEvent } from "react"

interface ThemeContextType {
  isDark: boolean
  toggleTheme: (event?: MouseEvent) => void
}

export const ThemeContext = createContext<ThemeContextType>({
  isDark: false,
  toggleTheme: () => { },
})