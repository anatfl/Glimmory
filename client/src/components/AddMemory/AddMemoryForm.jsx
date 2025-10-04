import { useState, useMemo } from 'react';
import styles from './AddMemoryForm.module.css';


function getTodayLocalStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

export default function AddMemoryForm({ id, onSubmit, disabled, defaultValues }) {
  const todayStr = useMemo(() => getTodayLocalStr(), []);

  const [title, setTitle] = useState(defaultValues?.title ?? '');
  const [date, setDate] = useState(defaultValues?.date ?? todayStr);
  const [description, setDescription] = useState(defaultValues?.description ?? '');

  function handleSubmit(e) {
    e.preventDefault();
    const payload = {
      title: title.trim(),
      date,
      description: description.trim(),
    };
    console.log('[FORM] submit payload =', payload, 'typeof date =', typeof payload.date);
    onSubmit?.(payload);
  }

  return (
    <form id={id} onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="mem-title" className={styles.label}>Title</label>
        <input
          id="mem-title"
          name="title"
          className={styles.input}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          disabled={disabled}
          autoComplete="off"
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="mem-date" className={styles.label}>Date</label>
        <input
          id="mem-date"
          name="date"
          type="date"
          className={styles.input}
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          disabled={disabled}
          max={todayStr}
        />
      </div>

      <div className={`${styles.field} ${styles.colSpan2}`}>
        <label htmlFor="mem-desc" className={styles.label}>Description (optional)</label>
        <textarea
          id="mem-desc"
          name="description"
          className={styles.textarea}
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          disabled={disabled}
        />
        <span className={styles.help}>
          A few words about the memory or anything you want to remember about it!
        </span>
      </div>
    </form>
  );
}