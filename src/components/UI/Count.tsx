import { Button } from "antd"

interface CountProps {
  count?: number,
  onChange: () => void
}

export function Count({ count = 0, onChange }: CountProps) {
  return (
    <div>
      <p>count: {count}</p>
      <Button onClick={onChange}>+ 1</Button>
    </div>
  )
}
