import { projects } from "../../data/projects"

const ProjectList = (props) => {
  return (
    <>
      <h1>Projects</h1>
      <ul>
        {props.projects.map(project =>
          <li key={project.title}>
            <p>{project.title}</p>
          </li>
        )}
      </ul>
      <>
        <ProjectList projects={projects}/>
      </>
    </>
  )
}

export {
  ProjectList
}