import { projects } from "../data/projects"
import hyphenateWords from "./hyphenateWords"

function findProject(name) {
  const filteredProjects = projects.filter(project => {
    const currentName = hyphenateWords(project.title)
    return currentName === name
  })
  const result = filteredProjects[0]
  return result
}


export default findProject