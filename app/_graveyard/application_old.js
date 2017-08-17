$(function(){

  $(".click-more").click(function(e){
    e.preventDefault();

    $(this).next().remove();
    $(this).parent().removeClass("text-center").addClass("text-right");
    $(this).removeClass("btn btn-xs").addClass("balloon-right");

    var target = $(this).data("target");
    $(target).children().each(function(index, element){
      setTimeout(function() {
        $(element).removeClass("hidden") }, index * 1250 + Math.random() * 750);
    });

    $("#app").animate({ scrollTop: $("#app").prop("scrollHeight")}, 3000);

  });

  $(".click-next").click(function(e){
    e.preventDefault();

    $(this).prev().remove();
    $(this).parent().removeClass("text-center").addClass("text-right");
    $(this).removeClass("btn btn-xs").addClass("balloon-right");

    var target = $(this).data("target");
    $(target).children().each(function(index, element){
      setTimeout(function() {
        $(element).removeClass("hidden") }, index * 1250 + Math.random() * 750);
    });


    $("#app").animate({ scrollTop: $("#app").prop("scrollHeight")}, 3000);
  });
});
