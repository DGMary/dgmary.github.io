$(document).ready(function(){
  $('.select').styler();

  $('.burger-menu').on('click', function (e) {
    e.preventDefault();
    if ($(this).parents('.header').hasClass('opened')) {
        $(this).parents('.header').removeClass('opened');
    } else {
        $(this).parents('.header').addClass('opened');
      }
  });
  $(document).mouseup(function (e){
		var div = $(".header"); 
		if (!div.is(e.target) && div.has(e.target).length === 0) { 
			div.removeClass('opened');
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

  // $('.review__slider').not('.slick-initialized').slick({
  //   centerMode: true,
  //   slidesToShow: 3,
  //   infinite: true,
  //   arrows: true,
  //   accessibility: false,
  //   touchMove: false,
  //   dots: true
  // });



  $('.grid').masonry({
    // options
    itemSelector: '.grid-item'
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
})