import ProjectCard from '../ProjectCard/ProjectCard'
import styles from '../ProjectsList/ProjectsList.module.css'



function ProjectsList (props) {
  
  return (
    <>
      
        <div className={styles.projectsList}>
          {props.projects.map((project, idx) =>
          <ProjectCard title={project.title} image={project.image} repositoryLink={project.repositoryLink}  deploymentLink={project.deploymentLink} key={idx} />
        )}
        </div>
      
    
    </>
  )
}


export default ProjectsList