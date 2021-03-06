const express = require('express');
const request = require('request');
const R = require('ramda');
const S = require('sanctuary');

const { AdminType } = require('../src/User/Types');
const { handleUser } = require('../src/User/Handler');

const router = express.Router();

router.get('/:sth', function(req, res, next) {
    const sth = req.params.sth;
    const username = sth;

    request({
        uri:  `https://api.github.com/search/users?q=${username}`,
        method: 'GET',
        headers: {'User-Agent': 'request'}
    }, function(error, response, body) {
        const parsedBody = JSON.parse(body);
        const admin = {
            username: username,
            email: S.Nothing,
            birthDate: S.Nothing,
        };

        const result = handleUser (admin) (parsedBody);
        res.json(result);
    });
});

module.exports = router;
