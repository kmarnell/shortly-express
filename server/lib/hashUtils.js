const crypto = require('crypto');

/************************************************************/
// Add any hashing utility functions below
/************************************************************/
module.exports.hashPassword = function(password) {
    var hashedPW = crypto.createHash('sha1').update(password).digest("hex"); 
    return hashedPW;
}

