import { Link } from 'react-router-dom';
import { ngos, impactStats } from '../data/ngos';
import './NGO.css';

const NGO = () => {
  return (
    <div className="ngo-container">
      <div className="ngo-header">
        <h1>🤝 Partner NGOs</h1>
        <p>Supporting education and literacy for underprivileged communities</p>
      </div>

      {/* Impact Statistics */}
      <div className="impact-stats-section">
        <h2>Our Collective Impact</h2>
        <div className="impact-stats-grid">
          <div className="impact-stat-card">
            <div className="impact-icon">📚</div>
            <div className="impact-number">{impactStats.totalBooksCollected.toLocaleString()}</div>
            <div className="impact-label">Books Collected</div>
          </div>
          <div className="impact-stat-card">
            <div className="impact-icon">🎁</div>
            <div className="impact-number">{impactStats.totalBooksDonated.toLocaleString()}</div>
            <div className="impact-label">Books Donated</div>
          </div>
          <div className="impact-stat-card">
            <div className="impact-icon">👥</div>
            <div className="impact-number">{impactStats.activeBeneficiaries.toLocaleString()}</div>
            <div className="impact-label">Lives Impacted</div>
          </div>
          <div className="impact-stat-card">
            <div className="impact-icon">🌱</div>
            <div className="impact-number">{impactStats.co2Saved}</div>
            <div className="impact-label">CO₂ Saved</div>
          </div>
        </div>
      </div>

      {/* NGO Cards */}
      <div className="ngos-section">
        <h2>Featured NGO Partners</h2>
        <div className="ngos-grid">
          {ngos.map(ngo => (
            <div key={ngo.id} className="ngo-card">
              <div className="ngo-logo">{ngo.logo}</div>
              
              <div className="ngo-content">
                <h3>{ngo.name}</h3>
                <p className="ngo-description">{ngo.description}</p>
                
                <div className="ngo-stats">
                  <div className="ngo-stat">
                    <span className="stat-value">{ngo.booksDistributed.toLocaleString()}</span>
                    <span className="stat-label">Books Distributed</span>
                  </div>
                  <div className="ngo-stat">
                    <span className="stat-value">{ngo.beneficiaries.toLocaleString()}</span>
                    <span className="stat-label">Beneficiaries</span>
                  </div>
                </div>

                <div className="ngo-details">
                  <div className="detail-row">
                    <span className="detail-label">📍 Location:</span>
                    <span className="detail-value">{ngo.location}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">📅 Founded:</span>
                    <span className="detail-value">{ngo.founded}</span>
                  </div>
                  <div className="detail-row">
                    <span className="detail-label">🎯 Impact:</span>
                    <span className="detail-value">{ngo.impact}</span>
                  </div>
                </div>

                <div className="transparency-score">
                  <span>Transparency Score</span>
                  <div className="score-bar">
                    <div 
                      className="score-fill" 
                      style={{width: `${ngo.transparencyScore}%`}}
                    />
                  </div>
                  <span className="score-value">{ngo.transparencyScore}%</span>
                </div>

                <Link to="/donate" className="btn btn-donate">
                  Donate Books to {ngo.name.split(' ')[0]}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="how-it-works">
        <h2>How ReBook NGO Partnership Works</h2>
        <div className="steps-grid">
          <div className="step-card">
            <div className="step-number">1</div>
            <h3>Select NGO</h3>
            <p>Choose an NGO partner that aligns with your values</p>
          </div>
          <div className="step-card">
            <div className="step-number">2</div>
            <h3>Donate Books</h3>
            <p>Submit your books for donation through our platform</p>
          </div>
          <div className="step-card">
            <div className="step-number">3</div>
            <h3>Track Progress</h3>
            <p>Monitor your donation's journey with tracking ID</p>
          </div>
          <div className="step-card">
            <div className="step-number">4</div>
            <h3>See Impact</h3>
            <p>Receive updates on how your books helped communities</p>
          </div>
        </div>
      </div>

      {/* Transparency Promise */}
      <div className="transparency-section">
        <h2>Our Transparency Promise</h2>
        <div className="transparency-content">
          <div className="transparency-item">
            <div className="transparency-icon">🔍</div>
            <h4>100% Trackable</h4>
            <p>Every donation gets a unique tracking ID</p>
          </div>
          <div className="transparency-item">
            <div className="transparency-icon">📊</div>
            <h4>Regular Reports</h4>
            <p>Monthly impact reports from all NGO partners</p>
          </div>
          <div className="transparency-item">
            <div className="transparency-icon">✅</div>
            <h4>Verified Impact</h4>
            <p>Third-party verification of distribution metrics</p>
          </div>
          <div className="transparency-item">
            <div className="transparency-icon">📸</div>
            <h4>Photo Updates</h4>
            <p>Real photos from beneficiary communities</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <h2>Ready to Make a Difference?</h2>
        <p>Your donated books can change lives</p>
        <Link to="/donate" className="btn btn-large">Start Donating Now</Link>
      </div>
    </div>
  );
};

export default NGO;
