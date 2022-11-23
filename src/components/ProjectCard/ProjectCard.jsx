import { Link } from 'react-router-dom'
import hyphenateWords from '../../utilities/hyphenateWords'
import styles from '../ProjectCard/ProjectCard.module.css'



function ProjectCard (props) {
  const path = hyphenateWords(props.title)

  return (
    <>
      <div className={styles.grid}>
        <div className={styles.card}>

          <div className={styles.cardimage}>
            
              <img 
                src={props.image} 
                alt={props.title}
                className={styles.image}
                />
            
          </div>

          <div className={styles.body}>
            <h2>
              {props.title}
            </h2>
          </div>

          <div className={styles.footer}>
            <Link to={path}>
              <button className={styles.button}>Learn More</button>
            </Link>
          </div>

        </div>
      </div> 
    </>
  )  
}

export default ProjectCard
