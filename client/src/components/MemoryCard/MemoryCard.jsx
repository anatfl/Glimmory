// import { useContext } from 'react';
import styles from './MemoryCard.module.css';
import logo from '/memoryLogo.png';

const MemoryCard = ({ title, date, onClick }) => {
  return (
    <button type="button" className={styles.item} onClick={onClick}>
      <img src={logo} alt="Memory" className={styles.logo} />
      <h2 className={styles.itemTitle}>{title}</h2>
      <h5 className={styles.itemDate}>{date}</h5>
    </button>
  );
};

export default MemoryCard;
