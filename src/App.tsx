import { Outlet } from "react-router"
import { ThemeIcon } from "@/components/UI/ThemeIcon"
import { ThemeProvider } from "./logics/theme"
import { ThemeContext } from "./logics/themeContext"
import { useContext } from "react"

function AppContent() {
  const themeContext = useContext(ThemeContext)
  return (
    <div>
      <nav className="grid grid-cols-[30%_70%] grid-rows-[50px_auto] items-center px-4">
        <ThemeIcon onClick={themeContext.toggleTheme} isDark={themeContext.isDark} />
      </nav>
      <h1 className="my-10">
        <ThemeIcon onClick={themeContext.toggleTheme} isDark={themeContext.isDark} />
      </h1>
      <h1 className="my-10">
        <ThemeIcon onClick={themeContext.toggleTheme} isDark={themeContext.isDark} />
      </h1>
      <h1 className="my-10">
        <ThemeIcon onClick={themeContext.toggleTheme} isDark={themeContext.isDark} />
      </h1>
      <Outlet />
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  )
}

export default App
