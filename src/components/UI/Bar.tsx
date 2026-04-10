import { Button, Divider } from "antd"
import { useReducer } from "react"
interface State {
  count: number
}

type CountAction =
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'reset' }
  | { type: 'set', payload: State[`count`] }



const initialState: State = { count: 0 }

/** reducer function for state management
 * @param state current state
 * @param action action to be performed on the state
 * @returns new state based on action type
 */
function stateReducer(state: State, action: CountAction) {
  switch (action.type) {
    case 'decrement':
      return { count: state.count - 1 }
    case 'increment':
      return { count: state.count + 1 }
    case 'reset':
      return initialState
    case 'set':
      return { ...state, count: action.payload }
    default:
      throw new Error('Unknown action type')
  }
}

export function Bar() {
  //  dispatch function to trigger state changes
  const [state, dispatch] = useReducer(stateReducer, initialState)
  const add = () => dispatch({ type: 'increment' })
  const minus = () => dispatch({ type: 'decrement' })
  const reset = () => dispatch({ type: 'reset' })
  const set = (value: State[`count`]) => dispatch({ type: 'set', payload: value })

  const { state: userState, updateName, updateAge, resetUser, setUser } = useUserInfo()

  return (
    <div>
      <h1>Bar Component</h1>
      <h2>欢迎来到我的计数器</h2>
      <p>这是一个使用useReducer管理状态的计数器组件。通过点击按钮，您可以增加、减少、重置或设置计数器的值。</p>
      <p>当前计数: {state.count}</p>
      <Button onClick={add}>增加</Button>
      <Button onClick={minus}>减少</Button>
      <Button onClick={reset}>重置</Button>
      <Button onClick={() => set(10)}>设置为10</Button>
      <Divider />
      <div className="w-[300px] h-[400px] border-2 border-gray-300 border-solid shadow-lg rounded-lg p-4">
        <h2>用户信息</h2>
        <p>姓名: {userState.name}</p>
        <p>年龄: {userState.age}</p>
        <div className="grid gap-2">
          <Button onClick={() => updateName('Alice')}>更新姓名为Alice</Button>
          <Button onClick={() => updateAge(30)}>更新年龄为30</Button>
          <Button onClick={resetUser}>重置用户信息</Button>
          <Button onClick={() => setUser({ name: 'Bob', age: 25 })}>设置用户信息为Bob, 25岁</Button>
        </div>
      </div>
    </div>
  )
}

const userInfo = {
  name: 'heaven',
  age: 5
}

interface UserAction {
  type: 'updateName' | 'updateAge' | 'reset' | 'setUser',
  payload?: string | number | typeof userInfo
}

function userReducer(state: typeof userInfo, action: UserAction) {
  switch (action.type) {
    case 'updateName':
      return { ...state, name: action.payload as string }
    case 'updateAge':
      return { ...state, age: action.payload as number }
    case 'reset':
      return userInfo
    case 'setUser':
      return action.payload as typeof userInfo
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

function useUserInfo() {
  const [state, dispatch] = useReducer(userReducer, userInfo)
  const updateName = (name: string) => dispatch({ type: 'updateName', payload: name })
  const updateAge = (age: number) => dispatch({ type: 'updateAge', payload: age })
  const resetUser = () => dispatch({ type: 'reset' })
  const setUser = (user: typeof userInfo) => dispatch({ type: 'setUser', payload: user })

  return { state, updateName, updateAge, resetUser, setUser }
}
