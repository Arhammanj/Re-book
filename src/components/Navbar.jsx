import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import './Navbar.css';

const Navbar = () => {
  const { isAuthenticated, currentUser, logout } = useApp();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          📚 ReBook
        </Link>
        
        <ul className="navbar-menu">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/marketplace">Marketplace</Link></li>
          <li><Link to="/ngo">NGO</Link></li>
          <li><Link to="/donate">Donate</Link></li>
          
          {isAuthenticated ? (
            <>
              <li><Link to="/sell">Sell Books</Link></li>
              <li><Link to="/subscription">Subscription</Link></li>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li className="navbar-user">
                <span>👤 {currentUser?.name}</span>
                <button onClick={logout} className="btn-logout">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li><Link to="/login" className="btn-login">Login</Link></li>
              <li><Link to="/register" className="btn-register">Register</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
