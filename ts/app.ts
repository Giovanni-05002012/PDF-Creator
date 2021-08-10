import { BotaoConverte } from "./controllers/botaoConverte.js";
declare let event: any;

let btn = document.getElementsByClassName("btn-dropdown");
let subItems = document.getElementsByClassName("sub-items");

$(btn).click(async () => {
    event.preventDefault();

    await BotaoConverte(btn, subItems);
});
