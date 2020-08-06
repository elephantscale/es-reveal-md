/*
 * Handles print-pdf with bottom toolbar icon
 *
 * By Mohammad Foolady <foolady@gmail.com>, August 2020
 */

var RevealPrintMode = window.RevealPrintMode || (function () {

    var printModeIcon = document.createElement('div');
    printModeIcon.id = "printModeIcon";
    printModeIcon.classList.add('btn-tools');
    printModeIcon.style.position = 'fixed';
    printModeIcon.style.bottom = '30px';
    printModeIcon.style.left = '190px';
    printModeIcon.style.top = 'auto';
    printModeIcon.style.right = 'auto';
    printModeIcon.style.zIndex = 30;
    printModeIcon.style.fontSize = '24px';
    printModeIcon.innerHTML = '<a href="?print-pdf" target="_blank"><i class="fas fa-print"></i></a>';

    Reveal.addEventListener('ready', function (evt) {
        document.querySelector('.reveal').appendChild(printModeIcon); 
    });

    return this;
})();