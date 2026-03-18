import Modal from '../common/Modal/Modal';
import styles from './ConfirmDeleteModal.module.css';

export default function ConfirmDeleteModal({
  isOpen,
  onClose,
  onConfirm,
  isDeleting = false,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Delete memory"
      size="sm"
      className={styles.confirmModal}
    >
      <div className={styles.content}>
        <p className={styles.message}>
          This action cannot be undone. Are you sure you want to delete this memory?
        </p>

        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cancelBtn}
            onClick={onClose}
            disabled={isDeleting}
          >
            Cancel
          </button>

          <button
            type="button"
            className={styles.deleteBtn}
            onClick={onConfirm}
            disabled={isDeleting}
          >
            {isDeleting ? 'Deleting...' : 'Delete'}
          </button>
        </div>
      </div>
    </Modal>
  );
}