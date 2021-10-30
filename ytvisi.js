// ==UserScript==
// @name         Video Background Play Fix
// @namespace    https://greasyfork.org/en/users/50-couchy
// @version      1.1
// @description  Prevents YouTube and Vimeo from pausing videos when minimizing or switching tabs. Cross-browser port of https://addons.mozilla.org/en-US/firefox/addon/video-background-play-fix/
// @author       Couchy
// @match        *://*.youtube.com/*
// @grant        none
// @run-at       document-start
// ==/UserScript==

document.addEventListener('visibilitychange', function (e) { e.stopImmediatePropagation(); }, true);
 
Object.defineProperty(document, 'visibilityState', { get: function () { return "visible"; } });
