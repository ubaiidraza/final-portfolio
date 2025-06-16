import "./index.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/Navbar";
import Footer from './components/Footer';
import Home from "./pages/Home";
import About from './pages/About';
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import ParticleBackground from './components/ParticleBackground';
import ScrollToTop from "./components/ScrollToTop";




function App() {

  return (
   <Router>
    {/* Makes sure the page start from the top */}
    <ScrollToTop/> 
    {/* Particle Background - Always behind all content */}
    <ParticleBackground />

    <div className="relative min-h-screen z-10">
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>} />
        <Route path='/resume' element={<Resume/>} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer/>
    </div>
   </Router>
  )
}

export default App


