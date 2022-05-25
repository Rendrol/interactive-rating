$(window).on("load", function () {
  // rating section
  $(".rating").click(function (e) {
    //clicked effect
    $(".rating").removeAttr("id");
    $(this).attr("id", "clicked");
    //rating score
    let rating = $(".rating").index(this) + 1;
    $("button").click(function (e) {
      $(".rating-result").text("You selected " + rating + " out of 5");
      $("#rating-section").css("display", "none");
      $("#thankyou-section").css("display", "inline-block");
      console.log(rating);
    });
  });
});
