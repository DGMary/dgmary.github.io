$(document).ready(function(){
  $('.select').styler();
  $('.validate_phone').mask('+38 (999) 999 99 99');
  $('.form_validate').formValidation();

  function formThx (id , url) {
    $(id).formValidation().on('submit', function (e) {
      e.preventDefault();
      var main_modal = $('#modal-main');			    
      if (!$(this).find('.input-holder').hasClass('error')) {
        $(this).find(".input, .textarea").val("");
        main_modal.find(".modal-dialog").load( url , function() {main_modal.modal('show');});
      }
    });
  };  
  formThx ('#contact-form' , "modals/thx.html");

  function scrollToForm(){	
    $(".to-form").on("click", function (event) {     	
      event.preventDefault(); 	
      var id  = $(this).data('href'),	
        top = $(id).offset().top;	
      $('body,html').animate({scrollTop: top}, 5);	
    });	
  };	
  scrollToForm();


  $('.burger-menu').on('click', function (e) {
    e.preventDefault();
    if ($(this).parents('.header').hasClass('opened')) {
        $(this).parents('.header').removeClass('opened');
        $('body').css('overflow' , 'auto');
    } else {
        $(this).parents('.header').addClass('opened');
        $('body').css('overflow' , 'hidden');
      }
  });

  $(document).mouseup(function (e){
		var div = $(".header"); 
		if (!div.is(e.target) && div.has(e.target).length === 0) { 
      div.removeClass('opened');
      $('body').css('overflow' , 'auto');
		}
	});


  $('.partner__slider').not('.slick-initialized').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    infinite: false,
    responsive: [ 
        {
            breakpoint: 1023,
              settings: {
                infinite: true,
                arrows: false,
                slidesToShow: 3
              }
        },
        {
          breakpoint: 991,
            settings: {
              slidesToShow: 2,
              arrows: false
            }
        }  
        ]
  });

  $('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        767:{
            items:3,
            animateOut: "fadeOut",
            animateIn: "fadeIn",
            smartSpeed: 800,
        }
    }
});


  $('.grid').masonry({
    itemSelector: '.grid-item',
    percentPosition: true
  });



  var baseMapLayer = new ol.layer.Tile({
    source: new ol.source.OSM()
  });
  var map = new ol.Map({
    target: 'map',
    layers: [ baseMapLayer],
    view: new ol.View({
            center: ol.proj.fromLonLat([ 36.1457, 49.9947]), 
            zoom: 6 
          })
  });
  
  //Adding a marker on the map
  var marker = new ol.Feature({
    geometry: new ol.geom.Point(
      ol.proj.fromLonLat([ 36.1457 , 49.9947])
    ),  
  });
  var vectorSource = new ol.source.Vector({
    features: [marker]
  });
  var iconStyle = new ol.style.Style({
    image : new ol.style.Icon(({
        anchor : [ 0.5, 46 ],
        anchorXUnits : 'fraction',
        anchorYUnits : 'pixels',
        opacity : 0.75,
        src : 'img/marker.svg'
    }))
});
  var markerVectorLayer = new ol.layer.Vector({
    source: vectorSource,
    style : iconStyle
  });
  map.addLayer(markerVectorLayer);
  
  
initModal();
/* modals */
  function initModal() {
    var main_modal = $('#modal-main');      
    // при закриванні модалі
    main_modal.on('hidden.bs.modal', function () {});

    // при показуванні модалі
    main_modal.on('show.bs.modal', function () {});

    // клік по підкладці модалі
    $(document).on('click', '.modal-backdrop', function () {});

    $(document).on('click', '[data-openmodal]', function(e) {
          e.preventDefault();
          
      var link = $(this).data('openmodal');
      main_modal.find('.modal-dialog').load(link, function() {
        main_modal.modal('show');

      })
    })
  }

  $('.popup-gallery').each(function () {
      $(this).magnificPopup({
          delegate: 'a',
          type: 'image',
          gallery: {
              enabled: true,
              navigateByImgClick: true
          },
          image: {
            titleSrc: function(item) {
              return item.el.attr('title');
            }
        },
          fixedContentPos: false
      });
  });
  initSlickMagnificPopup()
  
});

function initSlickMagnificPopup(){
  if($(window).width() < 768) {
    $('.popup-gallery').off('click');
    $('.popup-gallery').not('.slick-initialized').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
      infinite: false
    });
    setTimeout(function() {
      $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true
      });
    }, 0);
    var sliderIsLive = false;
  } else {
    $('.gallery-link').on('click', function () {
      $(this).next().magnificPopup('open');
    });
    if(sliderIsLive) {
      $('.popup-gallery').unslick();
    }    
  }
};

$(window).on('resize' , function() {
  console.log()
  initSlickMagnificPopup()
})