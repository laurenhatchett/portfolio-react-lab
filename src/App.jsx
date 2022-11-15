import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home   from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Contact  from './pages/Contact/Contact.jsx'
import Resume  from './pages/Resume/Resume.jsx'
import Projects from './pages/Projects/Projects.jsx'
import NavBar from './components/NavBar/NavBar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails.jsx'

function App() {
  return (
    <>
      <NavBar/>
      <Routes>
        <Route
          path='/'
          element={<Home/>}
        />
        <Route 
          path='/about'
          element={<About/>}
        />
        <Route
          path='/contact'
          element={<Contact/>}
        />
        <Route 
          path='/resume'
          element={<Resume/>}
        />
        <Route 
          path='/projects'
          element={<Projects/>}
        />
        <Route 
          path='/projects/ProjectDetails'
          element={<ProjectDetails/>}
        />
      </Routes>
    </>
  );
}

export default App;
