$(document).ready(function(){
  $(window).scroll(function(){
    if(this.scrollY > 20)
      $(".navbar").addClass("sticky");
    else
      $(".navbar").removeClass("sticky");
  });

  $('.menu-toggler').click(function(){
    $(this).toggleClass("active");
    $(".navbar-menu").toggleClass("active");
  });

  $(".works").magnificPopup({
    delegate: 'a',
    type: 'image',
    gallery:{enabled:true}
  });

//   new Glide(".images", {
//       type: "carousel",
//       perView: 3,
//       gap: 10,
//       autoplay: 1,
//       variableWidth: true,
//       animationDuration: 15000,
//       animationTimingFunc: 'linear',
//       breakpoints: {
//           1200:{
//               perView: 3
//           },
//           800:{
//               perview: 1
//           }
//       }
//   }).mount();
});

