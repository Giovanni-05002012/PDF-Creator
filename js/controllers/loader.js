System.register(["./stopLoader.js"], function (exports_1, context_1) {
    "use strict";
    var stopLoader_js_1, Loader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (stopLoader_js_1_1) {
                stopLoader_js_1 = stopLoader_js_1_1;
            }
        ],
        execute: function () {
            exports_1("Loader", Loader = (main, bodyPage, spinner) => {
                spinner.classList.remove("invisible");
                $(main).addClass("loading");
                $(bodyPage).addClass("loading-background");
                $(".title").addClass("transparent");
                stopLoader_js_1.StopLoader(main, bodyPage, spinner);
            });
        }
    };
});
