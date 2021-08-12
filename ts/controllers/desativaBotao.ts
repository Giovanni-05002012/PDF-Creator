export function DesativaBotao(btnOpen:any, btnClose:any, subItems:any){
    event?.preventDefault();
    $(subItems).addClass("invisible");
    $(btnClose).addClass("invisible");
    btnOpen.classList.remove("invisible");
}