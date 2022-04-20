"use strict";

var server = require("server");
var cache = require("*/cartridge/scripts/middleware/cache");
//var rootFolder = require('dw/content/ContentMgr').getSiteLibrary().root;

server.get("World", cache.applyDefaultCache, function(req, res, next) {
    res.render("helloworld", {
        Message: "Hello World! Again.",
    });
    next();
});

module.exports = server.exports();