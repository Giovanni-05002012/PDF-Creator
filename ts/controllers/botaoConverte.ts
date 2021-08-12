declare let event:any;
export function BotaoConverte(btnOpen:any, btnClose:any, subItems:any){
        event.preventDefault();
        subItems.classList.remove("invisible");
        $(btnOpen).addClass("invisible");
        btnClose.classList.remove("invisible");
}