$(function() {

  $('#box').draggable({ snap:".ui-widget-header", spanMode:"inner"});
  $('.ui-widget-header').droppable({
    drop: function(event, ui) {
      $(this).css("color", "red");
    }
  });
});
