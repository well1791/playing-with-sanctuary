const {create, show} = require ('sanctuary');
const $ = require ('sanctuary-def');
const type = require ('sanctuary-type-identifiers');

const RepoType = $.RecordType ({
    "avatar_url": $.String,
    "events_url": $.String,
    "followers_url": $.String,
    "following_url": $.String,
    "gists_url": $.String,
    "gravatar_id": $.String,
    "html_url": $.String,
    "id": $.FiniteNumber,
    "login": $.String,
    "node_id": $.String,
    "organizations_url": $.String,
    "received_events_url": $.String,
    "repos_url": $.String,
    "score": $.FiniteNumber,
    "site_admin": $.Boolean,
    "starred_url": $.String,
    "subscriptions_url": $.String,
    "type": $.String,
    "url": $.String,
});

const UserList = $.RecordType ({
    incomplete_results: $.String,
    items: $.ValidDate,
    total_count: $.PositiveFiniteNumber,
});

module.exports = {
    UserList,
    UserType,
};
