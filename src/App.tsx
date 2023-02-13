/**
 * サンプルコード Reducer
 */
import { useReducer, useState } from "react"

/** 状態 */
type State = {
  id: number
  text: string
}

/** 動作 */
type Action = {
  type: "ADD"
  text: string
}

/** 初期化 */
const initialState: State[] = [
  {
    id: 0,
    text: "initial todo",
  },
]

// stateとactionを受け取り、actionのtypeによってstateの更新方法を変える
const reducer = (state: State[], action: Action): State[] => {
  switch (action.type) {
    case "ADD":
      return [...state, { id: state.slice(-1)[0].id + 1, text: action.text }]
  }
}

const TodoList = () => {
  const [text, setText] = useState("")
  const [todoList, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="todos">
      <label>
        todo :
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      </label>
      <button onClick={() => dispatch({ type: "ADD", text: text })}>Add todo</button>
      <ul>
        {todoList.map((todo) => (
          <li key={todo.id}>{todo.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
