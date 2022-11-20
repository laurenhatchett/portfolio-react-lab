import { projects } from "../../data/projects";
import findProject from "../../utilities/findProject";
// import { useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";

const ProjectDetails = () => {
  // const params = useParams()
  const location = useLocation()
  let locProj = location.pathname
  locProj = locProj.replace('/projects/', '')
  const project = findProject(locProj)
  
  console.log(project)

  return (
    <main>

        <div>
          <img src={project.image} alt='screenshot'/>
        </div>

        <div>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
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
      
    </main>
  )
}

export default ProjectDetails