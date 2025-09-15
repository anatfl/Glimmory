import React from 'react';
import styles from './Home.module.css';
import ItemsGrid from '../../components/MemoryCard/ItemsGrid';


const Home = () => {
  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Memories</h1>
      <h2 className={styles.secondheadline}>little sparks of joy</h2>
      <ItemsGrid />
    </div>
  );
};

export default Home;
