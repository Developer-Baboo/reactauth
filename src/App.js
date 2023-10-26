import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/home';
import Login from './components/login';
import Register from './components/dashboard';

function App() {
  return (
    <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Dashboard</a>
            </li>
          </ul>
      </nav>
      <div className="container" >
        <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
      </div>
    </div>
  );
}
export default App;
