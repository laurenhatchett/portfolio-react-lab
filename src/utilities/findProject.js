import { projects } from "../data/projects"
import hyphenateWords from "./hyphenateWords"

const findProject = (name) => {
  const project = projects.find(({title}) => {
    return hyphenateWords(title) === name
  })
  return project
}


export default findProject