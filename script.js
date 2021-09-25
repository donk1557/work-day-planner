 var timeArray = ['.nine', '.ten', '.eleven', '.twelve', '.thirteen', '.fourteen', '.fifteen', '.sixteen', '.seventeen'];
var a = $('#currentDay');
var hour = 9;
setInterval( function() {
    var timeEl = moment().format('MMMM Do YYYY, h:mm:ss a');
    a.text(timeEl);
  }, 1000);

  for(var i=0; i < 9; i++) {
      var check = moment().hour();
      
      if (check < hour) {
        $(timeArray[i]).css({"background-color": "#77dd77", "color": "white"});
       
      } else if (check == hour) {
         $(timeArray[i]).css({"background-color": "#ff6961", "color": "white"});
      } else {
         $(timeArray[i]).css({"background-color": "#d3d3d3", "color": "white"});
      }
      hour++;
  }
