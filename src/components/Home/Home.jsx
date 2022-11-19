import styles from '../Home/Home.module.css'
import homeHeadshot from '../../assets/homeHeadshot.jpg'


function Home() {
  return (
    <>
      <div className={styles.Home}>
        <img src={homeHeadshot}  alt="headshot"/>
      </div>
        <h1 className='home-title'>Hi, my name is Lauren Hatchett.</h1>
        <h3 className='home-description'>I am a Software Engineer with a background in education, language, and science.</h3>
    </>
  )
}

export default Home