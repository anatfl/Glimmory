import Modal from '../common/Modal/Modal';
import styles from './MemoryViewModal.module.css';
import logo from '/memoryLogo.png';

export default function MemoryViewModal({ isOpen, onClose, memory }) {
  if (!memory) return null;

  const formattedDate = memory.date
    ? new Date(memory.date).toLocaleDateString('he-IL')
    : '';

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      size="lg"
      showClose={true}
      className={styles.memoryModal}
    >
      <div className={styles.content}>
        <img src={logo} alt="Memory" className={styles.logo} />

        <h2 className={styles.title}>{memory.title}</h2>

        <p className={styles.date}>{formattedDate}</p>

        <p className={styles.description}>
          {memory.description || 'No description yet'}
        </p>
      </div>
    </Modal>
  );
}
