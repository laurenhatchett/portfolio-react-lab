import styles from '../About/About.module.css'
import aboutHeadshot from '../../assets/aboutHeadshot.jpg'

function About() {
  return (
    <>
      <div className={styles.title} id='about'>
        <h1>About Me</h1>
      </div>
      <div className={styles.about}>
        <div className={styles.description}>
        <p> Before transitioning into Software Engineering, I was an ESL (English of Second Language) Instructor. I have a passion for <span>language, equity and inclusion.</span> I also enjoy expressing my creativity through <span>photography</span>  and <span>videography.</span> </p>
        </div>
        <div className={styles.aboutImage}>
          <img src={aboutHeadshot} alt='headshot'/>
        </div>
    </div>
    </>
  )
}

export default About