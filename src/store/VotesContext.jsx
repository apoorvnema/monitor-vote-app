import React, { createContext, useState } from 'react';

export const VotesContext = createContext();

export const VotesProvider = ({ children }) => {
    const [candidates, setCandidates] = useState([
        {
            candidateId: 1,
            name: 'John Doe',
            totalVotes: 4,
            voters: ['Alice', 'Bob', 'Charlie', 'David'],
        },
        {
            candidateId: 2,
            name: 'Jane Smith',
            totalVotes: 4,
            voters: ['Eve', 'Frank', 'Grace', 'Hannah'],
        },
        {
            candidateId: 3,
            name: 'Michael Brown',
            totalVotes: 3,
            voters: ['Ivy', 'Jack', 'Kara'],
        },
    ]);

    const getTotalVotes = () => {
        return candidates.reduce((total, candidate) => total + candidate.totalVotes, 0);
    };

    const addVote = (candidateId, voterName) => {
        setCandidates(candidates.map(candidate => {
            if (candidate.candidateId === candidateId) {
                return {
                    ...candidate,
                    totalVotes: candidate.totalVotes + 1,
                    voters: [...candidate.voters, voterName],
                };
            }
            return candidate;
        }));
    };

    const deleteVote = (candidateId, voterName) => {
        setCandidates(candidates.map(candidate => {
            if (candidate.candidateId === candidateId) {
                return {
                    ...candidate,
                    totalVotes: candidate.totalVotes - 1,
                    voters: candidate.voters.filter(voter => voter !== voterName),
                };
            }
            return candidate;
        }));
    };

    return (
        <VotesContext.Provider value={{ candidates, getTotalVotes, addVote, deleteVote }}>
            {children}
        </VotesContext.Provider>
    );
};
