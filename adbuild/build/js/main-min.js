$(document).ready(function(){var e;$(".select").styler(),$(".validate_phone").mask("+38 (999) 999 99 99"),$(".form_validate").formValidation(),e="modals/thx.html",$("#contact-form").formValidation().on("submit",function(o){o.preventDefault();var a=$("#modal-main");$(this).find(".input-holder").hasClass("error")||($(this).find(".input, .textarea").val(""),a.find(".modal-dialog").load(e,function(){a.modal("show")}))}),$(".burger-menu").on("click",function(e){e.preventDefault(),$(this).parents(".header").hasClass("opened")?($(this).parents(".header").removeClass("opened"),$("body").css("overflow","auto")):($(this).parents(".header").addClass("opened"),$("body").css("overflow","hidden"))}),$(document).mouseup(function(e){var o=$(".header");o.is(e.target)||0!==o.has(e.target).length||(o.removeClass("opened"),$("body").css("overflow","auto"))}),$(".partner__slider").not(".slick-initialized").slick({slidesToShow:4,slidesToScroll:1,dots:!1,arrows:!0,infinite:!1,responsive:[{breakpoint:1023,settings:{infinite:!0,arrows:!1,slidesToShow:3}},{breakpoint:991,settings:{slidesToShow:2,arrows:!1}}]}),$(".owl-carousel").owlCarousel({center:!0,items:1,loop:!0,margin:10,nav:!0,responsive:{767:{items:3,animateOut:"fadeOut",animateIn:"fadeIn",smartSpeed:800}}}),$(".grid").masonry({itemSelector:".grid-item"});var o,a=new ol.layer.Tile({source:new ol.source.OSM}),n=new ol.Map({target:"map",layers:[a],view:new ol.View({center:ol.proj.fromLonLat([36.1457,49.9947]),zoom:6})}),t=new ol.Feature({geometry:new ol.geom.Point(ol.proj.fromLonLat([36.1457,49.9947]))}),r=new ol.source.Vector({features:[t]}),s=new ol.style.Style({image:new ol.style.Icon({anchor:[.5,46],anchorXUnits:"fraction",anchorYUnits:"pixels",opacity:.75,src:"img/marker.svg"})}),i=new ol.layer.Vector({source:r,style:s});n.addLayer(i),(o=$("#modal-main")).on("hidden.bs.modal",function(){}),o.on("show.bs.modal",function(){}),$(document).on("click",".modal-backdrop",function(){}),$(document).on("click","[data-openmodal]",function(e){e.preventDefault();var a=$(this).data("openmodal");o.find(".modal-dialog").load(a,function(){o.modal("show")})})});