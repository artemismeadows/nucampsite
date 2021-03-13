$(function() {
    $(".carousel").carousel( { interval: 2000 } );
    $("#carouselButton").click(function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });

    $(document).on('click', '#reserveButton', function () {
        //Your function goes here..//
		$('#reserveModal').modal('show');
	});

    $(document).on('click', '#loginButton', function () {
        //Your function goes here..//
		$('#loginModal').modal('show');
	});
});