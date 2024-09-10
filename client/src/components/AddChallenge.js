import { useState } from "react";
import axios from 'axios';

function AddChallenge({ onChallengeAdded }) {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://127.0.0.1:8000/challenges/add/', {
                name,
                description,
                start_date: start, // Include start_date in the request
                end_date: end      // Include end_date in the request
            });
            setName('');
            setDescription('');
            setStart('');
            setEnd('');
            onChallengeAdded();
        } catch (error) {
            console.error("Error adding challenge ", error);
        }
    };

    const handleDelete = async (e) => {
        

    };

    return (
        <div className="card my-5">
            <div className="card-header">Add New Challenge</div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" placeholder="e.g., Rock Climbing" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="description" className="form-label">Description</label>
                        <input type="text" className="form-control" placeholder="Describe the Challenge" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="start" className="form-label">Start Date</label>
                        <input type="date" className="form-control" id="start" value={start} onChange={(e) => setStart(e.target.value)} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="end" className="form-label">End Date</label>
                        <input type="date" className="form-control" id="end" value={end} onChange={(e) => setEnd(e.target.value)} required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default AddChallenge;
