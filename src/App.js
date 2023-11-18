// src/App.js
import React from 'react';
// import './styles/user-management.css';
import Dashboard from './components/Dashboard';
// import UserTable from './UserTable';
// const userData = [
//   // Mock user data
//   // You can replace this with actual data fetched from a database
//   {username:"surbhi", phone:"2637322652", id: '1', creationDate: '2015-07-01'}
// ];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
