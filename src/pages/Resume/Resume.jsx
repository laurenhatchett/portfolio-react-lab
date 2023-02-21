import { Link } from 'react-router-dom'
import styles from '../Resume/Resume.module.css'
import LHResume from '../../files/LHResume.pdf'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`


function Resume() {
  return (
    <>
  
        
    <Link to='../../files/LHResume.pdf'>
    </Link>

    <a href='../../files/LHResume.pdf' download='lauren-hatchett-resume'>
      Click to Download
    </a>
        
      
      
    
    
    <div className={styles.resume} id='resume'>
      <h1>Resume</h1>
        <Document
          file={LHResume}
        >
          <Page pageIndex={0}/>
        </Document>
        
        <div className={styles.description}>
      
        </div>
    
    </div>

    </>
  ) 
}

export default Resume