import { Link } from 'react-router-dom';
import './BookCard.css';

const BookCard = ({ book, showActions = true }) => {
  return (
    <div className="book-card">
      <Link to={`/book/${book.id}`} className="book-card-link">
        <div className="book-image-container">
          <img src={book.image} alt={book.title} className="book-image" />
          {book.sold && <div className="sold-badge">SOLD</div>}
          {!book.sold && (
            <div className="discount-badge">
              {Math.round(((book.originalPrice - book.price) / book.originalPrice) * 100)}% OFF
            </div>
          )}
        </div>
        
        <div className="book-info">
          <h3 className="book-title">{book.title}</h3>
          <p className="book-author">by {book.author}</p>
          
          <div className="book-details">
            <span className="book-category">{book.category}</span>
            <span className="book-condition">{book.condition}</span>
          </div>
          
          <div className="book-pricing">
            <span className="book-price">PKR {book.price}</span>
            <span className="book-original-price">PKR {book.originalPrice}</span>
          </div>
          
          <p className="book-seller">Seller: {book.sellerName}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
