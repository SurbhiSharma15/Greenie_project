// src/components/AccountCreationTab.js
import React, { useState } from 'react';
import '../styles/account-creation-tab.css';

const AccountCreationTab = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  let response; // Declare the response variable outside the try block
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Dummy request handling, replace with actual API call
    try {
      response = await fetch('http://localhost:3001/api/createAccount', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password, email, phone }),
      });
      // console.log('Full response:', await response.text()); // Log the entire response
      const data = await response.json();
      console.log('Account created:', data);
    } catch (error) {
      console.error('Error creating account:', error);
      const fullResponse = await response.text(); // Define 'response' in the catch block scope
      console.log('Full response:', fullResponse);
    }

    // Reset form fields after submission
    setUsername('');
    setPassword('');
    setEmail('');
    setPhone('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </label>
        <br />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default AccountCreationTab;


