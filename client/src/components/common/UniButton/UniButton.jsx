import styles from './UniButton.module.css';
import React, { forwardRef } from 'react';
import clsx from 'clsx';


const UniButton = forwardRef(function UniButton(
  {
    children,
    className,
    type = 'button',
    onClick,
    disabled = false,
    ...rest
  },
  ref
) {
  return (
    <button
      ref={ref}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(styles.button, className)}
      {...rest}
    >
      {children}
    </button>
  );
});

export default UniButton;