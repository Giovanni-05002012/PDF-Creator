declare let event:any;
export function BotaoConverte(subItems:any){
        event.preventDefault();
        $(subItems).addClass("sub-items-displaied");
}