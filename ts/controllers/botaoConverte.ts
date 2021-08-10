declare let event:any;
export async function BotaoConverte(btn:any, subItems:any){
    $(btn).click(await function(){
        event.preventDefault();
        $(subItems).addClass("sub-items-displaied");
        console.log("Funcionouu!!");
    });
    
}