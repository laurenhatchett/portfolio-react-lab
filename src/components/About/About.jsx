import styles from '../About/About.module.css'
import aboutHeadshot from '../../assets/aboutHeadshot.jpg'

function About() {
  return (
    <main className={styles.about}>
        <h1>About</h1>
        <img src={aboutHeadshot} alt='headshot'/>
        <p> Hi! My name is Lauren Hatchett. I am former educator turned Software Engineer. </p>
    </main>
  )
}

export default About