import "./App.scss";
import Header from "./components/header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/about/About";
import "bootstrap/dist/css/bootstrap.min.css";
import Subskills from "./components/subskills/Subskills";
import Projects from "./components/projects/projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Subskills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
