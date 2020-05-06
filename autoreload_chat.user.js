// ==UserScript==
// @name         auto click
// @namespace    https://github.com/Slava-Gll/ltu_moodle_autoreload
// @version      1.0
// @description  auto reload moodle simple chat
// @match        https://edu.spbftu.ru/mod/chat/*
// @author       Slava_Gll
// @grant        none
// ==/UserScript==

//setTimeout(beginclick,30000);

window.onload=function(){

    setInterval(autoClick,2000);

}
function autoClick(){
    if(document.getElementById('message')!==document.activeElement){
        if(document.getElementsByClassName("btn btn-secondary").length>0){
            document.getElementsByClassName("btn btn-secondary")[0].click();
        }
    }
}