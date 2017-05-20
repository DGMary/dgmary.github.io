$(function() {
  $(".gallery").slick({
    dots: true,
    infinite: true,
    centerMode: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerPadding: 0
  }); 

  $('.burger').on('click',function(){
    $('.nav_menu').toggleClass('menu-opened');
  });
});

// page init



/*
 * Add class plugin
 */
// jQuery.fn.clickClass = function(opt) {
//   var options = jQuery.extend({
//     classAdd: 'add-class',
//     addToParent: false,
//     event: 'click'
//   }, opt);

//   return this.each(function() {
//     var classItem = jQuery(this);
//     if(options.addToParent) {
//       if(typeof options.addToParent === 'boolean') {
//         classItem = classItem.parent();
//       } else {
//         classItem = classItem.parents('.' + options.addToParent);
//       }
//     }
//     jQuery(this).bind(options.event, function(e) {
//       classItem.toggleClass(options.classAdd);
//       e.preventDefault();
//       return false;
//     });
//   });
// };