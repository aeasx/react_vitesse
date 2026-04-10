import { useState } from "react"
import { Count } from "./Count"

export function CountFu() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <p>共同更新的计数器</p>
      <Count count={count} onChange={handleClick} />
      <Count count={count} onChange={handleClick} />
      <Count count={count} onChange={handleClick} />
    </div>
  )
}
