// ==UserScript==
// @name         Fix GCP CSS
// @namespace    http://tampermonkey.net/
// @version      2025-05-07
// @description  try to take over the world!
// @author       You
// @match        https://console.cloud.google.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Inject a global CSS override
    // fix for trigger forms to be too small
    const css = `
    build-configuration > form, trigger-configuration > form, trigger-form > form {
      max-width: 1024px !important;
    }
    `;
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);

    // fix for a double scroll bar (only on firefox)
    document.body.style.overflowY = 'hidden';

    function applyMaxWidth() {
        // fix for revision env var in cloud run to be too small
        const revisionEnvVarDiv = document.querySelectorAll('cfc-table.cfc-max-width-base.ng-star-inserted');
        revisionEnvVarDiv.forEach((table) => {
            table.style.maxWidth = '100%';
        });
    }

    // Execute on ready
    applyMaxWidth();

    // Execute on DOM change
    const observer = new MutationObserver(() => {
        applyMaxWidth();
    });

    observer.observe(document.body, {
        childList: true,
        subtree: true,
    });
})();
