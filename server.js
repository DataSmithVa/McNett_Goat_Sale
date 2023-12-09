const express = require('express');
const path = require('path');

const app = express();

// Connect DataBase
// connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

// Define Routes
// app.use('/api/applications', require('./routes/applications'));
// app.use('/api/troubleTickets', require('./routes/troubleTickets'));
// app.use('/api/newsletter', require('./routes/newsletter'));
// app.use('/api/auth', require('./routes/auth'));
// app.use('/api/users', require('./routes/users'));
// app.use('/api/serviceArea', require('./routes/serviceArea'));

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
