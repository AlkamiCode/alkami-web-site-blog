function hover(element) {
    element.setAttribute('src', '/images/logo_gold.png');
}
function unhover(element) {
    element.setAttribute('src', '/images/logo_white.png');
}

$(document).ready(function(){

  // Float landing page arrow infinitely
  var arrow = $('#landing-arrow');

  function runIt() {
    arrow.css("top", "80%")
    arrow.animate({top:'+=30'}, 1000);
    arrow.animate({top:'-=30'}, 1000, runIt);
  }
  runIt();
});
