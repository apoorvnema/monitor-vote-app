import React from 'react';
import ReactDOM from 'react-dom';
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className={styles['modal-overlay']} onClick={onClose}>
      <div className={styles['modal-content']} onClick={e => e.stopPropagation()}>
        {children}
        <button className={styles['modal-close']} onClick={onClose}>
          &times;
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
