const $ = require ('sanctuary-def');

const { URLPlaceholderType } = require('../URL/Types');

const UserType = $.RecordType ({
    avatar_url: $.String,
    events_url: URLPlaceholderType,
    followers_url: $.String,
    following_url: URLPlaceholderType,
    gists_url: URLPlaceholderType,
    gravatar_id: $.String,
    html_url: $.String,
    id: $.FiniteNumber,
    login: $.String,
    node_id: $.String,
    organizations_url: $.String,
    received_events_url: $.String,
    repos_url: $.String,
    score: $.FiniteNumber,
    site_admin: $.Boolean,
    starred_url: URLPlaceholderType,
    subscriptions_url: $.String,
    type: $.String,
    url: $.String,
});

const UserList = $.RecordType ({
    incomplete_results: $.String,
    items: $.Array(UserType),
    total_count: $.PositiveFiniteNumber,
});

module.exports = {
    UserList,
    UserType,
};
