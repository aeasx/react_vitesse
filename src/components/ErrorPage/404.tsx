import { Result, Button } from 'antd'
import { Link } from 'react-router'

export default function NotFound() {
  return (
    <Result
      status="404"
      title="404"
      subTitle="找不到页面了哦~"
      extra={<Button type="primary"><Link to="/">返回首页</Link></Button>}
    />
  )
}
