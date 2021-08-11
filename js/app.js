System.register(["./controllers/botaoConverte.js"], function (exports_1, context_1) {
    "use strict";
    var botaoConverte_js_1, btn, subItems;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (botaoConverte_js_1_1) {
                botaoConverte_js_1 = botaoConverte_js_1_1;
            }
        ],
        execute: function () {
            btn = document.getElementsByClassName("check-dropdown");
            subItems = document.getElementsByClassName("sub-items");
            $(btn).click(function () {
                event.preventDefault();
                botaoConverte_js_1.BotaoConverte(subItems);
            });
        }
    };
});
