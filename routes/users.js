const express = require('express');
const request = require('request');
const S = require('sanctuary');

const { AdminType } = require('../src/User/Types');
const { existInList } = require('../src/User/Handler');

const router = express.Router();

router.get('/:username', function(req, res, next) {
    const username = req.params.username;
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
        const result = existInList (admin) (parsedBody);
        res.json(result);
    });
});

module.exports = router;
