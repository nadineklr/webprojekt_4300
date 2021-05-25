$(document).ready( function (){

 
  
  // Top Navigation Leistungen Dropdown Top Nav
  $('#services-trigger').click( function() {
    $(this).children().toggleClass('fa-chevron-down')
    $(this).children().toggleClass('fa-chevron-up')

    $('#services-dropdown').slideToggle()
  })


  // Burger Menu mobile
  $('#burger').click( function (){

  //  console.log( $('#burger'))
    $(this).toggleClass('fa-bars')
    $(this).toggleClass('fa-times')


    $('#mobile-nav').slideToggle()
  })


  // Back to top Button
  // Scroll --> einblenden bei kleinen Geräten max. 990px
  // console.log(window.innerWidth)

  
  let deviceWidth = window.innerWidth

  // adjust deviceWidth when window is resized
  $(window).resize( function () {
    deviceWidth = window.innerWidth
    
  console.log(deviceWidth)

  })
 

  if (deviceWidth < 990) { 
    $(window).scroll(function() {
      // Fade in when scrolled
      if ($(this).scrollTop() < 300) {
        $('#triggerToTop').fadeOut()
      } else { // Fade out at the top
        $('#triggerToTop').fadeIn()
      } 
    })
  } else {
    $('#triggerToTop').css('display', 'none')
  } 

  // Click event back to top button
  $('#triggerToTop').click( function(){
    $('html', 'body').animate({
      srcollTop: 0 }, 1000)
  })





})

