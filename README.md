# safe-version
Returns safe versions of libraries

API allows clients to query for the safe version of a library

GET https://safe-version/vendor/library/version

Responds with :
* 200 & empty string if the version has no known vulnerabilities
* 200 & version string major.minor.version if the supplied version has vulnerabilities
* 404 if the library is not known
