"use strict";
window.addEventListener('DOMContentLoaded', () => {

    //nav Bold
    const liItem = document.querySelectorAll('.nav__item');
    liItem.forEach(item => {
        item.style.width = (item.offsetWidth + 1.5) + "px";
        console.log(item.offsetWidth);
    });




});