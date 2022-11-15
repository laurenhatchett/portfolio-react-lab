import styles from '../Contact/Contact.module.css'
import emailIcon from '../../assets/emailIcon.png'
import linkedinIcon from '../../assets/linkedinIcon.png'
import githubIcon from '../../assets/githubIcon.png'


function Contact () {
  return (
    <main className={styles.Contact}>
      
      <h1>Let's Connect!</h1>
      
      <div className='email'>
        <a href="laurenhatchett@gmail.com">
          <img src={emailIcon} alt='Email'></img>
        </a>
        </div>

        <div className='linkedin'>
          <a href="www.linkedin.com/in/laurenhatchett">
          <img src={linkedinIcon} alt='LinkedIn'></img>
          </a>
        </div>

        <div className='github'>
          <a href="https://github.com/laurenhatchett">
          <img src={githubIcon} alt='GitHub'></img>
        </a>
      </div>
    
    </main>
  )
}

export default Contact