
$(".handler").click(function(){
	$("nav ul li").toggleClass("show");
	$("nav ul").toggleClass("show");

});

$(window).scroll(function(){
	var scrollPostion = $(document).scrollTop();

	if(scrollPostion > 50){
		$('nav ul').addClass("shrink");
		// $('nav ul').fadeIn(5000);
	}

	else{
		$('nav ul').removeClass("shrink");	
		// $('nav ul').fadeIn(5000);
	};
});
