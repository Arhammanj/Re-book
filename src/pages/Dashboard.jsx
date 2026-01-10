import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import BookCard from '../components/BookCard';
import { userSubscription } from '../data/subscriptions';
import './Dashboard.css';

const Dashboard = () => {
  const navigate = useNavigate();
  const { isAuthenticated, currentUser, books, donations } = useApp();

  if (!isAuthenticated) {
    return (
      <div className="dashboard-container">
        <div className="auth-required">
          <h2>🔒 Authentication Required</h2>
          <p>Please log in to access your dashboard</p>
          <button onClick={() => navigate('/login')} className="btn btn-primary">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const myBooks = books.filter(book => book.sellerId === currentUser.id);
  const myDonations = donations.filter(d => d.donorName === currentUser.name);
  const activeListings = myBooks.filter(book => !book.sold);
  const soldBooks = myBooks.filter(book => book.sold);

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <div className="welcome-section">
          <h1>Welcome back, {currentUser.name}! 👋</h1>
          <p>Here's what's happening with your account</p>
        </div>
        <div className="quick-actions">
          <Link to="/sell" className="btn btn-action">+ List New Book</Link>
          <Link to="/donate" className="btn btn-action-secondary">💚 Donate Books</Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">📚</div>
          <div className="stat-info">
            <div className="stat-value">{activeListings.length}</div>
            <div className="stat-label">Active Listings</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-info">
            <div className="stat-value">{soldBooks.length}</div>
            <div className="stat-label">Books Sold</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-info">
            <div className="stat-value">${userSubscription.totalRevenue}</div>
            <div className="stat-label">Total Revenue</div>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">🎁</div>
          <div className="stat-info">
            <div className="stat-value">{myDonations.length}</div>
            <div className="stat-label">Books Donated</div>
          </div>
        </div>
      </div>

      {/* Subscription Status */}
      <div className="subscription-status-card">
        <div className="subscription-header">
          <div>
            <h3>Your Subscription</h3>
            <p className="subscription-plan">{currentUser.subscription} Plan</p>
          </div>
          <Link to="/subscription" className="btn-upgrade">
            Upgrade Plan
          </Link>
        </div>
        <div className="subscription-usage">
          <div className="usage-item">
            <span>Listings Used This Month</span>
            <div className="usage-bar-container">
              <div className="usage-bar">
                <div 
                  className="usage-fill" 
                  style={{width: `${(userSubscription.listingsUsed / userSubscription.listingsLimit) * 100}%`}}
                />
              </div>
              <span className="usage-text">
                {userSubscription.listingsUsed}/{userSubscription.listingsLimit}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* My Listings */}
      <div className="dashboard-section">
        <div className="section-header">
          <h2>📖 My Active Listings ({activeListings.length})</h2>
          <Link to="/sell" className="btn-link">+ Add New</Link>
        </div>
        
        {activeListings.length > 0 ? (
          <div className="books-grid">
            {activeListings.map(book => (
              <div key={book.id} className="book-item">
                <BookCard book={book} />
                <div className="book-actions">
                  <button className="btn-action-small">Edit</button>
                  <button className="btn-action-small btn-danger">Remove</button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>📭 You don't have any active listings</p>
            <Link to="/sell" className="btn btn-primary-small">List Your First Book</Link>
          </div>
        )}
      </div>

      {/* Sold Books */}
      {soldBooks.length > 0 && (
        <div className="dashboard-section">
          <div className="section-header">
            <h2>✅ Sold Books ({soldBooks.length})</h2>
          </div>
          <div className="books-grid">
            {soldBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
        </div>
      )}

      {/* My Donations */}
      <div className="dashboard-section">
        <div className="section-header">
          <h2>💚 My Donations ({myDonations.length})</h2>
          <Link to="/donate" className="btn-link">+ Donate More</Link>
        </div>
        
        {myDonations.length > 0 ? (
          <div className="donations-list">
            {myDonations.map(donation => (
              <div key={donation.id} className="donation-card">
                <div className="donation-header">
                  <div>
                    <h4>{donation.ngoName}</h4>
                    <p className="donation-date">{new Date(donation.date).toLocaleDateString()}</p>
                  </div>
                  <span className={`status-badge status-${donation.status.toLowerCase().replace(' ', '-')}`}>
                    {donation.status}
                  </span>
                </div>
                <div className="donation-details">
                  <p><strong>Books:</strong> {donation.books.join(', ')}</p>
                  <p><strong>Tracking ID:</strong> {donation.trackingId}</p>
                  <p><strong>Estimated Value:</strong> ${donation.amount}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <p>💙 You haven't made any donations yet</p>
            <Link to="/donate" className="btn btn-primary-small">Make Your First Donation</Link>
          </div>
        )}
      </div>

      {/* Account Info */}
      <div className="dashboard-section">
        <div className="section-header">
          <h2>👤 Account Information</h2>
        </div>
        <div className="account-info-card">
          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">Name:</span>
              <span className="info-value">{currentUser.name}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Email:</span>
              <span className="info-value">{currentUser.email}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Location:</span>
              <span className="info-value">{currentUser.location}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Phone:</span>
              <span className="info-value">{currentUser.phone}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Member Since:</span>
              <span className="info-value">{new Date(currentUser.joinedDate).toLocaleDateString()}</span>
            </div>
            <div className="info-item">
              <span className="info-label">Rating:</span>
              <span className="info-value">⭐ {currentUser.rating}/5.0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
