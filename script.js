var timeArray = [
  ".nine",
  ".ten",
  ".eleven",
  ".twelve",
  ".thirteen",
  ".fourteen",
  ".fifteen",
  ".sixteen",
  ".seventeen",
];
var a = $("#currentDay");
var hour = 9;


setInterval(function () {               //time function to display current date & time
  var timeEl = moment().format("MMMM Do YYYY, h:mm:ss a");
  a.text(timeEl);
}, 1000);

for (var i = 0; i < 9; i++) {        //color-coder for each timeblock; compares the current hour with hour variable, colors accordingly, and appends hour variable by one
  var check = moment().hour();

  if (check < hour) {
    $(timeArray[i]).css({ "background-color": "#77dd77", color: "white" });
  } else if (check == hour) {
    $(timeArray[i]).css({ "background-color": "#ff6961", color: "white" });
  } else {
    $(timeArray[i]).css({ "background-color": "#d3d3d3", color: "white" });
  }
  hour++;
}
var vent = "";
function addIn() {            //records text in timeblock and saves it in local storage
 for(i=0; i < 9; i++) {
  var ev = $(timeArray[i]);
  vent = ev.val().trim();
  localStorage.setItem(i, JSON.stringify(vent));
 }
}
var save = $(".saveBtn");    
save.on("click", addIn);    //activates save button

for(i=0; i < 9; i++) {
$(timeArray[i]).val(JSON.parse(localStorage.getItem(i)));   //displays saved events
}