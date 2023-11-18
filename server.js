// server.js
const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const userData = [
    { id: 1, username: 'rohit', email: 'john@example.com', phone: '123-456-7890', creationDate: '2022-01-01' },
    { id: 2, username: 'kohli', email: 'kohli@example.com', phone: '987-654-3210', creationDate: '2022-05-01' },
    { id: 3, username: 'rahul', email: 'rahul@example.com', phone: '987-654-3210', creationDate: '2022-03-01' },
    { id: 4, username: 'ishan', email: 'ishan@example.com', phone: '987-654-3210', creationDate: '2021-02-01' },
    { id: 5, username: 'sky', email: 'sky@example.com', phone: '987-654-3210', creationDate: '2020-09-01' },
    { id: 6, username: 'pant', email: 'pant@example.com', phone: '987-654-3210', creationDate: '2022-02-10' },
    { id: 7, username: 'gill', email: 'gill@example.com', phone: '987-654-3210', creationDate: '2020-02-08' },
    { id: 8, username: 'bumrah', email: 'bumrah@example.com', phone: '987-654-3210', creationDate: '2022-02-01' },
    { id: 9, username: 'shami', email: 'shami@example.com', phone: '987-654-3210', creationDate: '2022-02-01' },
    { id: 10, username: 'siraj', email: 'siraj@example.com', phone: '987-654-3210', creationDate: '2022-02-01' },
    { id: 11, username: 'kuldeep', email: 'kuldeep@example.com', phone: '987-654-3210', creationDate: '2022-02-01' }
    // Add more mock users as needed
  ];


  app.get('/api/users', (req, res) => {
    const searchTerm = req.query.search || ''; // Get the search term from the query string
    const filteredUsers = userData.filter((user) =>
      Object.values(user).some(
        (value) => value.toString().toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    res.json(filteredUsers);
  });

  app.post('/api/createAccount', (req, res) => {
    try {
      const { username, password, email, phone } = req.body;
  
      // Dummy logic to simulate creating an account
      const newUser = {
        id: userData.length + 1,
        username,
        password, // Note: In a real application, never store passwords like this. Always hash them.
        email,
        phone,
        creationDate: new Date().toISOString().split('T')[0], // Add creation date
      };
  
      userData.push(newUser);
  
      res.json({ success: true, message: 'Account created successfully', user: newUser });
    } catch (error) {
      console.error('Error creating account:', error);
      res.status(500).json({ success: false, message: 'Internal Server Error' , error: error.message});
    }
  });
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });






