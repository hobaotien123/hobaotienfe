$(document).ready(function(){
   $(".open").click(function(){
    	$(".bgtop1__menu").slideToggle(1000);
    	$(this).hide();
    	$(".close").show();
  });
   $(".close").click(function(){
    	$(".bgtop1__menu").slideToggle(1000);
    	$(this).hide();
    	$(".open").show();
  });

  //   $(".menusp_2").click(function(){
  //   	$(".icon-bar:nth-child(2)").toggleClass("andi");
  //   	$(".icon-bar:nth-child(1)").toggleClass("ok");
  //   	$(".icon-bar:nth-child(3)").toggleClass("ok2");
  //   	$(this).toggleClass("openm");
 	// });

  //   $(".openm").click(function(){
  //   	$(".icon-bar:nth-child(2)").css("opacity","1");
  //   	$(".icon-bar:nth-child(1)").removeClass("ok");
  //   	$(".icon-bar:nth-child(3)").removeClass("ok2");
  //   	$(this).removeClass("openm");
  //   });

   $('.single-item').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  autoplay: true,
		  autoplaySpeed: 1000,
		  dots:false,
		 prevArrow:'.arrow_prev',
		 nextArrow:'.arrow_next'
	});



});
