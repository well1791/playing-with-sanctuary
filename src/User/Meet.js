const {create} = require ('sanctuary');
const $ = require ('sanctuary-def');

const {UserList, UserType} = require ('./Types');

const def = $.create ({
    checkTypes: process.env.NODE_ENV != 'production',
    env: $.env.concat ([UserList, UserType]),
});

// meet :: UserType -> UserType -> String
const meet =
def ('meet')
    ({})
    ([UserList, UserType, $.Boolean])
    (list => user => false);

module.exports = {
    meet,
};
