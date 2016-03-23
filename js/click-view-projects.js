$(document).ready(function(){
  $("#our-work-button").on("click", function() {
    if ($( window ).width() > 735) {
      $("html, body").animate({ scrollTop: 0 }, "slow")
      setTimeout( function() {
        $("#our-work-link").click()
      }, 1000);
    } else {
      setTimeout( function() {
        $("a.toggle").click()
      }, 100);
    }
  })
})
