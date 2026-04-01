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

  const toggleTheme = (event?: React.MouseEvent) => {
    const newIsDark = !isDark

    // 兼容性检查和无障碍设置
    const isAppearanceTransition =
      'startViewTransition' in document &&
      !window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!isAppearanceTransition || !event) {
      setIsDark(newIsDark)
      document.documentElement.classList.toggle("dark", newIsDark)
      localStorage.setItem("theme", newIsDark ? "dark" : "light")
      return
    }

    const x = event.clientX
    const y = event.clientY
    const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )

    const transition = document.startViewTransition(() => {
      setIsDark(newIsDark)
      document.documentElement.classList.toggle("dark", newIsDark)
      localStorage.setItem("theme", newIsDark ? "dark" : "light")
    })

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`,
      ]

      document.documentElement.animate(
        {
          clipPath: newIsDark
            ? [...clipPath].reverse()
            : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-out',
          fill: 'forwards',
          pseudoElement: newIsDark
            ? '::view-transition-old(root)'
            : '::view-transition-new(root)',
        },
      )
    })
  }

  return {
    isDark,
    toggleTheme,
  }
}

