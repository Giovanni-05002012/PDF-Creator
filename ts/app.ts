declare let event: any;

import { BotaoConverte } from "./controllers/botaoConverte.js";
import { DesativaBotao } from "./controllers/desativaBotao.js";
import { Loader } from "./controllers/loader.js";

let bodyPage = document.querySelector(".page");
let mainSection = document.querySelector("#section-main");
let btnOpen = document.querySelector("#open-extension");
let btnClose = document.querySelector("#close-extension");
let btnDownload = document.querySelector(".get_app");
let subItems = document.querySelector("#sub-items");
let spinner = document.querySelector(".spinner");

btnOpen?.addEventListener("click", function() {
    BotaoConverte(btnOpen, btnClose, subItems);
});

btnClose?.addEventListener("click", function() {
   DesativaBotao(btnOpen, btnClose, subItems);
});

btnDownload?.addEventListener("click", function(){
    Loader(mainSection, bodyPage, spinner);
});
