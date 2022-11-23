import { useParams } from "react-router-dom";
import findProject from "../../utilities/findProject";
import styles from './ProjectDetails.module.css'

function ProjectDetails () {
  const {projectDetails} = useParams()
  const project = findProject(projectDetails)

  return (
    <>
    <div className={styles.detailsPage}>
      <div className={styles.detailsContainer}>
        <div className={styles.detailsImage}>
          <img src={project.image} alt='screenshot'/>
        </div>
      <div className={styles.detailsInfo}>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        </div>
        <div className={styles.buttons}>
          <a href={project.repositoryLink}>
            <button className={styles.button}>GitHub Repository</button>
          </a>
          <a href={project.deploymentLink}>
            <button className={styles.button}>Deployed Site</button>
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

export default ProjectDetails