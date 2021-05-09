const express = require('express');

const router = express.Router();

router.get('/', function (req, res) {
    res.render('home');
});

router.get('/income', function (req, res) {
    res.render('income');
});

router.get('/egress', function (req, res) {
    res.render('egress');
});

module.exports = router;
