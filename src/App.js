import './App.css';
import InternListing from './components/InternListing';
import InternCreate from './components/InternCreate';
import InternEdit from './components/InternEdit';
import InternInfo from './components/InternInfo';

import Home from './components/Home';
import Intern from './components/Intern';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar search={false}/>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={<Home />} /> 
          <Route exact path='/interndetails' element={<Intern />}></Route>
          <Route exact path='/internlist' element={<InternListing />}></Route>
          <Route exact path='/internlist/interncreate' element={<InternCreate />}></Route>
          <Route exact path='/internlist/interninfo/:empid' element={<InternInfo />}></Route>
          <Route exact path='/internlist/internedit/:empid' element={<InternEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
