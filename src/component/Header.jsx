import { Link } from 'react-router-dom';
import ThemeToggle from './ThemeToggle';
import styles from '../styles/Header.module.css';

const Header = () => {
  const navLinks = [
    { to: '/flexbox', text: 'Flexbox' },
    { to: '/grid', text: 'Grid' },
    { to: '/position', text: 'Position' },
    { to: '/responsive', text: '반응형' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link to="/" className={styles.logo}>
          CSS Practice
        </Link>

        <div className={styles.headerRight}>
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.to} to={link.to} className={styles.navLink}>
                {link.text}
              </Link>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;
