// keys.js - what set of cred to return

if(process.env.NODE_ENV === 'production') {
    // prod keys
    module.exports = require('./prod');
} else {
    // dev keys
    module.exports = require('./dev');
}