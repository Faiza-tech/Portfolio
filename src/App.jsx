import Navbar from './pages/Navbar'
import Intro from './pages/Intro'
import About from './pages/About'
import Project from './pages/Project'
import Contact from './pages/Contact'
import Footer from './pages/Footer'
import '../src/index.css'

function App() {
 

  return (
    <>
      <div className="App">

      <Navbar/>
      <Intro/>
      <About/>
      <Project/>
      <Contact/>
      <Footer/>
      
      </div>
    </>
  )
}

export default App
