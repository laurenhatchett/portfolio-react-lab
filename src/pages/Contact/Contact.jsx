import styles from '../Contact/Contact.module.css'
import emailIcon from '../../assets/emailIcon.png'
import linkedinIcon from '../../assets/linkedinIcon.png'
import githubIcon from '../../assets/githubIcon.png'


function Contact () {
  return (
    <div className={styles.contactContainer}>
      <h1>Let's connect!</h1>

      <div className={styles.contact}>
      
        

        
        <a href="laurenhatchett@gmail.com">
          <img src={emailIcon} alt='Email'></img>
        </a>
          

        <a href="www.linkedin.com/in/laurenhatchett">
          <img src={linkedinIcon} alt='LinkedIn'></img>
        </a>
    
        <a href="https://github.com/laurenhatchett">
          <img src={githubIcon} alt='GitHub'></img>
        </a>


      </div>
    </div>
  )
}

export default Contact