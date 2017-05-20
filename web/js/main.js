$(function() {
  $(".gallery").slick({

    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1400,
    responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
  });
  
});
// page init
jQuery(function(){
  jQuery('.burger').clickClass({
    classAdd: 'menu-opened',
    addToParent: true
  });
});

/*
 * Add class plugin
 */
jQuery.fn.clickClass = function(opt) {
  var options = jQuery.extend({
    classAdd: 'add-class',
    addToParent: false,
    event: 'click'
  }, opt);

  return this.each(function() {
    var classItem = jQuery(this);
    if(options.addToParent) {
      if(typeof options.addToParent === 'boolean') {
        classItem = classItem.parent();
      } else {
        classItem = classItem.parents('.' + options.addToParent);
      }
    }
    jQuery(this).bind(options.event, function(e) {
      classItem.toggleClass(options.classAdd);
      e.preventDefault();
      return false;
    });
  });
};