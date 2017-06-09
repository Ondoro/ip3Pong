var pingpong =function(number) {

for (var n=1 ;n <= number;n++) {

  if (n % 15 === 0) {
  $("#output").append("<li>" + "pingpong" + "</li>");
} else if (n % 5 === 0) {
  $("#output").append("<li>"+ "pong"+ "</li>");
} else if (n % 3 === 0) {
$("#output").append("<li>"+"ping"+"</li>");
} else {
  $("#output").append("<li>" + n + "</li>")
}
}
};

$(document).ready(function(){
  $("form#pingPong").submit(function(event){
  event.preventDefault();
  $("#output").text(" ");
  var number= parseInt($("input#number").val());
  var result = pingpong(number);
});
})
