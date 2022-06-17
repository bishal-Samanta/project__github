import { Route , Routes } from "react-router-dom";


import './App.css';
import { Home } from "./Components/Home";
import { Login } from './Components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exect path="/" element={ < Login/> } />
        <Route exect path="/home" element={ <Home/> } />
      </Routes>
    </div>
  );
}

export default App;
