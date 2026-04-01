import App from "@/App"
import { Home, About } from "@/pages"
import NotFound from '@/components/ErrorPage/404'
import type { RouteObject } from "react-router"

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
    ],
  },
  {
    path: '*',
    element: <NotFound />
  }
]

