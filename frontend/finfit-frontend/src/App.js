import Home from "./pages/Home";
import Login from "./pages/Login";
import  { User }  from './pages/User';
import  Leaderboard  from './pages/Leaderboard';
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
        </Routes>
      </Router>
    </div>
  )
  export default App;
}


