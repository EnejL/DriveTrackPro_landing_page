import React from 'react';
import { Link } from 'react-router-dom';
import appLogo from '../assets/app-logo-white.png';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="logo-container">
            <div className="app-logo">
              <img src={appLogo} alt="Na Poti App Logo" />
            </div>
          </div>
          <h1 className="app-name">Na Poti</h1>
          <p className="tagline">Vaša vozila, na dlani!</p>
          <a href="#" className="app-store-button">
            <div className="app-store-badge">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
              </svg>
              <div>
                <div className="download-text">Download on the</div>
                <div className="store-text">App Store</div>
              </div>
            </div>
          </a>
        </div>
        <div className="hero-background"></div>
        
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <div className="scroll-arrow">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/>
            </svg>
          </div>
          <p className="scroll-text">Scroll down</p>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Zmogljivosti</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15,7V3H9V7H3V21H21V7H15M11,5H13V7H11V5M19,19H5V9H19V19Z"/>
                </svg>
              </div>
              <h3>Sledi Vsemu</h3>
              <p>Od točenja goriva do polnjenja baterije - vodite popolno zgodovino stroškov pogonskih sredstev.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.92,6.01C18.72,5.42 18.16,5 17.5,5H15V12H17.5C18.16,12 18.72,11.58 18.92,10.99L20.92,5.99C21.2,5.2 20.7,4.38 19.85,4.38H19.85L18.92,6.01M8.5,5C7.84,5 7.28,5.42 7.08,6.01L6.15,4.38C5.3,4.38 4.8,5.2 5.08,5.99L7.08,10.99C7.28,11.58 7.84,12 8.5,12H11V5H8.5M16,13.5V22H8V13.5H16M14,20V15H10V20H14Z"/>
                </svg>
              </div>
              <h3>Vsi Tipi Vozil</h3>
              <p>Ne glede na to, ali vozite bencinsko, dizelsko, hibridno ali popolnoma električno vozilo - Na Poti pokriva vse.</p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19,3H5C3.9,3 3,3.9 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.9 20.1,3 19,3M19,19H5V5H19V19M17,12H14.5L13,10.5L10.5,13L7,9.5L5,11.5V17H19V12Z"/>
                </svg>
              </div>
              <h3>Bencinske Črpalke</h3>
              <p>Poiščite bencinske črpalke v bližini vas in preverite cene goriv ter odpiralne čase.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <p className="copyright">© 2025 Enej Licina</p>
            <Link to="/privacy" className="privacy-link">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
