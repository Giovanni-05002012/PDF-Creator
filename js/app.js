System.register(["./controllers/botaoConverte.js"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var botaoConverte_js_1, btn, subItems;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (botaoConverte_js_1_1) {
                botaoConverte_js_1 = botaoConverte_js_1_1;
            }
        ],
        execute: function () {
            btn = document.getElementsByClassName("btn-dropdown");
            subItems = document.getElementsByClassName("sub-items");
            $(btn).click(() => __awaiter(void 0, void 0, void 0, function* () {
                event.preventDefault();
                yield botaoConverte_js_1.BotaoConverte(btn, subItems);
            }));
        }
    };
});
