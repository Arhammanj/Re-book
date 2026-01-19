import './SellerGuide.css';

const SellerGuide = () => {
  return (
    <div className="seller-guide-container">
      <div className="guide-header">
        <h1>📖 Seller Guide</h1>
        <p>Everything you need to know about selling books on ReBook</p>
      </div>

      <div className="guide-content">
        <section className="guide-section">
          <h2>🚀 Getting Started</h2>
          <div className="guide-steps">
            <div className="step">
              <span className="step-number">1</span>
              <div className="step-content">
                <h3>Create Your Account</h3>
                <p>Sign up for free and create your seller profile. Add your details and verify your account.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">2</span>
              <div className="step-content">
                <h3>List Your Books</h3>
                <p>Take clear photos, write accurate descriptions, and set competitive prices for your books.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">3</span>
              <div className="step-content">
                <h3>Get Orders</h3>
                <p>Buyers will contact you directly. Respond promptly and arrange for safe delivery or pickup.</p>
              </div>
            </div>
            <div className="step">
              <span className="step-number">4</span>
              <div className="step-content">
                <h3>Complete Sales</h3>
                <p>Mark books as sold once the transaction is complete. Build your seller reputation!</p>
              </div>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>💡 Tips for Success</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h3>📸 Quality Photos</h3>
              <p>Take clear, well-lit photos showing the book's condition. Include cover, spine, and any damage.</p>
            </div>
            <div className="tip-card">
              <h3>📝 Accurate Descriptions</h3>
              <p>Be honest about condition. Mention highlights, notes, or any wear and tear.</p>
            </div>
            <div className="tip-card">
              <h3>💰 Competitive Pricing</h3>
              <p>Research similar books. Price fairly based on condition and market demand.</p>
            </div>
            <div className="tip-card">
              <h3>⚡ Quick Responses</h3>
              <p>Respond to buyers within 24 hours. Fast communication leads to more sales.</p>
            </div>
            <div className="tip-card">
              <h3>📦 Safe Packaging</h3>
              <p>Pack books securely to prevent damage during shipping. Use bubble wrap or padding.</p>
            </div>
            <div className="tip-card">
              <h3>⭐ Build Reputation</h3>
              <p>Provide excellent service to get positive reviews and build trust with buyers.</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>📋 Book Condition Guide</h2>
          <div className="condition-guide">
            <div className="condition-item">
              <h4>Like New</h4>
              <p>Appears unread, no marks, perfect binding, clean pages</p>
            </div>
            <div className="condition-item">
              <h4>Very Good</h4>
              <p>Minimal wear, may have minor marks, pages clean and intact</p>
            </div>
            <div className="condition-item">
              <h4>Good</h4>
              <p>Normal wear from reading, possible highlighting or notes, all pages present</p>
            </div>
            <div className="condition-item">
              <h4>Acceptable</h4>
              <p>Heavily worn but readable, may have loose binding or water damage</p>
            </div>
          </div>
        </section>

        <section className="guide-section">
          <h2>❓ Common Questions</h2>
          <div className="faq-list">
            <div className="faq-item">
              <h3>How do I set the right price?</h3>
              <p>Check marketplace for similar books. Consider condition, demand, and original price. We suggest 30-60% off original price.</p>
            </div>
            <div className="faq-item">
              <h3>What if my book doesn't sell?</h3>
              <p>Try adjusting the price, improving photos, or updating the description. You can also donate it to NGOs through our platform.</p>
            </div>
            <div className="faq-item">
              <h3>How do I handle payments?</h3>
              <p>Arrange payment method with buyer directly. Common options include cash on delivery, bank transfer, or mobile payment apps.</p>
            </div>
            <div className="faq-item">
              <h3>Can I edit my listing?</h3>
              <p>Yes! Go to your dashboard and edit any details including price, description, or photos anytime.</p>
            </div>
          </div>
        </section>

        <section className="guide-section cta-section">
          <h2>Ready to Start Selling?</h2>
          <p>Join thousands of sellers giving books a second life</p>
          <div className="cta-buttons">
            <a href="/sell" className="btn btn-primary">List Your First Book</a>
            <a href="/subscription" className="btn btn-secondary">View Subscription Plans</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SellerGuide;
