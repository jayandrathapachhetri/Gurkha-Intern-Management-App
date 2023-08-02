import './App.css';
// import './style.css';
import InternListing from './components/InternListing';
import InternCreate from './components/InternCreate';
import InternEdit from './components/InternEdit';
import InternInfo from './components/InternInfo';

import Home from './components/Home';
import About from './components/About';
import Intern from './components/Intern';
// import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
// import Register from './components/Register';
import LogIn from './components/LogIn';
import Protected from './components/Protected';
// import Footer from './components/Footer';
// import LogIn from './components/LogIn';
// import Register from './components/Register';

function App() {
  return (
    <div className="App">
      
      {/* <Register /> */}
      <Router>
      {/* <Navbar search={false}/> */}
      {/* <Protected Component ={EmpListing}/>} /> */}
        <Routes>
          {/* <Route exact path='/register' element={<Register />}> </Route> */}
          <Route exact path='/login' element={<LogIn />}> </Route>
          <Route exact path='/' element={<Home />} > </Route>
          <Route exact path='/about' element={<About />} > </Route>
          <Route exact path='/interndetails' element={<Protected Component = {Intern}/>}></Route>
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
