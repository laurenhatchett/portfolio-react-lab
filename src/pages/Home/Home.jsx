import styles from '../Home/Home.module.css'
import homeHeadshot from '../../assets/homeHeadshot.jpg'


function Home() {
  return (
    <main className={styles.Home}>
      <h1 className='title'>Lauren Hatchett</h1>
      <img src={homeHeadshot}  alt="headshot"/>
      <h1 className='welcome'>Welcome to my Portfolio!</h1>
      <p>Software Engineer - add description</p>
    </main>
  )
}

export default Home