import './App.css';
import InternListing from './components/InternListing';
import InternCreate from './components/InternCreate';
import InternEdit from './components/InternEdit';
import InternInfo from './components/InternInfo';

import Home from './components/Home';
import About from './components/About';
import Intern from './components/Intern';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LogIn from './components/LogIn';
import Register from './components/Register';
import Protected from './components/Protected';
import Attadance from './components/Attadance';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Routes>
          <Route exact path='/login' element={<LogIn />}> </Route>
          <Route exact path='/register' element={<Register />}> </Route>
          <Route exact path='/' element={<Home />} > </Route>
          <Route exact path='/about' element={<About />} > </Route>
          <Route exact path='/interndetails' element={<Protected Component = {Intern}/>}></Route>
          <Route exact path='/attadance' element={<Protected Component = {Attadance}/>}></Route>
          <Route exact path='/internlist' element={<Protected Component = {InternListing} />}></Route>
          <Route exact path='/internlist/interncreate' element={<InternCreate />}></Route>
          <Route exact path='/internlist/interninfo/:empid' element={<InternInfo />}></Route>
          <Route exact path='/internlist/internedit/:empid' element={<InternEdit />}></Route>
        </Routes>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
