$(function() {
  // id「#hide-text」対するclickイベント
  $('#btn-text').click(function() {
    if(document.getElementById('btn-text').textContent === '説明を表示'){
      console.log('True');
      $('#text').slideDown();
      $('.btn').text('説明を隠す');
    } else {
      console.log('False');
      $('#text').slideUp();
      $('.btn').text('説明を表示');
    }
    
  });
});

