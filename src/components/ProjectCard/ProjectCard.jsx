import styles from '../ProjectCard/ProjectCard.module.css'




function ProjectCard (props) {
  return (
    <>
      <div className={styles.grid}>
        <div className={styles.card}>

          <div className={styles.cardimage}>
            
              <img 
                src={props.image} 
                alt={props.title}
                className={styles.image}
                />
                <p className={styles.description}>{props.description}</p>
            
          </div>

          <div className={styles.body}>
            <h2>
              {props.title}
            </h2>
          </div>

          <div className={styles.footer}>
            <a href={props.repositoryLink}>
              <button className={styles.button}>GitHub Repository</button>
            </a>
            <a href={props.deploymentLink}>
              <button className={styles.button}>Deployed Site</button>
            </a>
          </div>

        </div>
      </div> 
    </>
  )  
}

export default ProjectCard
