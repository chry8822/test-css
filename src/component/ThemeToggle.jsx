import { useTheme } from '../hooks/useTheme';
import styles from '../styles/ThemeToggle.module.css';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className={styles.themeToggle} onClick={toggleTheme} aria-label={`${theme === 'light' ? '다크' : '라이트'}모드로 전환`}>
      <span className={styles.themeIcon}>{theme === 'light' ? '🌙' : '☀️'}</span>
    </button>
  );
};

export default ThemeToggle;
