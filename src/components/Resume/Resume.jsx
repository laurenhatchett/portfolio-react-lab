import styles from '../Resume/Resume.module.css'

function Resume() {
  return (
    <div className={styles.resume}>
      
        <h1>Resume</h1>
        <a href="https://drive.google.com/file/d/1IhxhB8q64QES_tCeeEtb_qojwVFmX4aG/view?usp=sharing">
        <img src="https://i.imgur.com/CewpdDa.png" alt='Resume'></img>
        </a>
        <p>To learn more about my work and experience, click the resume image to download a copy</p>
    
    </div>
  ) 
}

export default Resume