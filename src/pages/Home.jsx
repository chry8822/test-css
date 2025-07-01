import TheoryCard from '../component/TheoryCard';
import styles from '../styles/Home.module.css';

const Home = () => {
  const theories = [
    {
      icon: '📐',
      title: 'Display',
      description: 'flex, grid, block, inline-block',
      badge: '레이아웃',
      url: '/flexbox',
    },
    {
      icon: '📍',
      title: 'Position',
      description: 'relative, absolute, fixed, sticky',
      badge: '위치',
      url: '/position',
    },
    {
      icon: '📦',
      title: 'Box Model',
      description: 'width, height, margin, padding',
      badge: '박스모델',
      url: '/boxModel',
    },
    {
      icon: '📱',
      title: '반응형',
      description: 'media queries, 다양한 화면 대응',
      badge: '/responsive',
    },
  ];

  return (
    <main className={styles.main}>
      <section>
        <div>
          <div className={styles.title}>
            <h2>핵심 이론</h2>
            <p>CSS의 기본기를 탄탄하게 다져보세요</p>
          </div>

          <div className={styles.theoryGrid}>
            {theories.map((theory, index) => (
              <TheoryCard key={index} icon={theory.icon} title={theory.title} description={theory.description} badge={theory.badge} url={theory.url} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
