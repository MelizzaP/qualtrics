$(document).ready(function (){
  audiojs.events.ready(function() {
    var as = audiojs.createAll();
  });

  var clickCount = 0;

  $('.trigger').click(function () {
    clickCount++;
    timePlayed = $('.played')
                  .text()
                  .split(':')
                  .map(function(n) {
                    return parseInt(n);
                  });
    timePlayed = timePlayed[0] * 60 + timePlayed[1];
    if (timePlayed > 0) {
      return timePlayed;
      }
  });
});
