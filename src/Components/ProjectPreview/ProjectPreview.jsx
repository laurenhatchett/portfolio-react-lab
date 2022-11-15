import { Link } from 'react-router-dom'
import hyphenateWords from '../../utilities/hyphenateWords'

const ProjectPreview = (props) => {
  const path = hyphenateWords(props.title)
  console.log(path)
  return (
    <>
      <article>
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