import './App.css'
import { Routes, Route } from 'react-router-dom'
import  { Home }  from './pages/Home/Home';
import { About} from './pages/About/About.jsx'
import { Contact } from './pages/Contact/Contact.jsx'
import { Resume } from './pages/Resume/Resume.jsx'
import { Projects } from './pages/Projects/Projects.jsx'

function App() {
  return (
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
    </Routes>
  );
}

export default App;
