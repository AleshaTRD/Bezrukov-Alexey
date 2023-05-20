$(document).ready(function () {
  $("#open").on("click", function () {
    // var property = {
    //     transform: 'translate(0)',
    //     transition: '0.5s',
    //     backgroundColor: 'yellow',
    //     color: black
    // }
    $("#menu").css("transform", "translateY(0)");
    $(this).css("display", "none");
    $("#close").css("display", "block");
  });
  $("#close").on("click", function () {
    // var property = {
    //     transform: 'translate(0)',
    //     transition: '0.5s',
    //     backgroundColor: 'yellow',
    //     color: black
    // }
    $("#menu").css("transform", "translateY(-325px)");
    $(this).css("display", "none");
    $("#open").css("display", "block");
  });

  //   $("#menu").on("click", "a", function (E) {
  //     E.preventDefault();
  //     var id = $(E.currentTarget).attr("href");
  //     var top = $(id).offset().top;
  //     $("body, html").animate(
  //       {
  //         scrollTop: top,
  //       },
  //       1000
  //     );
  //   });
});
