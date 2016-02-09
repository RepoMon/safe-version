var app = require('express')(),
    version_routes = require('./version_routes');

/**
 * Hook to set up routing of web requests
 */
module.exports.running = function() {
    'use strict';

    app.use('/', version_routes);
};

/**
 * Hook to start listening to web requests
 */
module.exports.connected = function() {
    'use strict';

    var PORT = process.env.PORT || 80;

    app.listen(PORT);
};