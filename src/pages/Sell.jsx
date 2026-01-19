import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { categories } from '../data/books';
import './Sell.css';

const Sell = () => {
  const navigate = useNavigate();
  const { isAuthenticated, addBook, currentUser } = useApp();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: 'Fiction',
    condition: 'Good',
    price: '',
    originalPrice: '',
    description: '',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400'
  });
  const [success, setSuccess] = useState(false);

  if (!isAuthenticated) {
    return (
      <div className="sell-container">
        <div className="auth-required">
          <h2>🔒 Authentication Required</h2>
          <p>Please log in to sell books on ReBook</p>
          <button onClick={() => navigate('/login')} className="btn btn-primary">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (parseFloat(formData.price) >= parseFloat(formData.originalPrice)) {
      alert('Resale price must be less than original price');
      return;
    }
    
    addBook(formData);
    setSuccess(true);
    
    setTimeout(() => {
      navigate('/dashboard');
    }, 2000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (success) {
    return (
      <div className="sell-container">
        <div className="success-message-box">
          <h2>✅ Book Listed Successfully!</h2>
          <p>Your book has been added to the marketplace</p>
          <p>Redirecting to dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="sell-container">
      <div className="sell-header">
        <h1>📝 List Your Book for Sale</h1>
        <p>Fill in the details below to sell your used book</p>
      </div>

      <div className="sell-content">
        <form onSubmit={handleSubmit} className="sell-form">
          <div className="form-row">
            <div className="form-group">
              <label>Book Title *</label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Enter book title"
                required
              />
            </div>

            <div className="form-group">
              <label>Author *</label>
              <input
                type="text"
                name="author"
                value={formData.author}
                onChange={handleChange}
                placeholder="Enter author name"
                required
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                {categories.filter(c => c !== 'All Categories').map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label>Condition *</label>
              <select
                name="condition"
                value={formData.condition}
                onChange={handleChange}
                required
              >
                <option value="Like New">Like New</option>
                <option value="Good">Good</option>
                <option value="Fair">Fair</option>
                <option value="Poor">Poor</option>
              </select>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>Original Price (PKR) *</label>
              <input
                type="number"
                name="originalPrice"
                value={formData.originalPrice}
                onChange={handleChange}
                placeholder="2000"
                step="0.01"
                min="0.01"
                required
              />
            </div>

            <div className="form-group">
              <label>Your Selling Price (PKR) *</label>
              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="1200"
                step="0.01"
                min="0.01"
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Description *</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Describe the book condition, any markings, highlights, etc."
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label>Image URL</label>
            <input
              type="url"
              name="image"
              value={formData.image}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
            />
            <small>Leave default or paste a valid image URL</small>
          </div>

          <div className="pricing-summary">
            {formData.price && formData.originalPrice && (
              <>
                <p>
                  Discount: <strong>
                    {Math.round(((parseFloat(formData.originalPrice) - parseFloat(formData.price)) / 
                    parseFloat(formData.originalPrice)) * 100)}%
                  </strong>
                </p>
                <p>
                  You Save Buyers: <strong>
                    PKR {(parseFloat(formData.originalPrice) - parseFloat(formData.price)).toFixed(2)}
                  </strong>
                </p>
              </>
            )}
          </div>

          <button type="submit" className="btn btn-submit">
            List Book for Sale
          </button>
        </form>

        <aside className="sell-tips">
          <h3>💡 Tips for Selling</h3>
          <ul>
            <li>✅ Use clear, accurate descriptions</li>
            <li>✅ Price competitively based on condition</li>
            <li>✅ Be honest about any damage or markings</li>
            <li>✅ Respond quickly to buyer inquiries</li>
            <li>✅ Package books securely for shipping</li>
          </ul>

          <div className="subscription-promo">
            <h4>🚀 Upgrade Your Plan</h4>
            <p>Current: <strong>{currentUser?.subscription || 'Basic'}</strong></p>
            <p>List more books and reduce fees</p>
            <button 
              onClick={() => navigate('/subscription')}
              className="btn btn-promo"
            >
              View Plans
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Sell;
