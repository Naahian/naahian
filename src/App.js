import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import Background from './components/background';
import ExperienceSection from './components/experience';

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
      <Skills />
      <ExperienceSection />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
