/**
 * サンプルコード Reducer
 */
import { useEffect, useReducer } from "react"

type State = {
  count: number
  step: number
}

type Action = {
  type: "COUNT" | "STEP"
}

const initialState: State = {
  count: 0,
  step: 0,
}

const reducer = (state: State, action: Action): State => {
  // action.typeによってstateの更新を切り替え
  switch (action.type) {
    case "COUNT":
      return { count: state.count + 1, step: state.step }
    case "STEP":
      return { count: state.count, step: state.step + 1 }
  }
}

const Counter = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  useEffect(() => {
    // 毎秒dispatchしてstateを更新する
    const id = setInterval(() => {
      dispatch({ type: "COUNT" })
    }, 1000)
    return () => clearInterval(id)
    // dispatch関数はconstant
  }, [dispatch])
  return (
    <>
      <div>count : {state.count}</div>
      <div>step : {state.step}</div>
    </>
  )
}

export default Counter
