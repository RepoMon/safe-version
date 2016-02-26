var fs = require('fs');

/**
 *
 */
function Store(dir){
    this.dir = dir;
}

/**
 *
 * @param vendor
 * @param library
 * @param cb
 */
Store.prototype.get = function(vendor, library, cb) {

    'use strict';
    // scan dir ../data/security-advisories for a dir named vendor
    // then scan that dir, if it exists, for a dir named library
    //


};

module.exports = Store;