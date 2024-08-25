import React, { useState, useContext } from 'react';
import { VotesContext } from '../../store/VotesContext';
import styles from './VoteForm.module.css';

const VoteForm = ({ onClose }) => {
  const { candidates, addVote } = useContext(VotesContext);
  const [voterName, setVoterName] = useState('');
  const [selectedCandidate, setSelectedCandidate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const candidate = candidates.find(c => c.candidateId === parseInt(selectedCandidate));
    if (candidate) {
      addVote(candidate.candidateId, voterName);
      setVoterName('');
      setSelectedCandidate('');
      onClose(); // Close the modal after submission
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2>Add New Vote</h2>
      <div className={styles.field}>
        <label htmlFor="voterName">Voter Name:</label>
        <input
          id="voterName"
          type="text"
          value={voterName}
          onChange={(e) => setVoterName(e.target.value)}
          required
        />
      </div>
      <div className={styles.field}>
        <label htmlFor="candidate">Vote For:</label>
        <select
          id="candidate"
          value={selectedCandidate}
          onChange={(e) => setSelectedCandidate(e.target.value)}
          required
        >
          <option value="" disabled>Select a candidate</option>
          {candidates.map(candidate => (
            <option key={candidate.candidateId} value={candidate.candidateId}>
              {candidate.name}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" className={styles.submitButton}>Submit</button>
    </form>
  );
};

export default VoteForm;
