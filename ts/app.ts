import { BotaoConverte } from "./controllers/botaoConverte.js";
import { DesativaBotao } from "./controllers/desativaBotao.js";
//import Swal from "sweetalert2";
declare let event: any;

let btn = document.getElementsByClassName("check-dropdown");
let subItems = document.getElementsByClassName("sub-items");

$(btn).click(function() {
    event.preventDefault();
    BotaoConverte(subItems);
});

//Cria outro botão para substituir o btn e ficar substituindo um ao outro.