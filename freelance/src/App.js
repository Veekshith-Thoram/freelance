import './App.css';
// import { BrowserRouter } from "react-router-dom";
import TopHome from './Components/TopHome';
import Technologies from './Components/Technologies';
import Trending from './Components/Trending.js';
import Offers from './Components/Offers';
import Features from './Components/Features';
import Contact from './Components/Contact';
import About from './Components/About';

function App() {
  return (
    <div className='App'>
      <TopHome />
      <Technologies />
      <Trending />
      <Offers />
      <Features />
      <Contact />
      <About />
    </div>
  );
}

export default App;
