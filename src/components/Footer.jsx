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
            <li><a href="/marketplace">Marketplace</a></li>
            <li><a href="/sell">Sell Books</a></li>
            <li><a href="/ngo">NGO Partners</a></li>
            <li><a href="/donate">Donate Books</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>For Sellers</h4>
          <ul>
            <li><a href="/subscription">Subscription Plans</a></li>
            <li><a href="/dashboard">Seller Dashboard</a></li>
            <li><a href="#">Seller Guide</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <div className="social-links">
            <a href="#">📘 Facebook</a>
            <a href="#">🐦 Twitter</a>
            <a href="#">📷 Instagram</a>
            <a href="#">💼 LinkedIn</a>
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
