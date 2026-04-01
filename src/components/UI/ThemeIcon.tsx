import type { FC } from "react"
import { Icon } from '@iconify/react'
import { useTheme } from '@/logics/theme'

export const ThemeIcon: FC = () => {
  const { isDark, toggleTheme } = useTheme()

  const handleClick = (event: React.MouseEvent) => {
    toggleTheme(event)
  }

  return (
    <Icon
      className="cursor-pointer"
      fontSize={24}
      icon={isDark ? "carbon:sun" : "carbon:moon"}
      onClick={handleClick}
    />
  )
}
