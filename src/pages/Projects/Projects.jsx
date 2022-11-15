import { projects } from "../../data/projects"
import  ProjectList  from "../../components/ProjectsList/ProjectsList"

const Projects = () => {
  return (
    <main>
      <>
        <ProjectList projects={projects}/>
      </>
    </main>
  )
}

export default Projects