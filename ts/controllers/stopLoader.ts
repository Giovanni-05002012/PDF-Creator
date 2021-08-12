
export const StopLoader = (main:any, bodyPage:any, spinner:any) => {
    setTimeout(function() {
        $(spinner).addClass("invisible");
        bodyPage.classList.remove("loading-background");
        main.classList.remove("loading");
        $(".title").removeClass("transparent");
    
    }, 5000);
}