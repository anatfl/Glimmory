import { useState } from 'react';
import UniButton from '../common/UniButton/UniButton';
import AddMemoryModal from './AddMemoryModal';

export default function AddMemoryButton({ onCreate }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <UniButton onClick={() => setOpen(true)}>Add New Memory</UniButton>
      <AddMemoryModal
        isOpen={open}
        onClose={() => setOpen(false)}
        onCreate={onCreate}
      />
    </>
  );
}
