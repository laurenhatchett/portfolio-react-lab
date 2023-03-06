import styles from './NavBar.module.css'
import { useState } from 'react'
import MobileNav from '../MobileNav/MobileNav'

function NavBar({}) {

  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal((prev) => !prev) 
  }

  return (
    <nav className={styles.navbar}>
      <div className={styles.brand}>LH</div>
      <a onClick={handleClick} href='#toggle' className={styles.toggleButton}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </a>
      <div className={styles.links}>
        <ul>
          <li><a href="#home" >Home</a></li>
          <li><a href="#about" >About</a></li>
          <li><a href="#projects">My Work</a></li>
          <li><a href="#skills"
          >Skills</a></li>
          {/* <li><a href="#resume">Resume</a></li> */}
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>

      <MobileNav handleClick={handleClick} showModal={showModal} />
    
    </nav>
  )
}

export default NavBar