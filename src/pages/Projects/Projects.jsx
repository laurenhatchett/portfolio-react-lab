import { projects } from "../../data/projects"
import  ProjectsList  from "../../components/ProjectsList/ProjectsList"

const Projects = () => {
  return (
    <main>
        <ProjectsList projects={projects}/>
    </main>
  )
}

export default Projects