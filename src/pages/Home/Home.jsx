import styles from '../Home/Home.module.css'
import homePageHeadshot from '../../assets/homePageHeadshot.jpg'


function Home() {
  return (
    <>
      <div className={styles.Home}>
        <div className={styles.image}>
          <img src={homePageHeadshot}  alt="headshot"/>
        </div>
    
        <div className= {styles.introduction}>
          <h1 className={styles.homeTitle}>Hi, my name is Lauren Hatchett.</h1>
          <p className={styles.homeDescription}>I am a Software Engineer with a background in education, language, and science.</p>
        </div>
      </div>

      
    </>
  )
}

export default Home