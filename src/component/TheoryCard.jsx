import { useNavigate } from 'react-router-dom';
import styles from '../styles/TheoryCard.module.css';

const TheoryCard = ({ icon, title, description, badge, url }) => {
  const navigate = useNavigate();

  return (
    <div className={styles.theoryCard} onClick={() => navigate(url)}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardBadge}>{badge}</div>
    </div>
  );
};

export default TheoryCard;
