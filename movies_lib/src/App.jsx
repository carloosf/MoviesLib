import { Link, Outlet } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="App">
      <nav id="navbar">
        <Link to="/">MoviesLib</Link>
      </nav>
      <Link to="/movie/1">Movie</Link>
      <Link to="/search">Search</Link>

      <h2>Movies Lib</h2>
      <Outlet />
    </div>
  )
}

export default App
