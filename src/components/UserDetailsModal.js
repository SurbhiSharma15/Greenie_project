// src/components/UserDetailsModal.js
import React from 'react';

const UserDetailsModal = ({ user, onClose }) => {
  return (
    <div className="user-details-modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>User Details</h2>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>ID: {user.id}</p>
        <p>Creation Date: {user.creationDate}</p>
      </div>
    </div>
  );
};

export default UserDetailsModal;
