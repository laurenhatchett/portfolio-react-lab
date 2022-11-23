import { projects } from "../../data/projects";
import ProjectsList from "../../components/ProjectsList/ProjectsList";



function Projects () {
  return (
    <>
      <h1>My Work</h1>
      <ProjectsList projects={projects}/>
    </>
  )
}

export default Projects