// ==UserScript==
// @name     Stop Ebook Timeout
// @version  1
// @grant    unsafeWindow
// ==/UserScript==

// I paid for this book; don't automatically log me out while I'm reading it.
window.addEventListener('load', function() {
	clearTimeout(unsafeWindow.sessionTimeoutID);
  unsafeWindow.sessionTimeoutAction = function (){};
}, false);

