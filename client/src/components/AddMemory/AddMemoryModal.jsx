import { useRef, useState } from 'react';
import Modal from '../common/Modal/Modal';
import UniButton from '../common/UniButton/UniButton';
import AddMemoryForm from './AddMemoryForm';
import api from '../../services/api';

export default function AddMemoryModal({ isOpen, onClose, onCreate }) {
  const primaryRef = useRef(null);
  const [saving, setSaving] = useState(false);
  const [err, setErr] = useState(null);

  async function handleSubmit(values) {
    setErr(null);
    setSaving(true);

    try {
      // שולחות לשרת (values מכיל title, date: "YYYY-MM-DD", description)
      const res = await api.post('/memories', values);
      console.log('[ADD] POST ok', res.status, res.data);
      // רענון הרשימה בדף הבית
      onCreate?.();
      // סגירת המודאל
      onClose();
    } catch (e) {
      console.error('[ADD] POST ERROR', e);
      setErr(e.message || 'Failed to save');
    } finally {
      setSaving(false);
  }
}

  return (
    <Modal
      isOpen={isOpen}
      onClose={saving ? undefined : onClose}
      title="New memory"
      size="md"
      initialFocusRef={primaryRef}
      footer={
        <>
          <UniButton variant="ghost" onClick={onClose} disabled={saving}>
            Cancel
          </UniButton>
          <UniButton
            ref={primaryRef}
            type="submit"
            form="add-memory-form"
            disabled={saving}
          >
            {saving ? 'Saving…' : 'Save'}
          </UniButton>
        </>
      }
    >
      {err && <p style={{ color: 'crimson' }}>{err}</p>}
      <AddMemoryForm id="add-memory-form" onSubmit={handleSubmit} disabled={saving} />
    </Modal>
  );
}
