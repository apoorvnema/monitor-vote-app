import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div className={styles['modal-content']} onClick={e => e.stopPropagation()}>
        {children}
        <button className={styles['modal-close']} onClick={onClose}>
          &times;
        </button>
      </div>
    </div>
  );
};

export default Modal;
