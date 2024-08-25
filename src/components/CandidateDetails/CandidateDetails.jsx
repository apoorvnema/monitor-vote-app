import React, { useContext } from 'react';
import Card from '../UI/Card'
import styles from './CandidateDetails.module.css';
import { VotesContext } from '../../store/VotesContext';
import Button from '../UI/Button';

const CandidateDetails = () => {
  const { candidates, addVote, deleteVote } = useContext(VotesContext);

  return (
    <>
      {candidates.map(candidate => (
        <Card key={candidate.candidateId} title={candidate.name}>
          <p>Total Votes: {candidate.totalVotes}</p>
          <ul className={styles.list}>
            {candidate.voters.map((voter, index) => (
              <li key={index} className={styles.listItem}>
                {voter}
                <Button onClick={() => deleteVote(candidate.candidateId, voter)} title={"Remove"} size={12} color={"#770000"}/>
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </>
  );
};

export default CandidateDetails;
