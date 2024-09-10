import React from 'react';
import Challenge from './Challenge';

function ChallengeList({ challenges, onChallengeDeleted }) {
    return (
        <div className="list-group">
            {challenges.length > 0 ? (
                challenges.map((challenge) => (
                    <Challenge 
                        key={challenge.id} 
                        challenge={challenge} 
                        onChallengeDeleted={onChallengeDeleted} 
                    />
                ))
            ) : (
                <p>No challenges available.</p>
            )}
        </div>
    );
}

export default ChallengeList;
