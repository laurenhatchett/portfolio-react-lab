import React from 'react'
import styles from './MobileNav.module.css'

const MobileNav = ({ showModal, handleClick }) => {
  return (

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

  )
}

export default MobileNav