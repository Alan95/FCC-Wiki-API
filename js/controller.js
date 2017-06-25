$(document).ready(function() {
    console.log("Online");

    function saver() {
      var inputData = $("input").val();
      return inputData;
    }

  //animating i + h2 + div:main on click/doubleclick
    $(".material-icons").click(function() {
      $("#input").fadeIn(800).css("display", "inline");
});

    $(".material-icons").click(function() {

        $("h2").fadeOut(900);
        $("#img").fadeOut(900);
        $(".main").animate({

            "marginTop": "10px"

        }, 1000, function() {

            var g = saver();

            ajaxe(g);
        });



    });

    //animating h2 + div:main + i on keypress
    $("#input").keypress(function(e) {


        if (e.which == 13) {
            $("h2").fadeOut(900);
            $("#img").fadeOut(900);
            $(".main").animate({

                "marginTop": "10px"

            }, 1000, function() {
                $('.main').addClass('animated bounce');
                var s = saver();
                ajaxe(s);
            });


        }
    });
});
