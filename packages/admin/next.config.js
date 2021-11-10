const withTM = require("next-transpile-modules")(["shared","users"]);

module.exports = withTM()