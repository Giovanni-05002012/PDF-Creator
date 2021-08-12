import { StopLoader } from "./stopLoader.js";

export const Loader = (main:any, bodyPage:any, spinner:any) => {
    spinner.classList.remove("invisible");
    $(main).addClass("loading");
    $(bodyPage).addClass("loading-background");
    $(".title").addClass("transparent");

    StopLoader(main, bodyPage, spinner);
}