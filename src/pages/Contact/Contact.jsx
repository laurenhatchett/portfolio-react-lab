import styles from '../Contact/Contact.module.css'

function Contact () {
  return (
    <main className={styles.Contact}>
      <>
      <h1>Let's Connect!</h1>
      <div>
        <a href="laurenhatchett@gmail.com">
          <img src= 'https://i.imgur.com/MNwLxHH.png' alt='Email'></img>
        </a>

        <a href="www.linkedin.com/in/laurenhatchett">
          <img src= 'https://i.imgur.com/6Za2JTU.png' alt='LinkedIn'></img>
        </a>

        <a href="https://github.com/laurenhatchett">
          <img src= 'https://i.imgur.com/F0H8mAV.png' alt='GitHub'></img>
        </a>
      </div>
      </>
    </main>
  )
}

export default Contact