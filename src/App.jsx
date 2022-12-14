import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home   from './pages/Home/Home'
import About from './components/About/About'
import Contact  from './components/Contact/Contact'
import Resume  from './components/Resume/Resume'
import Projects from './pages/Projects/Projects'
import NavBar from './components/NavBar/NavBar'
import Skills from './components/Skills/Skills'

function App() {
  return (
    <>
      <NavBar/>
      <Home/>
      <About />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
    </>
  );
}

export default App;
