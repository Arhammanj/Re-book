import { useParams, useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import './BookDetail.css';

const BookDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { books } = useApp();
  
  const book = books.find(b => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-detail-container">
        <div className="not-found">
          <h2>📚 Book not found</h2>
          <Link to="/marketplace" className="btn">Back to Marketplace</Link>
        </div>
      </div>
    );
  }

  const discount = Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100);

  return (
    <div className="book-detail-container">
      <div className="book-detail">
        <button onClick={() => navigate(-1)} className="btn-back">
          ← Back
        </button>

        <div className="book-detail-content">
          {/* Image Section */}
          <div className="book-detail-image">
            <img src={book.image} alt={book.title} />
            {book.sold && <div className="sold-overlay">SOLD OUT</div>}
          </div>

          {/* Info Section */}
          <div className="book-detail-info">
            <div className="book-badges">
              <span className="badge badge-category">{book.category}</span>
              <span className="badge badge-condition">{book.condition}</span>
              {!book.sold && <span className="badge badge-discount">{discount}% OFF</span>}
            </div>

            <h1 className="book-detail-title">{book.title}</h1>
            <p className="book-detail-author">by {book.author}</p>

            <div className="book-pricing-detail">
              <div className="current-price">PKR {book.price}</div>
              <div className="original-price">PKR {book.originalPrice}</div>
              <div className="savings">Save PKR {(book.originalPrice - book.price).toFixed(2)}</div>
            </div>

            <div className="book-description">
              <h3>Description</h3>
              <p>{book.description}</p>
            </div>

            <div className="book-details-grid">
              <div className="detail-item">
                <strong>Condition:</strong>
                <span>{book.condition}</span>
              </div>
              <div className="detail-item">
                <strong>Category:</strong>
                <span>{book.category}</span>
              </div>
              <div className="detail-item">
                <strong>Listed Date:</strong>
                <span>{new Date(book.listedDate).toLocaleDateString()}</span>
              </div>
            </div>

            <div className="seller-info">
              <h3>Seller Information</h3>
              <div className="seller-card">
                <div className="seller-avatar">{book.sellerName[0]}</div>
                <div className="seller-details">
                  <p className="seller-name">{book.sellerName}</p>
                  <p className="seller-rating">⭐ 4.8 (12 sales)</p>
                </div>
              </div>
            </div>

            {!book.sold ? (
              <div className="action-buttons">
                <button className="btn btn-primary-large">
                  💬 Contact Seller
                </button>
                <button className="btn btn-secondary-large">
                  ❤️ Save for Later
                </button>
              </div>
            ) : (
              <div className="sold-message">
                This book has been sold. <Link to="/marketplace">Browse more books</Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
