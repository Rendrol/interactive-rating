$(window).on("load", function () {
  // rating section
  $(".rating").click(function (e) {
    //clicked effect
    $(".rating").removeAttr("id");
    $(this).attr("id", "clicked");
    //rating score
    let rating = $(".rating").index(this) + 1;
    $("button").click(function (e) {
      window.location.replace("./thankyou.html");
      $(".rating-result").text("sdcvswdcwa5");
      console.log(rating);
    });
    // $(".rating-result").text("You selected " + rating + " out of 5");
  });
});
