import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ currentPage, setCurrentPage }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pages = [
    { id: 'home', name: 'Home' },
    { id: 'about', name: 'About' },
    { id: 'contact', name: 'Contact' },
    { id: 'signup', name: 'Sign Up' }
  ];

  const handleNavClick = (pageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo} onClick={() => handleNavClick('home')}>
        InternHub
      </div>

      {/* Desktop Navigation */}
      <div className={styles.desktopNav}>
        {pages.map((page) => (
          <button
            key={page.id}
            className={`${styles.navButton} ${
              currentPage === page.id ? styles.active : ''
            }`}
            onClick={() => handleNavClick(page.id)}
          >
            {page.name}
          </button>
        ))}
      </div>

      {/* Mobile Menu Button */}
      <button
        className={styles.mobileMenuButton}
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? '✕' : '☰'}
      </button>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className={styles.mobileNav}>
          {pages.map((page) => (
            <button
              key={page.id}
              className={`${styles.mobileNavButton} ${
                currentPage === page.id ? styles.active : ''
              }`}
              onClick={() => handleNavClick(page.id)}
            >
              {page.name}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
