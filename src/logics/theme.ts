import { useEffect, useState } from "react"

export const useTheme = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') {
      return false
    }
    const storedTheme = localStorage.getItem("theme")
    if (storedTheme) {
      return storedTheme === "dark"
    }
    /** 系统的主题偏好 */
    return window.matchMedia("(prefers-color-scheme: dark)").matches
  })

  useEffect(() => {
    // 初始化时同步 DOM
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const toggleTheme = () => {
    const newIsDark = !isDark
    setIsDark(newIsDark)
    document.documentElement.classList.toggle("dark", newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")
  }

  return {
    isDark,
    toggleTheme,
  }
}

