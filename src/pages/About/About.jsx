import styles from '../About/About.module.css'
import aboutHeadshot from '../../assets/aboutHeadshot.jpg'

function About() {
  return (
    <>
      <div className={styles.title} id='about'>
        <h1>About</h1>
      </div>
      <div className={styles.about}>
        <div className={styles.aboutImage}>
          <img src={aboutHeadshot} alt='headshot'/>
        </div>
        <div className={styles.description}>
          <p> Before transitioning into Software Engineering, I was an ESL (English of Second Language) Instructor. I have a passion for language and inclusion. As a Software Engineer, I am committed to providing a positive and human-centered experience that serves users with equity and efficiency.  </p>
        </div>
    </div>
    </>
  )
}

export default About