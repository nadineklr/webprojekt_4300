$(document).ready(function (){

  // global variables

  const prevBtn = $('a.button_zurueck')
  const nextBtn = $('a.button_weiter')
  const checkBox = $('#toggle_autoplay')


  //  Slider 
  let slider = $('#slideshow')
  let sliderUl = slider.children('ul')
  let slides = sliderUl.children('li')
  let slideCount = slides.length
  let slideWidth = slides.width()
  let slideHeight = slides.height()
  let sliderUlWidth = slideCount * slideWidth
  let sliderInterval 


  //  CSS changes

  // size change of slider box
  slider.css({
    width: slideWidth,
    height: slideHeight
  })

  // console.log(slideWidth + 50)

  // ul slides container
  sliderUl.css({
    width: sliderUlWidth,
    marginLeft: - slideWidth
  })

  // last slide prepend for the right order
  slides.last().prependTo(sliderUl)


  // Controls
  prevBtn.on('click', moveLeft)
  nextBtn.on('click', moveRight)
  checkBox.on('click', onSliderToggle)


  // FUNCTIONS
  function moveLeft (e) {
    e.preventDefault()

    sliderUl.animate({
      left: + slideWidth,
    
    }, 300, function (){
      // take the first li i the ul and append it to the end of the ul 
      $(this).children('li').last().prependTo(sliderUl)
      // reset the value of left
      $(this).css('left', '')
    })
  }


  function moveRight (e) {
    if ( e ){
      e.preventDefault()
    }

    sliderUl.animate({
      left: - slideWidth
    }, 300, function() {
      // take the first li i the ul and append it to the end of the ul 
      $(this).children('li').first().appendTo(sliderUl)
      // reset the value of left
      $(this).css('left', '')
    })
  }


  // Autoplay function checkbox

  function onSliderToggle (e) {
    // console.log('it works')

    let check = $(e.currentTarget)
    if (check.is(':checked')){
      sliderInterval = setInterval(moveRight, 6000)
    } else {
      clearInterval(sliderInterval)
    }

  }


})