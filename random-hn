// ==UserScript==
// @name     Random HN
// @version  1
// @require  http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant    unsafeWindow
// ==/UserScript==


$( document ).ready(function() {
  var links = $( ".storylink" );
  
  
  var titleText = [];
  
  for (var i = 0; i < links.length; i++) {
   
    titleText = titleText.concat(links[i].text.split(" "));
    
  }
  
  var shuffledTitleText = shuffle(titleText);
  var titleLength = parseInt(shuffledTitleText.length / links.length);
  
  for (var i = 0; i < links.length; i++) {
   
    var newTitle = "";
    for (var j = 0; j < titleLength; j++) {
    	newTitle += shuffledTitleText.pop() + " ";
    }
    
    links[i].text = newTitle;
    
  }
  
  
});


// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}
