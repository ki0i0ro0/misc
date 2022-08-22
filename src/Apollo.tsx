import { useEffect, useState } from 'react'
import './App.css'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
})

function App() {
  const [message, setMessage] = useState('')
  useEffect(() => {
    // データ取得
    const result = client.query({
      query: gql`
        query {
          hellos {
            text
          }
        }
      `,
    })

    result.then((r) => {
      setMessage(JSON.stringify(r.data.hellos))
    })
  }, [])
  return (
    <div className="App">
      <p>{message}</p>
    </div>
  )
}

export default App
