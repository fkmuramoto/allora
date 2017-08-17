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
    setTimeout(function () {
      $("r-side").addClass("hide")}, 2000);
  });

  $(".click-more").click(function(e){
    e.preventDefault();

    $(this).next().remove();
    $(this).parent().removeClass("text-center").addClass("text-right");
    $(this).removeClass("btn btn-xs click-more").addClass("balloon-right");

    var next_screen = $(this).parent().parent().next();
    $(next_screen).children().each(function(index, element){

      setTimeout(function() {

        $(element).removeClass("hidden")
        $(element).animate({"left": "0px"})

      }, index * 1000 + Math.random() * 750);

    });

    $("#app-window").animate({ scrollTop: $(".teste").prop("scrollHeight")}, 3000);

  });

  $(".click-next").click(function(e){
    e.preventDefault();

    $(this).prev().remove();
    $(this).parent().removeClass("text-center").addClass("text-right");
    $(this).removeClass("btn btn-xs click-next").addClass("balloon-right");

    var next_post = $(this).parent().parent().parent().next();
    $(next_post).children(".screen1").children().each(function(index, element){

      setTimeout(function() {

        $(element).removeClass("hidden")
        $(element).animate({"left": "0px"})

      }, index * 1000 + Math.random() * 750);

    });

    $("#app-window").animate({ scrollTop: $(".teste").prop("scrollHeight")}, 3000);

  });
});







