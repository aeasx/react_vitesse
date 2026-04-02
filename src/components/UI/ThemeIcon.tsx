import type { FC, MouseEvent } from "react"
import { Icon } from '@iconify/react'

interface ThemeIconProps {
  onClick: (event: MouseEvent) => void
  isDark: boolean
}

export const ThemeIcon: FC<ThemeIconProps> = ({ onClick, isDark }) => {
  return (
    <Icon
      className="cursor-pointer"
      fontSize={24}
      icon={isDark ? "carbon:sun" : "carbon:moon"}
      onClick={onClick}
    />
  )
}
