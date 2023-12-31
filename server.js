const express = require('express');
const connectDB = require('./config/db');
const path = require('path');

const app = express();

// Connect DataBase
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
app.use('/api/soldLot', require('./routes/soldLot'));

// Serve Static Assets in Production
// if (process.env.NODE_ENV === 'production') {
//   // Set Static Folder
//   app.use(express.static('client/build'));

//   app.get('*', (req, res) =>
//     res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
//   );
// }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
