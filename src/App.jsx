import "./App.css";
import Login from "./pages/login";
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import Register from './pages/register';
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <div className="h-full w-full">
      <Router>
        <Routes>
          <Route path="/" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
