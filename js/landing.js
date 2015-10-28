
window.onload = init;


function init(){

	$("#home").hover(function(){
		$("#home").animate({
        width: '400px'
    });
	}, function() {
		$("#home").animate({
        width: '120px'
    });
  });

	$("#portfolio").hover(function(){
		$("#portfolio").animate({
				width: '400px'
		});
	}, function() {
		$("#portfolio").animate({
				width: '120px'
		});
	});

	$("#connect").hover(function(){
		$("#connect").animate({
				width: '400px'
		});
	}, function() {
		$("#connect").animate({
				width: '120px'
		});
	});

	$(window).resize(function(){
		//if ($(window).width() <= 800){
		console.log($(window).width());
		//}
	});



}
