import { Outlet } from "react-router"
import { ThemeIcon } from "@/components/UI/ThemeIcon"
function App() {
  return (
    <div>
      <nav className="grid grid-cols-[30%_70%] grid-rows-[50px_auto] items-center px-4">
        <ThemeIcon />
      </nav>
      <Outlet />
    </div>
  )
}

export default App
