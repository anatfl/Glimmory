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
      <AddMemoryButton onCreate={(m) =>{ 
        console.log('mock add to UI:', m);
        console.log('[HOME] onCreate → getMemories()');
        getMemories(); // ← רענון הרשימה אחרי POST מוצלח
      }} />
      <ItemsGrid />
    </div>
  );
};

export default Home;
