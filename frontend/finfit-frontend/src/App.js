import Home from "./pages/Home";
import Login from "./pages/Login";
import User from "./pages/User";
import Leaderboard from "./pages/Leaderboard";
import Games from "./pages/Games";
import Learning from "./pages/Learning";
import Trivia from "./pages/Trivia";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Bingo from "./pages/Bingo";
import Memory from "./pages/Memory";
import Savingsprint from "./pages/Savings-sprint";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/User" element={<User />} />
          <Route path="/Leaderboard" element={<Leaderboard />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Learning" element={<Learning />} />
          <Route path="/Games/Trivia" element={<Trivia />} />
          <Route path="/Games/bingo" element={<Bingo />} />
          <Route path="/Games/Memory" element={<Memory />} />
          <Route path="/Games/Savings-sprint" element={<Savingsprint />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
