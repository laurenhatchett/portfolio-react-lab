import ProjectCard from '../ProjectCard/ProjectCard'
import styles from '../ProjectsList/ProjectsList.module.css'



function ProjectsList (props) {
  
  return (
    <>
      
        <div className={styles.projectsList}>
          {props.projects.map((project, idx) =>
          <ProjectCard title={project.title} image={project.image} key={idx} />
        )}
        </div>
      
    
    </>
  )
}


export default ProjectsList