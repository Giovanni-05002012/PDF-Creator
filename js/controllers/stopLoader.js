System.register([], function (exports_1, context_1) {
    "use strict";
    var StopLoader;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            exports_1("StopLoader", StopLoader = (main, bodyPage, spinner) => {
                setTimeout(function () {
                    $(spinner).addClass("invisible");
                    bodyPage.classList.remove("loading-background");
                    main.classList.remove("loading");
                    $(".title").removeClass("transparent");
                }, 5000);
            });
        }
    };
});
