import React from 'react'
import styles from '../Modal/Modal.module.css'


function Modal({closeModal}) {
  return (
    <div className={styles.modalBackgound}>
      <div className={styles.modalContainer}>
        <div className={styles.titleCloseButton}>
          <button  
            onClick={() => {
              closeModal(false)
            }}
          >
            X
          </button>
        </div>

        <div className={styles.title}>
          <h1>Title</h1>
        </div>

        <div className={styles.body}>
          <p>Information</p>
        
        </div>

        <div className={styles.footer}>
          <button 
          onClick={() => {
            closeModal(false)
            }}
          >
            Close
          </button>
        </div> 
      </div>
    </div>
  )
}

export default Modal