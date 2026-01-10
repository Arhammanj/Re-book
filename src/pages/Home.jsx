import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { useEffect } from 'react';
import BookCard from '../components/BookCard';
import { impactStats } from '../data/ngos';
import './Home.css';

const Home = () => {
  const { books } = useApp();
  const featuredBooks = books.filter(book => !book.sold);

  useEffect(() => {
    const handleScroll = () => {
      const hero = document.querySelector('.hero');
      if (hero) {
        const scrolled = window.scrollY;
        const heroHeight = hero.offsetHeight;
        const scrollPercent = Math.min(scrolled / heroHeight, 1);
        
        // Change opacity of overlay based on scroll
        hero.style.setProperty('--scroll-opacity', scrollPercent * 0.5);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background-overlay"></div>
        <div className="floating-books">
          <div className="book-icon book-1">📖</div>
          <div className="book-icon book-2">📚</div>
          <div className="book-icon book-3">📕</div>
          <div className="book-icon book-4">📗</div>
          <div className="book-icon book-5">📘</div>
          <div className="book-icon book-6">📙</div>
        </div>
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-icon">⭐</span>
            <span className="badge-text">Trusted Community</span>
          </div>
          <h1 className="hero-title">
            <span className="title-line">Your Story Begins</span>
            <span className="title-highlight">With ReBook</span>
          </h1>
          <p className="hero-subtitle">
            Discover a world where every book finds a new reader. Buy pre-loved treasures, 
            sell your collection, or donate to those who need knowledge most.
          </p>
          <div className="hero-buttons">
            <Link to="/marketplace" className="btn btn-primary">
              <span className="btn-icon">📚</span>
              Browse Books
              <span className="btn-arrow">→</span>
            </Link>
            <Link to="/sell" className="btn btn-secondary">
              <span className="btn-icon">💰</span>
              Sell Your Books
            </Link>
          </div>
          <div className="hero-features">
            <div className="mini-feature">
              <span className="mini-icon">✓</span>
              <span>Affordable Prices</span>
            </div>
            <div className="mini-feature">
              <span className="mini-icon">✓</span>
              <span>Easy Shipping</span>
            </div>
            <div className="mini-feature">
              <span className="mini-icon">✓</span>
              <span>Eco-Friendly</span>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Ribbon Banner */}
      <div className="ribbon-banner">
        <div className="ribbon-content">
          <span className="ribbon-text">
            ✨ New Year Sale: Up to 70% OFF on Selected Books! 🎉 Free Shipping on Orders Over $30 📚 Donate & Make a Difference 🌟 Join 10,000+ Happy Readers! 💫
          </span>
          <span className="ribbon-text">
            ✨ New Year Sale: Up to 70% OFF on Selected Books! 🎉 Free Shipping on Orders Over $30 📚 Donate & Make a Difference 🌟 Join 10,000+ Happy Readers! 💫
          </span>
        </div>
      </div>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose ReBook?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">💰</div>
              <h3>Best Prices</h3>
              <p>Save up to 70% on books compared to new prices</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌱</div>
              <h3>Eco-Friendly</h3>
              <p>Reduce waste and save trees by buying used books</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🤝</div>
              <h3>Support NGOs</h3>
              <p>Donate books to help underprivileged communities</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">⭐</div>
              <h3>Trusted Sellers</h3>
              <p>Verified sellers with ratings and reviews</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Books */}
      <section className="featured-books">
        <div className="container">
          <h2 className="section-title">Featured Books</h2>
          <div className="books-grid">
            {featuredBooks.map(book => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>
          <div className="text-center">
            <Link to="/marketplace" className="btn btn-outline">View All Books</Link>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">Our Impact</h2>
          <div className="impact-grid">
            <div className="impact-card">
              <div className="impact-number">{impactStats.totalBooksDonated.toLocaleString()}</div>
              <div className="impact-label">Books Donated</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">{impactStats.activeBeneficiaries.toLocaleString()}</div>
              <div className="impact-label">Lives Impacted</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">{impactStats.partneredNGOs}</div>
              <div className="impact-label">Partner NGOs</div>
            </div>
            <div className="impact-card">
              <div className="impact-number">{impactStats.co2Saved}</div>
              <div className="impact-label">CO₂ Saved</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>Ready to Get Started?</h2>
          <p>Join thousands of book lovers making a difference</p>
          <Link to="/register" className="btn btn-large">Create Free Account</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
