import { Home, User, Code2, Briefcase, Clock, Mail } from 'lucide-react';
import { NavBar } from '@/components/ui/tubelight-navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ShaderBackground from './components/ShaderBackground';

const navItems = [
  { name: 'Home', url: '#home', icon: Home },
  { name: 'About', url: '#about', icon: User },
  { name: 'Skills', url: '#skills', icon: Code2 },
  { name: 'Projects', url: '#projects', icon: Briefcase },
  { name: 'Experience', url: '#experience', icon: Clock },
  { name: 'Contact', url: '#contact', icon: Mail },
];

function App() {
  return (
    <div className="App relative">
      <ShaderBackground />
      <div className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </div>

      {/* Tubelight bottom navbar */}
      <NavBar items={navItems} />
    </div>
  );
}

export default App;
