import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Portfolio from "./Components/Portfolio";
import Skills from "./Components/Skills";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Contact />
      <Portfolio />
      <Skills />
    </div>
  );
}

export default App;
