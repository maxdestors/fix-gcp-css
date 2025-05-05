// ==UserScript==
// @name         Fix GCP CSS
// @namespace    http://tampermonkey.net/
// @version      2025-04-18
// @description  try to take over the world!
// @author       You
// @match        https://console.cloud.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.body.style.overflowY = 'hidden';

    const MAX_WIDTH_VALUE = '100%'; // Change cette valeur si tu veux une autre largeur

    function applyMaxWidth() {
        const tables = document.querySelectorAll('cfc-table.cfc-max-width-base.ng-star-inserted');
        tables.forEach((table) => {
            table.style.maxWidth = MAX_WIDTH_VALUE;
            // table.style.margin = '0 auto'; // Pour centrer, facultatif
        });
    }

    // Exécute au chargement initial
    applyMaxWidth();

    // Observe les changements du DOM (utile si le tableau est ajouté dynamiquement)
    const observer = new MutationObserver(() => {
        applyMaxWidth();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
})();