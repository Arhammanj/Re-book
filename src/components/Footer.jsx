import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>📚 ReBook</h3>
          <p>Giving books a second life, one page at a time.</p>
          <p className="footer-tagline">Buy • Sell • Donate</p>
        </div>
        
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/marketplace">Marketplace</Link></li>
            <li><Link to="/sell">Sell Books</Link></li>
            <li><Link to="/ngo">NGO Partners</Link></li>
            <li><Link to="/donate">Donate Books</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>For Sellers</h4>
          <ul>
            <li><Link to="/subscription">Subscription Plans</Link></li>
            <li><Link to="/dashboard">Seller Dashboard</Link></li>
            <li><Link to="/seller-guide">Seller Guide</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">📘 Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">🐦 Twitter</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📷 Instagram</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">💼 LinkedIn</a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 ReBook. All rights reserved. | Made with 💜 for book lovers</p>
      </div>
    </footer>
  );
};

export default Footer;
