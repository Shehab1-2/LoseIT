import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 
import Header from './Header';
import ChallengeList from './ChallengeList';
import AddChallenge from './AddChallenge';
import './Home.css';

const Home = () => {
  const [challenges, setChallenges] = useState([]); 
  const [fadeIn, setFadeIn] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const navigate = useNavigate();

  useEffect(() => {
    fetchChallenges(); // Call the fetchChallenges function
    setFadeIn(true); // Trigger fade-in effect
  }, []);

  const fetchChallenges = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/challenges/'); 
      setChallenges(response.data); // Update the state with the fetched data
    } catch (error) {
      console.error("Error fetching challenges", error);
    }
  };

  const handleChallengeDeleted = (id) => {
    setChallenges(challenges.filter(challenge => challenge.id !== id));
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`container mt-5 ${darkMode ? 'dark-mode' : ''}`}>
      <h1 className='text-center mb-1'>Lose IT</h1>
      <button className="btn btn-secondary mb-3" onClick={toggleDarkMode}>
        {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <AddChallenge onChallengeAdded={fetchChallenges} />
      <ChallengeList challenges={challenges} onChallengeDeleted={handleChallengeDeleted} />
    </div>
  );
}

export default Home;
