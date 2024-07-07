import Navbar from './Navbar';
import Home from './Home';
import Foot from './Foot';
import LogIn from './Login'
import Build from './Build'
import Contact from './Contact'
import LatestNews from './News';
import Shop from './Shop';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
     <div className="content">
      <Routes>
        <Route path='/'element={<Home/>} />
        <Route path="/LogIn" element={<LogIn />} />
        <Route path="/Build" element={<Build />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/LatestNews" element={<LatestNews />} />
        <Route path="/Shop" element={<Shop />} />

      </Routes>
     </div>
     <Foot />
    </div>
    </Router>
  );
}

export default App;
