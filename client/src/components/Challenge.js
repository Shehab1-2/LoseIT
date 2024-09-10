import React from 'react';
import axios from 'axios';

function Challenge({ challenge, onChallengeDeleted }) {
    const handleDelete = async () => {
        try {
            await axios.delete(`http://127.0.0.1:8000/challenges/delete/${challenge.id}/`);
            onChallengeDeleted(challenge.id); // Notify the parent component to remove the deleted challenge from the list
        } catch (error) {
            console.error("Error deleting challenge", error);
        }
    };

    return (
        <div className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" aria-current="true">
            <div>
                <h5 className="mb-1">{challenge.name}</h5>
                <p className="mb-1">{challenge.description}</p>
                <p className="mb-1">{challenge.start_date}</p>
                <p className="mb-1">{challenge.end_date}</p>
            </div>
            <button className="btn btn-sm btn-danger" onClick={handleDelete}>×</button>
        </div>
    );
}

export default Challenge;
