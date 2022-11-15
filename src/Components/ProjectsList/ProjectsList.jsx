import ProjectPreview from "../ProjectPreview/ProjectPreview"
import styles from '../ProjectsList/ProjectsList.module.css'
// import styles from '../ProjectPreview/ProjectPreview.module.css'


const ProjectsList = (props) => {
  return (
    <>
      <article className='Projects-List'>
        <h1>Projects</h1>
        <div className='project-container'>
        {props.projects.map(project =>
        <div className='project-card'>
          <ProjectPreview title={project.title} image={project.image} key={project.title } />
        </div>
        )}
        </div>
      </article>
    </>
  )
}

export default ProjectsList