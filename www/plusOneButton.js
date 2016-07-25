var exec = require('cordova/exec');
var cordova = require('cordova');
var plusOneButton = {
    show: function(params) {
        exec(function(){
        cordova.fireDocumentEvent("plusOneButtonClicked");
        }, null, 'PlusOneButtonPlugin', 'show', [params]);
    },
    hide: function() {
        exec(null, null, 'PlusOneButtonPlugin', 'hide', []);
    }
};

module.exports = plusOneButton;
