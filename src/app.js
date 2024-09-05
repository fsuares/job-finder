require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const database = require('./database/connection');
const bodyParser = require('body-parser');

// Configure body-parser
app.use(bodyParser.urlencoded({ extended: false }));

// Database connection
database.authenticate()
    .then(() => {
        console.log('sucessfully connected on database!');
    })
    .catch(err => {
        console.log(`db connection error: ${err}.`);
    });

// Routes
app.get('/', (req, res) => res.send('Home Page - Job Finder'));
app.use('/jobs', require('./routes/jobRoutes'));

// Express
app.listen(port, () => console.log(`app listening on port ${port}!`));