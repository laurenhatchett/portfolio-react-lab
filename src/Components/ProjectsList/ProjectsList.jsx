import { ProjectPreview } from "../ProjectPreview/ProjectPreview"

const ProjectList = (props) => {
  return (
    <>
      <h1>Projects</h1>
      <ul>
      {props.projects.map(project =>
        <li key={project.title}>
          <ProjectPreview title={project.title} image={project.image} key={project.title } />
        </li>
      )}
      </ul>
    </>
  )
}

export {
  ProjectList
}