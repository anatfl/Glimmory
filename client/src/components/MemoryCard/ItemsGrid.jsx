import { useContext, useState } from 'react';
import styles from './ItemsGrid.module.css';
import MemoryCard from './MemoryCard';
import MemoryViewModal from '../MemoryView/MemoryViewModal';
import { MemoryContext } from '../../context/memoryContext';

const ItemsGrid = () => {
  const { memories, getMemories } = useContext(MemoryContext);
  const [selectedMemory, setSelectedMemory] = useState(null);

  if (memories === null) {
    return <div className={styles.gridContainer}>Loading Memories...</div>;
  }

  if (!Array.isArray(memories) || memories.length === 0) {
    return (
      <div className={styles.gridContainer}>
        No memories to show
        <button onClick={getMemories}>refresh</button>
      </div>
    );
  }

  return (
    <>
      <div className={styles.gridContainer}>
        {memories.map((item) => (
          <MemoryCard
            key={item.id}
            title={item.title}
            date={item.date ? new Date(item.date).toLocaleDateString('he-IL') : ''}
            onClick={() => setSelectedMemory(item)}
          />
        ))}
      </div>

      <MemoryViewModal
        isOpen={!!selectedMemory}
        onClose={() => setSelectedMemory(null)}
        memory={selectedMemory}
      />
    </>
  );
};

export default ItemsGrid;
