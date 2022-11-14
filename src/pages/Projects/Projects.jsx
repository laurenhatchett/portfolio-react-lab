import { projects } from "../../data/projects"

const Projects = (props) => {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
      {props.projects.map(project =>
        <li key={project.title}>
          <p>{project.title}</p>
        </li>
      )}
      </ul>
      <>
        <Projects projects={projects}/>
      </>
    </main>
  )
}

export {
  Projects
}