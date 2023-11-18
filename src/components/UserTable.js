// src/components/UserTable.js
import React, {useState} from 'react';
import UserDetailsModal from './UserDetailsModal';
import '../styles/user-table.css';

const UserTable = ({ userData }) => {
  const [selectedUser, setSelectedUser] = useState(null);

  const handleUserClick = (user) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };
  return (
  <div>
    <table className="user-table">
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
          <th>ID</th>
          <th>Creation Date</th>
        </tr>
      </thead>
      <tbody>
        {userData && userData.map((user) => (
          <tr key={user.id} onClick={() => handleUserClick(user)}>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.id}</td>
            <td>{user.creationDate}</td>
          </tr>
        ))}
      </tbody>
    </table>
    {selectedUser && <UserDetailsModal user={selectedUser} onClose={handleCloseModal} />}
  </div>
  );
};

export default UserTable;
