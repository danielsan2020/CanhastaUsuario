(function ($) { 'use strict';
	

	// e-commerce touchspin
  $('input[name=\'product-quantity\']').TouchSpin();

  const buttonNumCanhastasUp = document.getElementsByClassName('bootstrap-touchspin-up');
  const buttonNumCanhastasDown = document.getElementsByClassName('bootstrap-touchspin-down');
  const inputNumCanhastas = document.getElementById('product-quantity');
  const numberOfproductos = document.getElementById('number-of-productos');
  numberOfproductos.innerHTML = inputNumCanhastas.value;

  console.log(buttonNumCanhastasUp);

  const getNumberCanhastas = button => {
    button.addEventListener('touchstart', e => {
      numberOfproductos.innerHTML = inputNumCanhastas.value;
    });
    button.addEventListener('click', e => {
      numberOfproductos.innerHTML = inputNumCanhastas.value;
    });
  };

  getNumberCanhastas(buttonNumCanhastasDown[0]);
  getNumberCanhastas(buttonNumCanhastasUp[0]);

	// Video Lightbox
	$(document).on('click', '[data-toggle="lightbox"]', function(event) {
	    event.preventDefault();
	    $(this).ekkoLightbox();
	});
	

// Count Down JS
$('#simple-timer').syotimer({
    year: 2019,
    month: 5,
    day: 9,
    hour: 20,
    minute: 30
});


// Revolution Slider Init
  var tpj=jQuery;
      var revapi26;
      tpj(document).ready(function() {
        if(tpj('#home_slider').revolution === undefined){
          revslider_showDoubleJqueryError('#home_slider');
        }else{
          revapi26 = tpj('#home_slider').show().revolution({
            sliderType:'standard',
            jsFileLocation:'revolution/js/',
            sliderLayout:'fullscreen',
            dottedOverlay:'none',
            delay:4000,
            navigation: {
              keyboardNavigation:'off',
              keyboard_direction: 'horizontal',
              mouseScrollNavigation:'off',
              mouseScrollReverse:'default',
              onHoverStop:'off',
              touch:{
                touchenabled:'on',
                touchOnDesktop:'off',
                swipe_threshold: 75,
                swipe_min_touches: 1,
                swipe_direction: 'horizontal',
                drag_block_vertical: false
              },
              arrows: {
                style: 'zeus',
                enable:true,
                hide_under:778,
                hide_onleave:false,
                      tmp: '<div class=\'tp-arr-allwrapper\'><div class=\'tp-arr-imgholder\'></div></div>'
              },
              bullets: {
                enable:true,
                hide_onmobile:false,
                style:'bullet-bar',
                hide_onleave:false,
                direction:'horizontal',
                h_align:'center',
                v_align:'bottom',
                h_offset:0,
                v_offset:30,
                space:5,
                tmp:''
              }
            },
            responsiveLevels:[1240,1024,778,480],
            visibilityLevels:[1240,1024,778,480],
            gridwidth:[1240,1024,778,480],
            gridheight:[868,768,960,720],
            lazyType:'none',
            parallax: {
              type:'scroll',
              origo:'slidercenter',
              speed:2000,
              levels:[5,10,15,20,25,30,35,40,45,46,47,48,49,50,51,55]
            },
            shadow:0,
            spinner:'off',
            stopLoop:'off',
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:'off',
            autoHeight:'off',
            fullScreenAutoWidth:'off',
            fullScreenAlignForce:'off',
            fullScreenOffsetContainer: '',
            fullScreenOffset: '60px',
            hideThumbsOnMobile:'off',
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
              simplifyAll:'off',
              nextSlideOnWindowFocus:'off',
              disableFocusListener:false
            }
          });
        }
      }); /*ready*/


})(jQuery);
