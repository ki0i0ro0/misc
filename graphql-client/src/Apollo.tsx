import './App.css'
import { gql, useQuery } from '@apollo/client'

const GET_HELLO = gql`
  query {
    hellos {
      text
    }
  }
`

function App() {
  const { loading, error, data } = useQuery(GET_HELLO, {})

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error</p>

  return (
    <div className="App">
      <p>{data.hellos ? JSON.stringify(data.hellos) : 'N/A'}</p>
    </div>
  )
}

export default App
