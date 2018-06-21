const S = require ('sanctuary');
const $ = require ('sanctuary-def');

const AdminType = $.RecordType ({
    username: $.String,
    email: S.MaybeType($.String),
    birthDate:S.MaybeType($.ValidDate),
});

module.exports = {
    AdminType,
};
