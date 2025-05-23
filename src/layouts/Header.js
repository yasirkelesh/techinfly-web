import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/react';
import logoSvg from '../assets/logo.svg';

const headerGlobalStyles = css`
  .container-header {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding-left: 1.5rem; 
    padding-right: 1.5rem;
  }

  @media (min-width: 768px) {
    .container-header {
      padding-left: 3rem; 
      padding-right: 3rem; 
    }
  }
  @media (min-width: 1024px) {
    .container-header {
      padding-left: 4rem; 
      padding-right: 4rem; 
    }
  }
  @media (min-width: 1280px) {
    .container-header {
      max-width: 1280px;
    }
  }
`;

const headerStyle = css`
  background: linear-gradient(to right, var(--color-primary-light), var(--color-secondary-light));
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  padding-top: 0.8rem;
  padding-bottom: 0.8rem;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transition: background-color 0.3s ease;

  .nav-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .nav-branding-link {
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  .nav-svg-logo {
    height: 80px;
    width: auto;
    display: block;
    transition: transform 0.3s ease;
    &:hover {
      transform: scale(1.08) rotate(-2deg);
    }
  }
  
  .nav-desktop-content {
    display: none;
    flex-grow: 1;
    @media (min-width: 992px) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-left: 2rem;
    }
  }
  
  .nav-center-links {
    display: flex;
    gap: 2.2rem;
     a {
      color: var(--color-nav-link-text-on-gradient);
      font-weight: 500;
      position: relative;
      padding-bottom: 0.35rem;
      transition: color 0.3s ease, transform 0.3s ease;
      &:hover {
        color: var(--color-nav-link-hover-text-on-gradient);
        transform: translateY(-2px);
        &::after {
          width: 100%;
          background-color: var(--color-nav-link-hover-text-on-gradient);
        }
      }
      &::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 2.5px;
        background-color: var(--color-nav-link-text-on-gradient);
        transition: width 0.3s ease, background-color 0.3s ease;
      }
    }
  }
  
  .nav-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-button a {
    background: var(--color-accent);
    color: white;
    padding: 0.8rem 1.8rem;
    border-radius: 50px;
    font-weight: 600;
    display: inline-block;
    transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
    box-shadow: 0 4px 10px rgba(var(--color-accent-rgb), 0.3);
    &:hover {
      background: var(--color-accent-dark);
      transform: translateY(-3px) scale(1.03);
      box-shadow: 0 6px 12px rgba(var(--color-accent-rgb), 0.4);
    }
  }

  .nav-mobile-toggle {
    color: var(--color-nav-link-text-on-gradient);
    background: none;
    border: none;
    cursor: pointer;
    font-size: 1.5rem;
    padding: 0.5rem;
    line-height: 1;
    transition: color 0.3s ease;
    @media (min-width: 992px) {
      display: none;
    }
  }

  .nav-mobile-menu {
    background: linear-gradient(to right, var(--color-primary-light), var(--color-secondary-light));
    padding-top: 1rem;
    padding-bottom: 1rem;
    border-top: 1px solid rgba(255,255,255,0.2);
    position: absolute;
    width: 100%;
    left: 0;
    top: 100%; 
    box-shadow: var(--color-nav-shadow);
    z-index: 40;
    
    .container-header {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }

    div > a {
      display: block;
      color: var(--color-nav-link-text-on-gradient);
      font-weight: 500;
      padding: 0.9rem 0;
      border-bottom: 1px solid rgba(255,255,255,0.1);
      transition: color 0.3s ease, background-color 0.3s ease;
      &:last-of-type {
        border-bottom: none;
      }
      &:hover {
        color: var(--color-nav-link-hover-text-on-gradient);
        background-color: rgba(255,255,255,0.05);
      }
    }
    .nav-button a {
        margin-top: 1.2rem;
        padding-top: 0.9rem;
        padding-bottom: 0.9rem;
        background: var(--color-accent);
        color: white;
         &:hover {
           background: var(--color-accent-dark);
         }
    }
  }
`;

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const handleToggleMobileMenu = () => setShowMobileMenu(!showMobileMenu);

  const navLinks = [
    { href: "#how-it-works", text: "Nasıl Çalışır?" },
    { href: "#features", text: "Özellikler" },
    { href: "#why", text: "Neden Techinfly?" },
    { href: "#testimonials", text: "Yorumlar" },
  ];

  return (
    <>
      <header css={headerStyle}>
        <div className="container-header nav-container">
          <Link to="/" className="nav-branding-link">
            <img src={logoSvg} alt="Techinfly Logo" className="nav-svg-logo" />
          </Link>
          
          <div className="nav-desktop-content">
            <div className="nav-center-links">
              {navLinks.map(link => (
                <a key={link.href} href={link.href}>{link.text}</a>
              ))}
            </div>
            <div className="nav-controls">
              <div className="nav-button">
                <a href="#pre-register">Ön Talep</a>
              </div>
            </div>
          </div>

          <button onClick={handleToggleMobileMenu} className="nav-mobile-toggle">
            {showMobileMenu ? "✕" : "☰"}
          </button>
        </div>
        
        {showMobileMenu && (
          <div className="nav-mobile-menu">
            <div className="container-header">
              {navLinks.map(link => (
                 <a key={link.href} href={link.href} onClick={handleToggleMobileMenu}>{link.text}</a>
              ))}
              <div className="nav-button" style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                  <a href="#pre-register" onClick={handleToggleMobileMenu} style={{ width: '100%', textAlign: 'center'}}>Ön Talep</a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
