import styles from '../Home/Home.module.css'
import homePageHeadshot from '../../assets/homePageHeadshot.jpg'


function Home() {
  return (
    <>
      <div className={styles.home}>
        <div className={styles.image}>
          <img src={homePageHeadshot}  alt="headshot"/>
        </div>
    
        <div className= {styles.introduction}>
          <h1 className={styles.homeTitle}>Hi, I'm Lauren Hatchett.</h1>
          <p className={styles.homeDescription}> Software Engineer </p>
        </div>
      </div>

      
    </>
  )
}

export default Home