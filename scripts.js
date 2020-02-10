
$(function() {
  var text = $('.headings div:nth-child(2)').text();
  text = text.replace('[id]', 'achetty');
  text = text.replace('[schoolname]', 'uchicago');
  text = text.replace('[domain]', 'edu');
  text = text.replace(' [dot] ', '.');
  text = text.replace(' [at] ', '@');
  $('.headings div:nth-child(2)').text(text);
});
