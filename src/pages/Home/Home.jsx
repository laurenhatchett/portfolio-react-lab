import styles from '../Home/Home.module.css'
import homePageHeadshot from '../../assets/homePageHeadshot.jpg'


function Home() {
  return (
    <>
      <div className={styles.home} id='home'>
        <div className={styles.image}>
          <img src={homePageHeadshot}  alt="headshot"/>
        </div>
    
        <div className= {styles.introduction}>
          <h1 className={styles.homeTitle}>Hi, I'm 
          <span>Lauren Hatchett.</span>
          </h1>
          <p className={styles.homeDescription}> As a Software Engineer, I am committed to providing a positive and human-centered experience that serves users with equity and efficiency. </p>
        </div>
      </div>

      
    </>
  )
}

export default Home