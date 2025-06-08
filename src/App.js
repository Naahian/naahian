import './App.css';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Skills from './components/skills';
import Projects from './components/projects';
import Footer from './components/footer';
import Background from './components/background';

function App() {
  return (
    <div className="App">
      <Background />
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
