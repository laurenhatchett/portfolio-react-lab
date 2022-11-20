import { Link } from 'react-router-dom'
import hyphenateWords from '../../utilities/hyphenateWords'
import styles from '../ProjectCard/ProjectCard.module.css'



const ProjectCard = (props) => {
  const path = hyphenateWords(props.title)

  return (
    <>
      <Link to={path}>
        <div className={styles.container}>
          <div className={styles.image}>
          <img 
            src={props.image} 
            alt={props.title}
            className='card-image'
          />
          </div>

          <div className={styles.body}>
            <h2>
              {props.title}
            </h2>
			        <button>
                Learn more
              </button>
        </div>
      </div>
    </Link>
    </>
  )  
}

export default ProjectCard