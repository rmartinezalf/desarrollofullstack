$(function(){

	"use strict";

	var topoffset = 50;  // Variable para la altura de la navegación.
	var slides = $('#inicio .item').length;
	var wheight = $(window).height();
	var randSlide = Math.random()*slides;

	$('#inicio .item').eq(Math.floor(randSlide)).addClass('active');

	$('.fullheight').css('height',wheight);

	$('#inicio .item img').each(function(){
	     var imgSrc = $(this).attr('src');
	     $(this).parent().css({'background-image':'url('+imgSrc+')'});
	     $(this).remove();
	});

	$(window).resize(function(){
	    wheight = $(window).height();
	    $('.fullheight').css('height',wheight);	
	});

	//Activando ScrollSpy
	$('body').scrollspy({
	       target: ' .navbar-fixed-top',
	       offset: topoffset
	});

	 var hash = $(this).find('li.active a').attr('href');
	     if(hash !== '#inicio'){
		$('header .nav').addClass('inbody');
	      }else{
		$('header .nav').removeClass('inbody')
	      }

	$('.navbar-fixed-top').on('activate.bs.scrollspy', function(){
	        var hash = $(this).find('li.active a').attr('href');
	         if(hash !== '#inicio'){
		$('header .nav').addClass('inbody');
	         }else{
		$('header .nav').removeClass('inbody')
	         }
	});

	$(function() {
	  $('nav a[href*=#]:not([href=#])').click(function() {
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	       $('html,body').animate({
	          scrollTop: target.offset().top
	        }, 1000);
	        return false;
	      }
	    }
	  });
	});

	for(var i=0; i<slides; i++){
	      var inserText = '<li data-target="#inicio" data-slide-to="'+i+'"';
	      	if(i === Math.floor(randSlide)){
	      		inserText += 'class="active"';
	      	}
	      inserText += '></li>';
	      $('#inicio ol').append(inserText);	
	}

	$('.carousel').carousel({
		pause: false
	});
});


