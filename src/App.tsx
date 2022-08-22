import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Apollo from './Apollo'
import Axios from './Axios'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/axios'} element={<Axios />} />
        <Route path={'/apollo'} element={<Apollo />} />
      </Routes>
    </BrowserRouter>
  )
}

function Home() {
  return (
    <div className="App">
      <p>
        <Link to="/axios">Axios</Link>
      </p>
      <p>
        <Link to="/apollo">Apollo Client</Link>
      </p>
    </div>
  )
}

export default App
