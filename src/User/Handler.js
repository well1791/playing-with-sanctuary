const R = require ('ramda');
const S = require ('sanctuary');
const $ = require ('sanctuary-def');

const {AdminType} = require('./Types');
const {UserListType} = require('../Services/GitHub/Types');

const def = $.create ({
    checkTypes: process.env.NODE_ENV != 'production',
    env: $.env.concat ([AdminType, UserListType]),
});

const _validate = admin => {
    const username = S.prop ('username') (admin);
    return S.ifElse
        (S.pipe ([S.prop ('items'), R.isEmpty]))
        (S.K (`There is no ${username}`))
        (S.K (`Hi ${username}`));
};

const handleUser =
def ('handleUser')
    ({})
    ([AdminType, UserListType, $.String])
    (_validate);

module.exports = {
    handleUser,
};
