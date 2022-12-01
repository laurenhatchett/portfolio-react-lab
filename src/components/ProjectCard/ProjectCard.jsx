import { useState } from 'react'
import styles from '../ProjectCard/ProjectCard.module.css'
import Modal from '../Modal/Modal'



function ProjectCard (props) {
  const [openModal, setOpenModal] = useState(false)
  

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
            
          </div>

          <div className={styles.body}>
            <h2>
              {props.title}
            </h2>
          </div>

          <div className={styles.footer}>
              <button 
                className={styles.button}
                onClick={() => {
                  setOpenModal(true)
                }}
              >
                Learn More
              </button>
              {openModal && <Modal closeModal={setOpenModal} />}
          </div>

        </div>
      </div> 
    </>
  )  
}

export default ProjectCard
