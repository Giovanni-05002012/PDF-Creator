System.register(["./controllers/botaoConverte.js", "./controllers/desativaBotao.js", "./controllers/loader.js"], function (exports_1, context_1) {
    "use strict";
    var botaoConverte_js_1, desativaBotao_js_1, loader_js_1, bodyPage, mainSection, btnOpen, btnClose, btnDownload, subItems, spinner;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (botaoConverte_js_1_1) {
                botaoConverte_js_1 = botaoConverte_js_1_1;
            },
            function (desativaBotao_js_1_1) {
                desativaBotao_js_1 = desativaBotao_js_1_1;
            },
            function (loader_js_1_1) {
                loader_js_1 = loader_js_1_1;
            }
        ],
        execute: function () {
            bodyPage = document.querySelector(".page");
            mainSection = document.querySelector("#section-main");
            btnOpen = document.querySelector("#open-extension");
            btnClose = document.querySelector("#close-extension");
            btnDownload = document.querySelector(".get_app");
            subItems = document.querySelector("#sub-items");
            spinner = document.querySelector(".spinner");
            btnOpen === null || btnOpen === void 0 ? void 0 : btnOpen.addEventListener("click", function () {
                botaoConverte_js_1.BotaoConverte(btnOpen, btnClose, subItems);
            });
            btnClose === null || btnClose === void 0 ? void 0 : btnClose.addEventListener("click", function () {
                desativaBotao_js_1.DesativaBotao(btnOpen, btnClose, subItems);
            });
            btnDownload === null || btnDownload === void 0 ? void 0 : btnDownload.addEventListener("click", function () {
                loader_js_1.Loader(mainSection, bodyPage, spinner);
            });
        }
    };
});
