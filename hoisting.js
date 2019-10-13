function callMe() {
  var lyric;
  console.log(lyric);
  lyric = "maybe";
}


function crazy() {
  var thisIsCrazy;
    thisIsCrazy();
  thisIsCrazy = function (){
    console.log("hey!!!")
  }
}

function sayMyName() {
  var name = "Cricky";

  sayMy();

  function sayMy() {
    console.log(name);
    var name = "Kristin";
  }
}
