import ProjectPreview from "../ProjectPreview/ProjectPreview"

const ProjectList = (props) => {
  return (
    <>
      <article>
        <h1>Projects</h1>
        <ul>
        {props.projects.map(project =>
        <li>
          <ProjectPreview title={project.title} image={project.image} key={project.title } />
        </li>
        )}
        </ul>
      </article>
    </>
  )
}

export default ProjectList