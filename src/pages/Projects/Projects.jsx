import { projects } from "../../data/projects.js"

const Projects = () => {
  return (
    <main>
      <h1>Projects</h1>
      <ul>
      {projects.map(project =>
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

export default Projects