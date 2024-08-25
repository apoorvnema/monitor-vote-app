import React, { useState, useContext } from 'react';
import { VotesContext } from '../../store/VotesContext';
import Button from '../UI/Button';
import Modal from '../UI/Modal';
import VoteForm from '../VoteForm/VoteForm';
import styles from './Header.module.css';

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { getTotalVotes } = useContext(VotesContext);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>Class Monitor Vote</h1>
      <p className={styles.votes}>Total Votes: {getTotalVotes()}</p>
      <Button title="Add New Vote" onClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <VoteForm onClose={closeModal} />
      </Modal>
    </header>
  );
};

export default Header;
