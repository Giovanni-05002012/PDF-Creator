System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function BotaoConverte(subItems) {
        event.preventDefault();
        $(subItems).addClass("sub-items-displaied");
    }
    exports_1("BotaoConverte", BotaoConverte);
    return {
        setters: [],
        execute: function () {
        }
    };
});
