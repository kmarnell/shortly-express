const utils = require('../lib/hashUtils');
const Model = require('./model');
const crypto = require('crypto');
const Promise = require('bluebird');
const request = Promise.promisify(require('request'), { multiArgs: true });


// Write you user database model methods here

class Users extends Model {
	constructor(){
    super('users')
    //this.tablename = users;
  }

  hashPassword(password) {
    var hashedPW = crypto.createHash('sha1').update(password).digest("hex"); 
    return hashedPW;
  }
}

module.exports = new Users();