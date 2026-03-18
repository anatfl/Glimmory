import * as Dialog from '@radix-ui/react-dialog';
import { useCallback } from 'react';
import styles from './Modal.module.css';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer = null,
  size = 'md',
  showClose = true,
  closeOnBackdrop = true,
  initialFocusRef = null,
  ariaDescribedBy,
  className = '',
}) {
  const onOpenChange = useCallback((open) => {
    if (!open) onClose?.();
  }, [onClose]);

  const sizeClass = {
    sm: styles.sizeSM,
    md: styles.sizeMD,
    lg: styles.sizeLG,
    xl: styles.sizeXL,
  }[size] || styles.sizeMD;

  return (
    <Dialog.Root open={!!isOpen} onOpenChange={onOpenChange}>
      <Dialog.Portal container={document.getElementById('modal-root') || undefined}>
        <Dialog.Overlay className={styles.backdrop} />
        <Dialog.Content
          className={`${styles.modal} ${sizeClass} ${className}`}
          aria-describedby={ariaDescribedBy}
          onOpenAutoFocus={(e) => {
            if (initialFocusRef?.current) {
              e.preventDefault();
              initialFocusRef.current.focus();
            }
          }}
          onInteractOutside={(e) => {
            if (!closeOnBackdrop) e.preventDefault();
          }}
        >
          {(title || showClose) && (
            <div className={styles.header}>
              {title && <Dialog.Title className={styles.title}>{title}</Dialog.Title>}
              {showClose && (
                <Dialog.Close className={styles.closeBtn} aria-label="Close">
                  ×
                </Dialog.Close>
              )}
            </div>
          )}

          <div className={styles.body}>{children}</div>
          {footer && <div className={styles.footer}>{footer}</div>}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
