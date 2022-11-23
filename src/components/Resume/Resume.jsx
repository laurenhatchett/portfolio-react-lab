import styles from '../Resume/Resume.module.css'
import resumeIcon from '../../assets/resumeIcon.png'

function Resume() {
  return (
    <div className={styles.resume}>
      
        <h1>Resume</h1>
        <a href="https://drive.google.com/file/d/1IhxhB8q64QES_tCeeEtb_qojwVFmX4aG/view?usp=sharing">
        <img src={resumeIcon} alt='Resume'></img>
        </a>
        <div className={styles.description}>
        <p>To learn more about my work and experience, click the resume icon to download a copy!</p>
        </div>
    
    </div>
  ) 
}

export default Resume