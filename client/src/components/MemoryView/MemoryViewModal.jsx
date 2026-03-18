import Modal from '../common/Modal/Modal';
import ConfirmDeleteModal from '../ConfirmDelete/ConfirmDeleteModal';
import api from '../../services/api';
import styles from './MemoryViewModal.module.css';
import logo from '/memoryLogo.png';
import { useState } from 'react';

export default function MemoryViewModal({ isOpen, onClose, memory, onDeleted }) {
  if (!memory) return null;

  const [isConfirmOpen, setIsConfirmOpen] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const formattedDate = memory.date
    ? new Date(memory.date).toLocaleDateString('he-IL')
    : '';
  
  const openDeleteConfirm = () => {
    setIsConfirmOpen(true);
  };

  const closeDeleteConfirm = () => {
    if (isDeleting) return;
    setIsConfirmOpen(false);
  };

   const handleDelete = async () => {
    try {
      setIsDeleting(true);
      await api.delete(`/memories/${memory.id}`);
      setIsConfirmOpen(false);
      onDeleted?.();
    } catch (error) {
      console.error('Failed to delete memory', error);
    } finally {
      setIsDeleting(false);
    }
  };

  return (
    <>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        size="lg"
        className={styles.memoryModal}
        title="Memory"
      >
        <div className={styles.content}>
          <button
            className={styles.deleteBtn}
            onClick={openDeleteConfirm}
            title="Delete memory"
            aria-label="Delete memory"
          >
            🗑️
          </button>

          <img src={logo} alt="Memory" className={styles.logo} />

          <h2 className={styles.title}>{memory.title}</h2>

          <p className={styles.date}>{formattedDate}</p>

          <p className={styles.description}>
            {memory.description || 'No description yet'}
          </p>
        </div>
      </Modal>

      <ConfirmDeleteModal
          isOpen={isConfirmOpen}
          onClose={closeDeleteConfirm}
          onConfirm={handleDelete}
          isDeleting={isDeleting}
        />
    </>
  );
}
