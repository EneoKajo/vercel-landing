import React, { useState, useEffect } from 'react';
import '../styles/loading.css';

function Loading({ isLoading, onLoadingComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      // Start fade out animation
      setFadeOut(true);
      
      // Remove loading screen after animation completes
      const timer = setTimeout(() => {
        onLoadingComplete();
      }, 500); // Match this with CSS animation duration

      return () => clearTimeout(timer);
    }
  }, [isLoading, onLoadingComplete]);

  if (!isLoading && fadeOut) {
    return (
      <div className={`loading-overlay ${fadeOut ? 'fade-out' : ''}`}>
        <div className="loading-container">
          <div className="loading-logo">
            <img src="/logo.png" alt="Vesper" className="loading-logo-img" />
          </div>
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
          <div className="loading-text">Loading Vesper...</div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="loading-overlay">
        <div className="loading-container">
          <div className="loading-logo">
            <img src="/logo.png" alt="Vesper" className="loading-logo-img" />
          </div>
          <div className="loading-spinner-container">
            <div className="loading-spinner"></div>
          </div>
          <div className="loading-text">Loading Vesper...</div>
        </div>
      </div>
    );
  }

  return null;
}

export default Loading;