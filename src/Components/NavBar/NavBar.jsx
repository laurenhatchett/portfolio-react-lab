import { Link } from 'react-router-dom'

function NavBar() {
  return (
      <nav>
        <div>
          <Link 
            to='/'
          >
            Home
          </Link>
          <Link
            to='/about'
          >
            About
          </Link>
          <Link
            to='/projects'
          >
            Projects
          </Link>
          <Link
            to='/resume'
          >
            Resume
          </Link>
          <Link
            to='/contact'
          >
          Contact
          </Link> 
        </div>
      </nav>
  )
}

export default NavBar