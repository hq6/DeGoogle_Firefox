var self = require('sdk/self');
var pageMod = require("sdk/page-mod");
 
pageMod.PageMod({
    include: /.*\.google\..*/,
    contentScriptFile: self.data.url("google-script.js")
});
