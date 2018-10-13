// ==UserScript==
// @name     Fix Ql
// @version  1
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant    unsafeWindow
// ==/UserScript==

// I don't want to log in to view the content
window.addEventListener('load', function() {
	$('.SignupWallInline').remove();
	$('.SetPageTerm').addClass('is-showing');
}, false);

