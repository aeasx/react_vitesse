import { useTheme } from "@/hooks/useTheme"
import { ThemeContext } from "./themeContext"
import { type FC, type ReactNode } from "react"

export const ThemeProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const theme = useTheme()
  return (
    <ThemeContext value={theme}>
      {children}
    </ThemeContext>
  )
}

