import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Testimonials from './Testinomial';
import Skills from './Skills';
import Contact from './Contact';
import Projects from './Projects';
import About from './About';

function App() {
  return (
    <main>
      <Navbar></Navbar>
      <About></About>
      <Projects></Projects>
      <Skills></Skills>
      <Testimonials></Testimonials>
      <Contact></Contact>
    </main>


  );
}

export default App;
