import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'

function NavBar() {
  return (
      <nav className={styles.navBar}>
          <Link 
            to='/'
          >
            Lauren Hatchett
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
            to='/skills'
          >
            Skills
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
      </nav>
  )
}

export default NavBar