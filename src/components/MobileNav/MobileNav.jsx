import React from 'react'
import styles from './mobileNav.module.css'

const mobileNav = () => {
  return (
    <div>mobileNav
      <a href='#toggle' className={styles.toggleButton} onClick={handleClick}>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
            <span className={styles.bar}></span>
        </a>

        <div className={styles.mobile}>
          <ul>
            <li>
              <Link to={Home} onClick={scrollToSection}>
                Home
              </Link>
            </li>
            <li>
              <Link to={About} ref={About} onClick={scrollToSection}>
                About
              </Link>
            </li>
            <li>
              <Link to= {Projects} onClick={scrollToSection}>
                My Work
              </Link>
            </li>
            <li>
              <Link to={Skills} onClick={scrollToSection}>
                Skills
              </Link>
            </li>
            <li>
              <Link to={Resume} onClick={scrollToSection}>
                Resume
              </Link>
            </li>
          </ul>
        </div>


    </div>
  )
}

export default mobileNav