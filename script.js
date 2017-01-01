$(document).ready(function(){
  var today = new Date()
  var curHr = today.getHours()

  if (curHr < 12) {
    document.getElementById("demo").placeholder = "Good Morning Sam";
  } else if (curHr < 18) {
    document.getElementById("demo").placeholder = "Good Afternoon Sam";
  } else {
    document.getElementById("demo").placeholder = "Good Afternoon Sam";
  }

  $("#demo").on('keyup', function(e) {
      if (e.keyCode == 13) {
          var txt = document.getElementById('demo').value

          if (txt == "vid") {
            window.open("https://www.youtube.com","_self")
          }

          if (txt == "google") {
            window.open("https://www.google.com", "_self")
          }

          if (txt == "uns") {
            window.open("https://unsplash.com", "_self")
          }

          if (txt == "wwd") {
            window.open("http://wishingwelldevelopments.com.au", "_self")
          }

          if (txt == "mes") {
            window.open("https://web.whatsapp.com/", "_self")
          }

          if (txt == "git") {
            window.open("https://github.com", "_self")
          }

          if (txt == "sheep") {
            $('.wallpaper').fadeTo('slow', 0.3, function()
            {
                $("#demo").val("");
                $(this).css("background-image", "url('back.jpg')");
            }).delay(500).fadeTo('slow', 1);

          }

        }
  });

});
