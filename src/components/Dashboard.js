// src/components/Dashboard.js
import React from 'react';
import UserDetailsTab from './UserDetailsTab';
import AccountCreationTab from './AccountCreationTab';

import '../styles/dashboard.css'

const Dashboard = () => {
  // State to handle active tab
  const [activeTab, setActiveTab] = React.useState('userDetails');

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setActiveTab('userDetails')}>User Details</button>
        <button onClick={() => setActiveTab('accountCreation')}>Account Creation</button>
      </div>
      {activeTab === 'userDetails' ? <UserDetailsTab /> : <AccountCreationTab />}
    </div>
  );
};

export default Dashboard;
