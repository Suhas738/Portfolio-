import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SKills from "./components/SKills";
import Work from "./components/Work";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <About/>
      <SKills/>
      <Work/>
      <Contact/>
    </div>
  );
}

export default App;
