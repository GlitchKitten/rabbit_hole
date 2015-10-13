var myKitties =[ {title: "Project One", pic: "img/barcelonasq.jpg"}, {title: "Project Two", pic: "img/yoyomansq.jpg"}, {title: "Project Three", pic: "img/cloudssq.jpg"}, {title: "Project Four", pic: "img/horsessq.jpg"}];


$(document).ready(function(){
  
  var rows = $(".my-row"); //striped background for even rows
  for(var i=0; i<rows.length; ++i) {
    if (i%2===0){
      $(rows[i]).css("background-color", "#DADDE0");
    };
  };
  
 
  for(var i=0; i<myKitties.length; ++i) { //assigning images to divs in work section
    $("#work" + i).css("background-image", "url(" + myKitties[i].pic + ")" );
  };
  
  $(".image").mouseenter(function () { //titles show on mouse hover
    console.log(myKitties[this.id.slice(4)].title); //slice to enable more specific id
    $(this).html("<p class='info'><span class='proj-title'>Title:</span>" + myKitties[this.id.slice(4)].title + "</p>");
  }).mouseleave( function(){ //titles disappear on mouse departure (empty string)
    $("p.info").html("");
  });
  
  
   //Google Maps//
  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(54.5856373,-5.9421596),
      zoom: 9
    };
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
    var marker = new google.maps.Marker({
      position: map.getCenter(),
      map: map,
      title: 'Click to zoom'
    });
    google.maps.event.addListener(marker, 'click', function(){
      map.setZoom(15);
      map.setCenter(marker.getPosition());
    });
  };
    
  google.maps.event.addDomListener(window, 'load', initialize);
  
  $(".message-box").on("keyup", function(){
    console.log("keyup success"); //to ensure keyup works
    var charCount = $(".message-box").val().length; //character count for text area
      console.log(charCount);
        $("#charCount").html("Current characters: " + charCount); //appends to DOM
          if(charCount > 50) { //red text after 50 characters
            $("#charCount").css("color", "red");
          }
          else {
            $("#charCount").css("color", "white");
          }
  });
  
  $(".message-box").css("background-color", "pink");
  $("#submit").on("click", function(){
      console.log("clicked");
        var comment = $(".message-box").val();
          $("#visible-comment").html("Thanks for your submission: " + comment.toUpperCase());
    return false;
  });
  
});//close of documents