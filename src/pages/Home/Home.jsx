import styles from '../Home/Home.module.css'
import homeHeadshot from '../../assets/homeHeadshot.jpg'


function Home() {
  return (
    <main className={styles.Home}>
      <h1 className='title'>Lauren Hatchett</h1>
      <img src={homeHeadshot}  alt="headshot"/>
    </main>
  )
}

export default Home