const S = require ('sanctuary');
const $ = require ('sanctuary-def');

const PlaceholdersType = $.EnumType
    ('mine/PlaceholdersType')
    ('http://example.com/mine#PlaceholdersType')
    (['privacy', 'other_user', 'gist_id', 'owner', 'repo']);

const validateMatch = S.pipe([
    S.prop ('match'),
    match => match.replace(/[\{|\/|\}]/g, ""),
    S.is (PlaceholdersType),
]);

const validateURL = S.pipe([
    S.matchAll (/{\/\w+}/g),
    S.map (validateMatch),
    S.ifElse (S.equals ([])) (S.K(false)) (S.reduce (S.and) (true)),
]);

const URLPlaceholderType = $.NullaryType
    ('mine/URLPlaceholderType')
    ('http://example.com/mine#URLPlaceholderType')
    (validateURL);

module.exports = {
    URLPlaceholderType,
};
