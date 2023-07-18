import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Age from "./components/Age";

function App() {
  const age = 21;
  const name = "Weeraphong"
  return (
    <div className="App">
      <div>
        <p>
          <a href="/home" end>Home</a>
        </p>
        <p>
          <a href="/login">Login</a>
        </p>
        <p>
          <a href={`/age/${age}/${name}`}>Age</a>
        </p>
      </div>
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home/>}  />
            <Route path="/home" element={<Home/>}  />
            <Route path="/login" element={<Login/>}/>
            <Route path="/age/:myage/:myname" element={<Age/>}/>
          </Routes>
        </Router>
      </div>
    </div>
    // <NavLink to="/contact" className={({ isActive }) => isActive ? activeClassName : undefind}>Contact</NavLink>
  );
}

export default App;
