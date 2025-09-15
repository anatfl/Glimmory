import { useContext } from 'react';
import styles from './ItemsGrid.module.css';
import MemoryCard from './MemoryCard';
import { MemoryContext } from '../../context/memoryContext';

const ItemsGrid = () => {
  const { memories, getMemories } = useContext(MemoryContext);

  if (memories === null) {
    return <div className={styles.gridContainer}>Loading Memories...</div>;
  }

  // No memories yet
  if (!Array.isArray(memories) || memories.length === 0) {
    return (
      <div className={styles.gridContainer}>
        No memories to show
        <button onClick={getMemories}>refresh</button>
      </div>
    );
  }


  return (
    <div className={styles.gridContainer}>
        {memories.map((item) => (
            <MemoryCard 
              key={item._id} 
              id={item._id} 
              title={item.title} 
              date={item.date ? new Date(item.date).toLocaleDateString('he-IL') : ''} 
            />
        ))}
    </div>
  );
};

export default ItemsGrid;
