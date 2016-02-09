var express = require('express'),
    logger = require('./logger'),
    store = require('./library_store');


module.exports = (function() {

    'use strict';

    var routes = express.Router();

    /**
     * Respond with :
     * 200 & empty string to indicate that library version is safe
     * 200 & version string to indicate safe version of the library
     * 404 to indicate that the library is unknown
     */
    routes.get('/:vendor/:library/:version', function(req, res){

        var vendor = req.param('vendor'), library = req.param('library'), version = req.param('version');

        logger.info("getting safe version for - vendor: " + vendor + ' library: ' + library + ' version: ' + version);

        var lib = store.get(vendor, library, function(lib, err){

            if (!err) {

                res.status(200);
            } else {
                res.status(404);
            }
        });
    });

    /**
     * update route pulls down new security databases
     * or do this via events?
     */

    return routes;

})();
