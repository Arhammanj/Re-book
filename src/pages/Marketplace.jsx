import { useState } from 'react';
import { useApp } from '../context/AppContext';
import BookCard from '../components/BookCard';
import { categories } from '../data/books';
import './Marketplace.css';

const Marketplace = () => {
  const { books } = useApp();
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('newest');

  // Filter books
  let filteredBooks = books.filter(book => !book.sold);

  if (selectedCategory !== 'All Categories') {
    filteredBooks = filteredBooks.filter(book => book.category === selectedCategory);
  }

  if (searchTerm) {
    filteredBooks = filteredBooks.filter(book =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  // Sort books
  filteredBooks = [...filteredBooks].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'newest':
        return new Date(b.listedDate) - new Date(a.listedDate);
      case 'oldest':
        return new Date(a.listedDate) - new Date(b.listedDate);
      default:
        return 0;
    }
  });

  return (
    <div className="marketplace">
      <div className="marketplace-header">
        <h1>📖 Book Marketplace</h1>
        <p>Discover your next great read at amazing prices</p>
      </div>

      <div className="marketplace-container">
        {/* Filters Sidebar */}
        <aside className="marketplace-sidebar">
          <div className="filter-section">
            <h3>Search</h3>
            <input
              type="text"
              placeholder="Search by title or author..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="filter-section">
            <h3>Categories</h3>
            <div className="category-list">
              {categories.map(category => (
                <button
                  key={category}
                  className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="filter-section">
            <h3>Sort By</h3>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="sort-select"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </aside>

        {/* Books Grid */}
        <main className="marketplace-main">
          <div className="results-header">
            <p>{filteredBooks.length} books found</p>
          </div>

          {filteredBooks.length > 0 ? (
            <div className="books-grid">
              {filteredBooks.map(book => (
                <BookCard key={book.id} book={book} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <p>😕 No books found matching your criteria</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All Categories');
                }}
                className="btn-reset"
              >
                Reset Filters
              </button>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Marketplace;
