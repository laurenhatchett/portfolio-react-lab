import { Link } from 'react-router-dom'
import hyphenateWords from '../../utilities/hyphenateWords'
import styles from '../ProjectPreview/ProjectPreview.module.css'

const ProjectPreview = (props) => {
  const path = hyphenateWords(props.title)
  console.log(path)
  return (
    <>
      <article className={styles.projectpreview}>
        <img 
          src={props.image} 
          alt={props.title}
        />

        <section>
          <h3>
            {props.title}
          </h3>
          <Link to={path}>
			      <button>
              Learn more
            </button>
          </Link>
      </section>
    </article>
    </>
  )  
}

export default ProjectPreview