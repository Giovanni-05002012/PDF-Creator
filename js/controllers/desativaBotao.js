System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function DesativaBotao(btnOpen, btnClose, subItems) {
        event === null || event === void 0 ? void 0 : event.preventDefault();
        $(subItems).addClass("invisible");
        $(btnClose).addClass("invisible");
        btnOpen.classList.remove("invisible");
    }
    exports_1("DesativaBotao", DesativaBotao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
