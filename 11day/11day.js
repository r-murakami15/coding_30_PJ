$('li').hover(
  function() {
    $(this).append($("<span> ズノック。</span>"));
  },
  function() {
    $(this).find("span:last").remove();
  }
);


$(function(){

  $("#modal-open").click(
    function() {
      $(this).blur();
      if($("#modal-overlay")[0]) return false;

      $("body").append('<div id="modal-overlay"></div>');
      centeringModalSyncer();

      $("#modal-overlay,#modal-content").fadeIn("slow");

      $("#modal-overlay,#modal-close").unbind().click(function(){
        $("#modal-content,#modal-overlay").fadeOut("slow",function(){
          $("#modal-overlay").remove();
        });
      });
    }
  );

  $(window).resize(centeringModalSyncer);

  function centeringModalSyncer(){
    var w = $(window).width();
    var h = $(window).height();

    var cw = $("#modal-content").outerWidth();
    var ch = $("#modal-content").outerHeight();

    var pxleft = ((w - cw)/2);
    var pxtop = ((h - ch)/2);

    $("#modal-content").css({
      "left": pxleft + "px",
      "top": pxtop + "px"
    });
    
  }

});