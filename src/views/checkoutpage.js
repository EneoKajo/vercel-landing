import React, { useState, useEffect } from 'react';
import '../styles/checkout.css'; // Import the CSS file

function CheckoutPage() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [verified, setVerified] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);

  // Get URL parameters from current page
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('user_id');
    const timestamp = urlParams.get('timestamp');
    const token = urlParams.get('token');
    
    if (userId && timestamp && token) {
      verifyAccess(userId, timestamp, token);
    } else {
      setError('Invalid payment link parameters');
      setLoading(false);
    }
  }, []);

  // Initialize PayPal when verified
  useEffect(() => {
    if (verified && window.paypal) {
      initializePayPal();
    }
  }, [verified]);

 const initializePayPal = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const userId = urlParams.get('user_id');

  window.paypal.Buttons({
    createSubscription: function(data, actions) {
      return actions.subscription.create({
        'plan_id': 'P-9JB130502H910641NNDDSJUI',
        'custom_id': userId
      });
    },
    onApprove: function(data, actions) {
      alert('Payment successful!');
    },
    onError: function(err) {
      console.error('PayPal error:', err);
    }
  }).render('#paypal-button-container');
};

  const verifyAccess = async (userId, timestamp, token) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/payment/verify?user_id=${userId}&timestamp=${timestamp}&token=${token}`);
      const data = await response.json();
      
      if (response.ok) {
        setVerified(true);
      } else {
        setError(data.error || 'Invalid payment link');
      }
    } catch (err) {
      setError('Failed to verify payment access');
    } finally {
      setLoading(false);
    }
  };

  const handlePayPalPayment = async () => {
    setPaymentLoading(true);
    // PayPal subscription button will handle this
  };

  if (loading) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="checkout-card">
            <div className="loading-state">
              <div className="loading-spinner"></div>
              <p>Verifying access...</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="checkout-page">
        <div className="checkout-container">
          <div className="checkout-card error-card">
            <div className="error-icon">⚠️</div>
            <h2>Access Denied</h2>
            <p>{error}</p>
            <button className="back-to-app-btn" onClick={() => window.history.back()}>
              Return to App
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <div className="checkout-container">
        <div className="checkout-card">
          {/* Header */}
          <div className="checkout-header">
            <div className="app-logo">
              <div className="logo-icon">🌙</div>
              <h1>Vesper Premium</h1>
            </div>
            <p className="checkout-subtitle">Unlock unlimited dream interpretations</p>
          </div>

          {/* Premium Features */}
          <div className="premium-features">
            <h3>Premium Benefits</h3>
            <div className="feature-list">
              <div className="feature-item">
                <span className="feature-icon">∞</span>
                <div className="feature-text">
                  <strong>Unlimited Interpretations</strong>
                  <p>No more monthly limits on AI dream analysis</p>
                </div>
              </div>
            
            </div>
          </div>

          {/* Pricing */}
          <div className="pricing-section">
            <div className="price-display">
              <span className="currency">$</span>
              <span className="amount">2.99</span>
              <span className="period">/month</span>
            </div>
            <p className="pricing-note">Cancel anytime • No hidden fees</p>
          </div>

          {/* Payment Button */}
          <div className="payment-section">
            <div className="payment-methods-info">
              <p>Pay securely with:</p>
              <div className="payment-options">
                <span className="payment-option">💳 Credit Card</span>
                <span className="payment-option">💰 PayPal</span>
                <span className="payment-option">🏦 Debit Card</span>
              </div>
            </div>
            
            <div id="paypal-button-container" className="paypal-button-container">
              {/* PayPal SDK will inject real buttons here */}
              {!verified && (
                <button 
                  className="paypal-placeholder-btn"
                  disabled={true}
                >
                  <div className="button-spinner"></div>
                  Loading PayPal...
                </button>
              )}
            </div>
            
            <p className="payment-security">
              🔒 Secure payment • No PayPal account required
            </p>
          </div>

          {/* Footer Links */}
          <div className="checkout-footer">
            <a href="/terms?doc=terms-and-conditions" className="legal-link">Terms of Service</a>
            <span className="divider">•</span>
            <a href="/terms?doc=privacy-policy" className="legal-link">Privacy Policy</a>
          </div>
        </div>

        {/* Background Elements */}
        <div className="checkout-background">
          <div className="floating-dream floating-dream-1">💭</div>
          <div className="floating-dream floating-dream-2">✨</div>
          <div className="floating-dream floating-dream-3">🌟</div>
          <div className="floating-dream floating-dream-4">💫</div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;