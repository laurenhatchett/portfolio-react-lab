import { Link } from 'react-router-dom'
import hyphenateWords from '../../utilities/hyphenateWords'
import styles from '../ProjectPreview/ProjectPreview.module.css'

const ProjectPreview = (props) => {
  const path = hyphenateWords(props.title)
  console.log(path)
  return (
    <>
      <Link to={path}>
        <div className={styles.projectpreview}>
          <img 
          src={props.image} 
          alt={props.title}
          />
          {props.title}
			    <button>
            Learn more
          </button>
        </div>
      </Link>
    </>
  )  
}

export default ProjectPreview