$(window).on("load", function () {
  // rating section
  $(".rating").click(function () {
    //clicked effect
    $(".rating").removeAttr("id");
    $(this).attr("id", "clicked");
    //rating score
    let rating = $(".rating").index(this) + 1;
    $(".rating-result").text("You selected " + rating + " out of 5");
  });
});
