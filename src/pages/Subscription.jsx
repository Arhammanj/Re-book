import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { subscriptionPlans, userSubscription } from '../data/subscriptions';
import './Subscription.css';

const Subscription = () => {
  const navigate = useNavigate();
  const { isAuthenticated, currentUser } = useApp();
  const [selectedPlan, setSelectedPlan] = useState(null);

  if (!isAuthenticated) {
    return (
      <div className="subscription-container">
        <div className="auth-required">
          <h2>🔒 Authentication Required</h2>
          <p>Please log in to manage your subscription</p>
          <button onClick={() => navigate('/login')} className="btn btn-primary">
            Go to Login
          </button>
        </div>
      </div>
    );
  }

  const handleSubscribe = (plan) => {
    setSelectedPlan(plan);
    setTimeout(() => {
      alert(`🎉 Successfully subscribed to ${plan.name} plan!\n\nYou now pay only ${plan.platformFee}% on each sale!`);
      setSelectedPlan(null);
    }, 500);
  };

  const calculateSavings = (bookPrice, plan) => {
    const starterFee = (bookPrice * 10) / 100;
    const planFee = (bookPrice * plan.platformFee) / 100;
    return (starterFee - planFee).toFixed(2);
  };

  return (
    <div className="subscription-container">
      <div className="subscription-header">
        <div className="header-content">
          <h1>💎 Choose Your Selling Power</h1>
          <p>Pay less on every book you sell. Grow your revenue with lower platform fees!</p>
          <div className="header-badges">
            <span className="badge">📊 Transparent Pricing</span>
            <span className="badge">🚀 Instant Activation</span>
            <span className="badge">🔄 Cancel Anytime</span>
          </div>
        </div>
      </div>

      {/* Fee Calculator */}
      <div className="fee-calculator">
        <h2>💰 See How Much You Save</h2>
        <p>Calculate your savings with different plans</p>
        <div className="calculator-demo">
          <div className="demo-item">
            <span className="demo-label">Example: Selling a book for $50</span>
            <div className="demo-fees">
              {subscriptionPlans.map(plan => (
                <div key={plan.id} className="fee-comparison">
                  <span className="plan-name">{plan.icon} {plan.name}</span>
                  <span className="fee-amount">${((50 * plan.platformFee) / 100).toFixed(2)} fee</span>
                  <span className="you-earn">You earn: ${(50 - (50 * plan.platformFee) / 100).toFixed(2)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Subscription Plans */}
      <div className="plans-section">
        <h2 className="plans-title">🎯 Choose Your Plan</h2>
        <div className="plans-grid">{subscriptionPlans.map(plan => (
            <div 
              key={plan.id} 
              className={`plan-card ${plan.recommended ? 'recommended' : ''} ${
                currentUser?.subscription === plan.name ? 'current' : ''
              } ${selectedPlan?.id === plan.id ? 'selecting' : ''}`}
            >
              {plan.recommended && (
                <div className="recommended-ribbon">
                  <span>⭐ MOST POPULAR</span>
                </div>
              )}
              
              <div className={`plan-icon bg-gradient-to-br ${plan.color}`}>
                <span>{plan.icon}</span>
              </div>
              
              <div className="plan-header">
                <h3 className="plan-name">{plan.name}</h3>
                <div className="plan-fee-highlight">
                  <span className="fee-percentage">{plan.platformFee}%</span>
                  <span className="fee-label">Platform Fee</span>
                </div>
                <div className="plan-price">
                  {plan.price === 0 ? (
                    <div className="price-free">
                      <span className="price-amount">FREE</span>
                      <span className="price-subtitle">Forever</span>
                    </div>
                  ) : (
                    <div className="price-paid">
                      <span className="price-currency">$</span>
                      <span className="price-amount">{plan.price}</span>
                      <span className="price-duration">/{plan.duration}</span>
                    </div>
                  )}
                </div>
                <p className="savings-tag">{plan.savings}</p>
              </div>

              <ul className="plan-features">
                {plan.features.map((feature, index) => (
                  <li key={index}>
                    <svg className="feature-check" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`btn-subscribe ${currentUser?.subscription === plan.name ? 'btn-current' : ''}`}
                onClick={() => handleSubscribe(plan)}
                disabled={currentUser?.subscription === plan.name}
              >
                {currentUser?.subscription === plan.name ? (
                  <>✓ Your Current Plan</>
                ) : (
                  <>Get Started →</>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ROI Calculator */}
      <div className="roi-section">
        <h2>📈 Calculate Your Return on Investment</h2>
        <p>See how upgrading pays for itself</p>
        <div className="roi-grid">
          {subscriptionPlans.filter(p => p.price > 0).map(plan => (
            <div key={plan.id} className="roi-card">
              <h3>{plan.icon} {plan.name} Plan</h3>
              <div className="roi-calculation">
                <div className="roi-row">
                  <span>Monthly subscription:</span>
                  <strong>${plan.price}</strong>
                </div>
                <div className="roi-row">
                  <span>Platform fee per sale:</span>
                  <strong>{plan.platformFee}%</strong>
                </div>
                <div className="roi-highlight">
                  <p>Break-even at:</p>
                  <div className="breakeven">
                    ${(plan.price / ((10 - plan.platformFee) / 100)).toFixed(0)}
                  </div>
                  <small>in monthly sales</small>
                </div>
                <div className="roi-example">
                  <p>If you sell $500/month:</p>
                  <div className="savings-amount">
                    Save ${calculateSavings(500, plan)}/month
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="faq-section">
        <h2>❓ Frequently Asked Questions</h2>
        <div className="faq-grid">
          <div className="faq-item">
            <h4>Can I cancel anytime?</h4>
            <p>Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your billing period.</p>
          </div>
          <div className="faq-item">
            <h4>How does the platform fee work?</h4>
            <p>The platform fee is deducted from each sale. Lower tiers pay higher fees, while Enterprise sellers pay only 2%.</p>
          </div>
          <div className="faq-item">
            <h4>Can I upgrade mid-cycle?</h4>
            <p>Yes! You can upgrade at any time and we'll prorate the remaining time on your current plan.</p>
          </div>
          <div className="faq-item">
            <h4>What payment methods do you accept?</h4>
            <p>We accept all major credit cards, PayPal, and bank transfers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
