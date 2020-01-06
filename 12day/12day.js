$(window).on("load resize", function() {
    var sW,sH;
    sW = window.innerWidth;
    sH = window.innerHeight;

    $(".content").css(
      "height", sH + "px" 
    );
  }
);
