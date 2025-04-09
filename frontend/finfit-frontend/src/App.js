
import Home from "./pages/Home";
import Login from "./pages/Login";
import { User }  from './pages/User';
import Leaderboard  from './pages/Leaderboard';
import Games from "./pages/Games";
import Learning from "./pages/Learning";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path = "/User" element = {<User />}/>
          <Route path = "/Leaderboard" element = {<Leaderboard />}/>
          <Route path="/Games" element = {<Games/>}/>
          <Route path="/Learning" element = {<Learning/>}/>
        </Routes>
      </Router>
    </div>
  )
}
export default App;


