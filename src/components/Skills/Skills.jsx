import styles from '../Skills/Skills.module.css'
import HTML5 from '../../assets/HTML5.png'
import CSS3 from '../../assets/CSS3.png'
import JavaScript from '../../assets/JavaScript.png'
import Git from '../../assets/Git.png'
import Express from '../../assets/Express.png'
import NodeJS from '../../assets/NodeJS.png'
import MongoDB from '../../assets/MongoDB.png'
import React from '../../assets/React.png'
import Python from '../../assets/Python.png'
import Django from '../../assets/Django.png'

function Skills () {
  return (
    <div className={styles.skillsContainer}>

      <div className={styles.HTML}>
        <img src={HTML5} alt='HTML5 icon'/>
        <p>HTML5</p>
      </div>

      <div className={styles.CSS3}>
        <img src={CSS3} alt='CSS3 icon'/>
        <p>CSS3</p>
      </div>

      <div className={styles.JavaScript}>
        <img src={JavaScript} alt='JavaScript icon'/>
        <p>JavaScript</p>
      </div>

      <div className={styles.Git}>
        <img src={Git} alt='Git icon'/>
        <p>Git</p>
      </div>

      <div className={styles.Express}>
        <img src={Express} alt='Express icon'/>
        <p>Express</p>
      </div>

      <div className={styles.NodeJS}>
        <img src={NodeJS} alt='NodeJS icon'/>
        <p>Node.js</p>
      </div>

      <div className={styles.MongoDB}>
        <img src={MongoDB} alt='MongoDB icon'/>
        <p>MongoDB</p>
      </div>

      <div className={styles.React}>
        <img src={React} alt='React icon'/>
        <p>React</p>
      </div>

      <div className={styles.Python}>
        <img src={Python} alt='Python icon'/>
        <p>Python</p>
      </div>

      <div className={styles.Django}>
        <img src={Django} alt='Django icon'/>
        <p>Django</p>
      </div>

    </div>

  )
}

export default Skills