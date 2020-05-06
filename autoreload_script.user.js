// ==UserScript==
// @name         auto click
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  auto click pay button
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