const withTM = require("next-transpile-modules")(["shared","admin"]);

module.exports = withTM();