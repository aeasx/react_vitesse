import { Outlet } from "react-router"
import { ThemeIcon } from "@/components/UI/ThemeIcon"
import { ThemeProvider } from "./logics/theme"
import { ThemeContext } from "./logics/themeContext"
import { useContext } from "react"

function AppContent() {
  const themeContext = useContext(ThemeContext)
  return (
    <div>
      <nav
        className="grid grid-cols-[30%_70%] grid-rows-[50px_auto] items-center px-4 border-b-2 border-gray-300 dark:border-gray-700 mb-1"
      >
        <ThemeIcon onClick={themeContext.toggleTheme} isDark={themeContext.isDark} />
      </nav>
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
