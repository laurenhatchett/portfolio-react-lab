import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home   from './pages/Home/Home'
import About from './components/About/About'
import Contact  from './components/Contact/Contact'
import Resume  from './components/Resume/Resume'
import Projects from './pages/Projects/Projects'
import NavBar from './components/NavBar/NavBar'
import ProjectDetails from './pages/ProjectDetails/ProjectDetails'
import Skills from './components/Skills/Skills'

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
          path='/projects'
          element={<Projects/>}
        />
        <Route 
          path='/projects/:projectDetails'
          element={<ProjectDetails/>}
        />
        <Route 
          path='/skills'
          element={<Skills/>}
        />
        <Route 
          path='/resume'
          element={<Resume/>}
        />
        <Route
          path='/contact'
          element={<Contact/>}
        />
    </Routes>
    </>
  );
}

export default App;
