const express = require('express');
const router = express.Router();
const { Job } = require('../models/jobModel');

router.post('/add', (req, res) => {
    let { title, description, company, salary, email, new_job } = req.body;
    Job.create({
        title,
        description,
        company,
        salary,
        email,
        new_job
    })
        .then(() => res.redirect('/'))
        .catch(err => {
            console.log(`error adding jobs: ${err}`);
        });
});

module.exports = router;