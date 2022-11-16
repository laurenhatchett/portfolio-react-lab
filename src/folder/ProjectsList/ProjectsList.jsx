import ProjectPreview from "../ProjectPreview/ProjectPreview"
import styles from '../ProjectsList/ProjectsList.module.css'



const ProjectsList = (props) => {
  return (
    <>
      <article className={styles.projectList}>
        <h1>Projects</h1>
        {props.projects.map((project, i) =>
        <ProjectPreview 
          title={project.title} 
          image={project.image} 
          key={i} 
        />
        )}
      </article>
    </>
  )
}

export default ProjectsList