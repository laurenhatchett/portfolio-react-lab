import ProjectCard from '../ProjectCard/ProjectCard'
import styles from '../ProjectsList/ProjectsList.module.css'



const ProjectsList = ({ projects }) => {
  return (
    <>
      <div className={styles.ProjectsList}>
        <h1>Projects</h1>
        {projects.map((project, idx) =>
          <ProjectCard project={project} key={idx} />
        )}
      </div>
    </>
  )
}

export default ProjectsList