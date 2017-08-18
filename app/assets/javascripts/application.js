// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require turbolinks
//= require jquery
//= require jquery_ujs
//= require bootstrap-sprockets
//= require_tree .

$(function(){

  $(document).ready(function(){

    $("#app").animate({ scrollTop: $("#app").prop("scrollHeight")}, 3000);

    if(screen.width < 500)
      setTimeout(function () {
        $(".r-side").addClass("show")}, 2000);
  });

  $(".click-more").click(function(e){
    e.preventDefault();

    $(this).next().remove();
    $(this).parent().removeClass("text-center").addClass("text-right");
    $(this).removeClass("btn btn-xs click-more").addClass("btn-clicked");

    var more = $(this).parent().parent().next();
    $(more).children().each(function(index, element){

      setTimeout(function() {

        $(element).removeClass("hidden")
        $(element).animate({"left": "0px"})

      }, index * 1000 + Math.random() * 750);

    });

    $("#app").animate({ scrollTop: $("#app").prop("scrollHeight")}, 3000);

  });

  $(".click-next").click(function(e){
    e.preventDefault();

    $(this).prev().remove();
    $(this).parent().removeClass("text-center").addClass("text-right");
    $(this).removeClass("btn btn-xs click-next").addClass("btn-clicked");

    var next = $(this).parent().parent().parent().next();
    $(next).children(".intro").children().each(function(index, element){

      setTimeout(function() {

        $(element).removeClass("hidden")
        $(element).animate({"left": "0px"})

      }, index * 1000 + Math.random() * 750);

    });

    $("#app").animate({ scrollTop: $("#app").prop("scrollHeight")}, 3000);

  });

  $(".click-start").click(function(e){
    e.preventDefault();

    var start = $(this).parent().next();
    $(start).children(".intro").children().each(function(index, element){

      setTimeout(function() {

        $(element).removeClass("hidden")
        $(element).animate({"left": "0px"})

      }, index * 1000 + Math.random() * 750);

    });

    $(this).remove();
    $("#app").animate({ scrollTop: $("#app").prop("scrollHeight")}, 3000);

  });
});






