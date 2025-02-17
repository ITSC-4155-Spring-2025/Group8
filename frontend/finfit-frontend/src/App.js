
import {HashRouter as Router, Routes, Route} from 'react-router-dom'
import  { User }  from './pages/User';
import  Leaderboard  from './pages/Leaderboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path = "/User" element = {<User />}/>
        <Route path = "/Leaderboard" element = {<Leaderboard />}/>
      </Routes>
    </Router>
  );
}

export default App;
