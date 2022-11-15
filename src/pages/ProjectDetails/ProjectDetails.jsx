import { projects } from "../../data/projects";
import findProject from "../../utilities/findProject";
import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProjectDetails = () => {
  const params = useParams()
  const location = useLocation()
  let locProj = location.pathname
  locProj = locProj.replace('/projects/', '')
  const project = findProject(locProj)
  
  console.log(project)

  return (
    <main>
      <>
        <h1>{projects.title}</h1>
        <div>
          <p>{projects.description}</p>
        </div>
        <div>
          <img src={project.image} alt='screenshot'/>
        </div>
        <div>
          <a href={project.repositoryLink}>
            <button>GitHub Repository</button>
          </a>
        </div>
        <div>
          <a href={project.deploymentLink}>
            <button>Deployed Site</button>
          </a>
        </div>
      </>
    </main>
  )
}

export default ProjectDetails