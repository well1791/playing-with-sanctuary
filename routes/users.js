var express = require('express');
var router = express.Router();

var { UserType } = require('../src/User/Types');
var { meet } = require('../src/User/Meet');

/* GET users listing. */
router.get('/', function(req, res, next) {
    var thisUser = {
        avatar_url: "something",
        events_url: "lel",
        followers_url: "something",
        following_url: "lel",
        gists_url: "lel",
        gravatar_id: "something",
        html_url: "something",
        id: 3,
        login: "something",
        node_id: "something",
        organizations_url: "something",
        received_events_url: "something",
        repos_url: "something",
        score: 3,
        site_admin: false,
        starred_url: "lel",
        subscriptions_url: "something",
        type: "something",
        url: "something",
    };

    var thisListOfUsers = {
        incomplete_results: "lel",
        items: [thisUser],
        total_count: 1,
    };

    result = meet (thisListOfUsers) (thisUser);

    res.json(result);
});

module.exports = router;
