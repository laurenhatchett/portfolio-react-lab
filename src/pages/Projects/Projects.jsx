import { projects } from "../../data/projects"

const Projects = () => {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
      {projects.map(project =>
        <li key={project.title}>
          {project.title}
        </li>
      )}
      </ul>
      <>
        <Projects projects={projects}/>
      </>
    </div>
  )
}

export default Projects