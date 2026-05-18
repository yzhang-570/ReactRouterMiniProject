import { Outlet, NavLink } from 'react-router-dom'
import './styles/App.css'

function App() {

  return (
    <div className="main">
      {/* Centers content while left-aligning */}
      <div className="content-card">

        {/* Navigation */}
        <nav className="nav-div">
          <NavLink to="/" className="nav-link">Home</NavLink>
          <NavLink to="/projects" className="nav-link">Projects</NavLink>
          <NavLink to="/about" className="nav-link">About</NavLink>
          <NavLink to="/contact" className="nav-link">Contact</NavLink>
        </nav>

        {/* Page Content */}
        <div className="main-content-div">
          <Outlet />
        </div>
        
      </div>
    </div>
  )
}

export default App
