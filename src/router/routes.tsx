import App from "@/App"
import { Home } from "@/pages"
import { Button, Result } from "antd"
import { Link, type RouteObject } from "react-router"

export const routes: RouteObject[] = [
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
    ],
  },
  {
    path: '*',
    element: <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button type="primary"><Link to="/">Back Home</Link></Button>}
    />
  }
]
