$(document).ready(function(){
    var el = $('.header').next();
    
	var altura = el.offset().top;
	
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.header').addClass('header-fixed');
		} else if ($(window).scrollTop()==0){
			$('.header').removeClass('header-fixed');
		}
	});
 
});


function openNav() {
    if( document.getElementById("mySidenav").style.width != "160px"){

    
    document.getElementById("mySidenav").style.width = "160px";
    }
    else if(document.getElementById("mySidenav").style.width != "20px"){
        document.getElementById("mySidenav").style.width = "20px";
    }
  }
  
  