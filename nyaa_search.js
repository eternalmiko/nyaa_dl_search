// ==UserScript==
// @name        DLSite Nyaa Search
// @description Adds live example button, with styling.
// @match       *://www.dlsite.com/*
// @grant       GM_addStyle
// ==/UserScript==

//Get work name
let workName = document.querySelector("h1#work_name").innerText

/*--- Create a button in a container div.  It will be styled and
    positioned with CSS.
*/
var zNode       = document.createElement ('div');
zNode.innerHTML = '<button id="myButton" type="button">'
                + 'Nyaa Search</button>'
                ;
zNode.setAttribute ('id', 'myContainer');
document.body.appendChild (zNode);

let div = document.querySelector("h1#work_name");
div.appendChild(zNode);

//--- Activate the newly added button.
document.getElementById ("myButton").addEventListener (
    "click", ButtonClickAction, false
);

function ButtonClickAction (zEvent) {
    window.open('https://' + (window.location.href.split('/')[3] == 'maniax' ? 'sukebei.' : '') + 'nyaa.si/?q=' + workName);
}



