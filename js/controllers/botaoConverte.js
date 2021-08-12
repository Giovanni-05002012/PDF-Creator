System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function BotaoConverte(btnOpen, btnClose, subItems) {
        event.preventDefault();
        subItems.classList.remove("invisible");
        $(btnOpen).addClass("invisible");
        btnClose.classList.remove("invisible");
    }
    exports_1("BotaoConverte", BotaoConverte);
    return {
        setters: [],
        execute: function () {
        }
    };
});
