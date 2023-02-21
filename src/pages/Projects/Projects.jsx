import { projects } from "../../data/projects"
import ProjectsList from "../../components/ProjectsList/ProjectsList"
import styles from './Projects.module.css'



function Projects () {
  return (
    <div className={styles.projectContainer} id='projects'>
      <h1 >My Work</h1>
      <ProjectsList projects={projects}/>
    </div>
  )
}

export default Projects