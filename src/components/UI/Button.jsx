import React from 'react';
import styles from './Button.module.css';

const Button = ({ title, onClick, size, color }) => {
  return (
    <button onClick={onClick} className={styles.button} style={{fontSize: size, backgroundColor: color}}>
      {title}
    </button>
  );
};

export default Button;