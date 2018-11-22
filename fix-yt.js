// ==UserScript==
// @name     Fix YT
// @version  1
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant    unsafeWindow
// ==/UserScript==

window.addEventListener('load', function() {
	$('#secondary').remove(); // remove suggested videos
}, false);

