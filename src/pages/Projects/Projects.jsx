import { projects } from "../../data/projects";
import ProjectsList from "../../components/ProjectsList/ProjectsList";
import NavBar from "../../components/NavBar/NavBar";
import { getDefaultNormalizer } from "@testing-library/react";

function Projects () {
  return (
    <>
      <h1>Projects</h1>
      <ProjectsList projects={projects}/>
    </>
  )
}

export default Projects