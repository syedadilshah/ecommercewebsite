

$(window).on('scroll load',function()
{



if($(window).scrollTop() > 80)
{
$('.header-2').addClass('active-class');
}
else 
{
    $('.header-2').removeClass('active-class');
}
});

$('.home-slider').owlCarousel({
    items:1,
    loop:true,
    autoplay:true,
    autoplayTimeout:1000,
    autoplayHoverPause:true,
    nav:true,
   
});






$('.small-image img').click(function(){

    $(this).addClass('image-active').siblings().removeClass('image-active');
    let image = $(this).attr('src');
    $('.big-image img').attr('src', image);

});

$('.gallery .btn').click(function(){

    let filter = $(this).attr('data-filter');
    if(filter == 'all'){
        $('.gallery .box').show(400);
    }else{
        $('.gallery .box').not('.'+filter).hide(200);
        $('.gallery .box').filter('.'+filter).show(400);
    }

    $(this).addClass('button-active').siblings().removeClass('button-active');

});
$('section').each(function(){

    let height = $(this).height();
    let offset = $(this).offset().top - 200;
    let top = $(window).scrollTop();
    let id = $(this).attr('id');

    if(top >= offset && top < offset + height){
        $('.header2-menu ul li a').removeClass('active');
        $('.header2-menu').find(`[href="#${id}"]`).addClass('active');
    }

});

