import './App.css'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Projects from './pages/Projects/Projects'
import Skills from './pages/Skills/Skills'
// import Resume from './pages/Resume/Resume'
import Contact from './pages/Contact/Contact'





function App() {
  return (
    <div className ='App'>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      {/* <Resume /> */}
      <Contact />

    
      
    </div>
  )
}

export default App
