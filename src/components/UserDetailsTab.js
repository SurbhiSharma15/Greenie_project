// src/App.js
import React, { useState, useEffect } from 'react';
import UserTable from './UserTable';
import '../styles/user-details-tab.css'

function App() {
  const [originalData, setOriginalData] = useState([]);
  const [userData, setUserData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Function to fetch data based on search term
  const fetchData = async (term = '') => {
    try {
      const response = await fetch(`http://localhost:3001/api/users?search=${term}`);
      const data = await response.json();
      setUserData("");
      setUserData(data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  // Initial data fetching on component mount
  useEffect(() => {
    const fetchOriginalData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/users');
        const data = await response.json();
        // setUserData("");
        // setOriginalData("");
        setOriginalData(data);
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchOriginalData();
  }, []);

  // Function to handle search term changes
  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (term.trim() === '') {
      // If the search term is empty, revert to the original dataset
      setUserData("");
      setUserData(originalData);
    } else {
      fetchData(term);
    }
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search by Username, Email, Phone, ID, or Creation Date"
        value={searchTerm}
        onChange={handleSearch}
      />
      <UserTable userData={userData} />
    </div>
  );
}

export default App;




