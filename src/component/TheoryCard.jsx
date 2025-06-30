import styles from '../styles/TheoryCard.module.css';

const TheoryCard = ({ icon, title, description, badge }) => {
  return (
    <div className={styles.theoryCard}>
      <div className={styles.cardIcon}>{icon}</div>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardDescription}>{description}</p>
      <div className={styles.cardBadge}>{badge}</div>
    </div>
  );
};

export default TheoryCard;
