import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    // データ取得
    const result = axios({
      url: 'http://localhost:4000/graphql',
      method: 'POST',
      data: {
        query: `
          query {
            hellos {
              text
            }
          }
      `,
      },
    })
    result.then((r) => {
      setMessage(JSON.stringify(r.data.data.hellos))
    })
  }, [])
  return (
    <div className="App">
      <p>{message}</p>
    </div>
  )
}

export default App
