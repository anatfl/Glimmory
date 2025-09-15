// import { useContext } from 'react';
import styles from './MemoryCard.module.css';
import logo from '../../../public/memoryLogo.png';

const MemoryCard = (props) => {
  // const { memory, getMemory } = useContext(DuckContext);

  // if (!memory) return null;

  return (
  <div key={props.id} className={styles.item}>
    <img src={logo} alt="Memory" className={styles.logo} />
    <h2 className={styles.itemTitle}>{props.title}</h2>
    <h5 className={styles.itemDate}>{props.date}</h5>
  </div>
      /* {duck && (
          <div className={styles.duck}>
            <h2 className={styles.duckName}>{duck.name}</h2>
            {duck.imageUrl && <img src={duck.imageUrl} alt={duck.name} className={styles.img} />}
          </div>
        )} */

  );
};

export default MemoryCard;
