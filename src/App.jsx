import "./App.css";
import Login from "./pages/login";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Register from './pages/register';

function App() {
  return (
    <div className="h-full">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
