require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT;
const database = require('./database/connection');

database.authenticate()
    .then(() => {
        console.log('sucessfully connected on database!');
    })
    .catch(err => {
        console.log(`db connection error: ${err}.`);
    });

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => console.log(`app listening on port ${port}!`));