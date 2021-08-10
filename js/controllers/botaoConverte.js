System.register([], function (exports_1, context_1) {
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
    var __moduleName = context_1 && context_1.id;
    function BotaoConverte(btn, subItems) {
        return __awaiter(this, void 0, void 0, function* () {
            $(btn).click(yield function () {
                event.preventDefault();
                $(subItems).addClass("sub-items-displaied");
                console.log("Funcionouu!!");
            });
        });
    }
    exports_1("BotaoConverte", BotaoConverte);
    return {
        setters: [],
        execute: function () {
        }
    };
});
