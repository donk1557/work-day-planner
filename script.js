
var a = $('#currentDay');

setInterval( function() {
    var timeEl = moment().format('MMMM Do YYYY, h:mm:ss a');
    a.text(timeEl);
  }, 1000);