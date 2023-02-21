import styles from './NavBar.module.css'
import { useState } from 'react'

function NavBar() {

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
          <li><a href="#resume">Resume</a></li>
        </ul>
      </div>


      <div className={styles.mobileLink} style={{ display: showModal ? "flex" : "none" }}>
        <button className={styles.closeNav} onClick={handleClick}>
          X
        </button>
        <ul>
          <li><a href="#home" onClick={handleClick}>Home</a></li>
          <li><a href="#about" onClick={handleClick}  >About</a></li>
          <li><a href="#projects" onClick={handleClick}>My Work</a></li>
          <li><a href="#skills" onClick={handleClick}
          >Skills</a></li>
          <li><a href="#resume" onClick={handleClick} >Resume</a></li>
        </ul>
      </div>

    </nav>
  )
}

export default NavBar