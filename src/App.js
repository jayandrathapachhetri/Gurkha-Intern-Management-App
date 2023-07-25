import './App.css';
import Intern from './components/Intern';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar search={false}/>
      {/* <h2>Gurkha Intern Management App</h2> */}
      <Intern/>
    </div>
  );
}

export default App;
