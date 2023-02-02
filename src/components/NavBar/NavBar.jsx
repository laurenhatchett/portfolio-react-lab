import styles from './NavBar.module.css'


function NavBar() {
  
  const handleClick = () => {
    console.log ('toggle was clicked!')
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
            <li><a href='#home' id='homebutton'>Home</a></li>
            <li><a href='#about' id='aboutbutton'>About</a></li>
            <li><a href='#projects' id='projectsbutton'>My Work</a></li>
            <li><a href='#skills' id='skillsbutton'>Skills</a></li>
            <li><a href='#resume' id='resumebutton'>Resume</a></li>
          </ul>
        </div>
    
      </nav>
  )
}

export default NavBar