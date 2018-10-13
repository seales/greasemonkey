// ==UserScript==
// @name     Fix JG
// @version  1
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant    unsafeWindow
// ==/UserScript==

// Avoid ads
$('.products-container').remove();
$('.advert-placeholder').remove();
$('.right-col__container').remove();
