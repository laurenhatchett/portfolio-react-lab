import { Link } from 'react-router-dom'
import hyphenateWords from '../../../utilities/hyphenateWords'
import styles from '../ProjectCard/ProjectCard.module.css'



const ProjectCard = ({ project }) => {
  const path = hyphenateWords(project.title)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.image}>
        <img 
          src={project.image} 
          alt={project.title}
        />
        </div>

        <div className={styles.info}>
          <h1>
            {project.title}
          </h1>
          <Link to={path}>
			      <button>
              Learn more
            </button>
          </Link>
      </div>
    </div>
    </>
  )  
}

export default ProjectCard