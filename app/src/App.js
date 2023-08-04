
import './App.css';
import Carousel from './components/Carousel';
import Entry from './pages/Entry';
import AboutMe from './pages/AboutMe'
import {Route,Routes,BrowserRouter as Router} from 'react-router-dom'
import Home from './pages/Home';
import style from './styles'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Entry/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/about-me"element={<AboutMe/>}/>
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;
