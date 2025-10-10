import { useContext } from 'react';
import styles from './Home.module.css';
import ItemsGrid from '../../components/MemoryCard/ItemsGrid';
import AddMemoryButton from '../../components/AddMemory/AddMemoryButton';
import { MemoryContext } from '../../context/memoryContext';

const Home = () => {
  const { getMemories } = useContext(MemoryContext);

  return (
    <div className={styles.home}>
      <h1 className={styles.headline}>Memories</h1>
      <h2 className={styles.secondheadline}>little sparks of joy</h2>
      <AddMemoryButton onCreate={getMemories} />
      <ItemsGrid />
    </div>
  );
};

export default Home;
