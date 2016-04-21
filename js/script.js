$(function() {
  $("a[href*=\\#]:not([href=\\#])").click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// Will revist this later

// $(document).ready(function () {
//   $("#fakeloader").fakeLoader({
//     timeToHide:1200, //Time in milliseconds for fakeLoader disappear
//     zIndex:999, // Default zIndex
//     spinner:"spinner6",//Options: 'spinner1', 'spinner2', 'spinner3', 'spinner4', 'spinner5', 'spinner6', 'spinner7'
//     bgColor:"#2ecc71", //Hex, RGB or RGBA colors
//     //imagePath:"yourPath/customizedImage.gif" If you want can you insert your custom image
//   });
// });
