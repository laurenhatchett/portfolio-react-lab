import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home   from './components/Home/Home'
import About from './components/About/About'
import Contact  from './components/Contact/Contact'
import Resume  from './components/Resume/Resume'
import ProjectCard from './components/Project Card/ProjectCard'
import NavBar from './components/NavBar/NavBar'

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
          element={<ProjectCard/>}
        />
    </Routes>
    </>
  );
}

export default App;
