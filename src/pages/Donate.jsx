import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { ngos } from '../data/ngos';
import './Donate.css';

const Donate = () => {
  const navigate = useNavigate();
  const { isAuthenticated, currentUser, addDonation } = useApp();
  const [formData, setFormData] = useState({
    donorName: currentUser?.name || '',
    email: currentUser?.email || '',
    ngoId: ngos[0].id,
    bookTitles: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const selectedNgo = ngos.find(n => n.id === parseInt(formData.ngoId));
    const booksList = formData.bookTitles.split(',').map(b => b.trim()).filter(b => b);
    
    const donation = {
      donorName: formData.donorName || 'Anonymous',
      ngoId: selectedNgo.id,
      ngoName: selectedNgo.name,
      amount: booksList.length * 10, // Estimated value
      books: booksList,
    };
    
    addDonation(donation);
    setSuccess(true);
    
    setTimeout(() => {
      navigate('/ngo');
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (success) {
    return (
      <div className="donate-container">
        <div className="success-message-box">
          <h2>🎉 Donation Submitted Successfully!</h2>
          <p>Thank you for your generosity!</p>
          <p>Your donation will make a real difference in someone's life.</p>
          <p>Redirecting to NGO page...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="donate-container">
      <div className="donate-header">
        <h1>📚 Donate Books to NGOs</h1>
        <p>Help spread education and literacy to those who need it most</p>
      </div>

      <div className="donate-content">
        <form onSubmit={handleSubmit} className="donate-form">
          <h2>Donation Form</h2>

          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="donorName"
              value={formData.donorName}
              onChange={handleChange}
              placeholder="Leave blank to donate anonymously"
            />
            <small>Optional - Leave blank for anonymous donation</small>
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              required
            />
            <small>We'll send you tracking information</small>
          </div>

          <div className="form-group">
            <label>Select NGO Partner *</label>
            <select
              name="ngoId"
              value={formData.ngoId}
              onChange={handleChange}
              required
            >
              {ngos.map(ngo => (
                <option key={ngo.id} value={ngo.id}>
                  {ngo.logo} {ngo.name} - {ngo.location}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label>Book Titles *</label>
            <textarea
              name="bookTitles"
              value={formData.bookTitles}
              onChange={handleChange}
              placeholder="Enter book titles separated by commas (e.g., Harry Potter, The Hobbit, 1984)"
              rows="4"
              required
            />
            <small>Separate multiple books with commas</small>
          </div>

          <div className="form-group">
            <label>Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Add a personal message for the recipients..."
              rows="3"
            />
          </div>

          <div className="donation-summary">
            <h3>Donation Summary</h3>
            <p>
              <strong>Books to donate:</strong>{' '}
              {formData.bookTitles ? formData.bookTitles.split(',').filter(b => b.trim()).length : 0}
            </p>
            <p>
              <strong>Selected NGO:</strong>{' '}
              {ngos.find(n => n.id === parseInt(formData.ngoId))?.name}
            </p>
          </div>

          <button type="submit" className="btn btn-submit">
            Submit Donation
          </button>
        </form>

        <aside className="donate-info">
          <div className="info-card">
            <h3>🎯 How It Works</h3>
            <ol>
              <li>Fill out the donation form</li>
              <li>We'll coordinate book pickup or drop-off</li>
              <li>Receive tracking ID via email</li>
              <li>Track your donation's journey</li>
              <li>Get impact updates from the NGO</li>
            </ol>
          </div>

          <div className="info-card">
            <h3>📋 What We Accept</h3>
            <ul>
              <li>✅ Educational textbooks</li>
              <li>✅ Fiction and literature</li>
              <li>✅ Children's books</li>
              <li>✅ Reference materials</li>
              <li>❌ Damaged or moldy books</li>
              <li>❌ Adult content</li>
            </ul>
          </div>

          <div className="info-card impact-card">
            <h3>💚 Your Impact</h3>
            <p>Every book you donate can:</p>
            <ul>
              <li>📖 Educate a child</li>
              <li>🎓 Help someone pass exams</li>
              <li>💡 Inspire dreams and aspirations</li>
              <li>🌍 Break cycles of poverty</li>
              <li>🌱 Save the environment</li>
            </ul>
          </div>

          {!isAuthenticated && (
            <div className="info-card auth-prompt">
              <h3>🔑 Create Account</h3>
              <p>Sign up to track all your donations and see your impact over time!</p>
              <button 
                onClick={() => navigate('/register')}
                className="btn btn-outline"
              >
                Create Free Account
              </button>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
};

export default Donate;
