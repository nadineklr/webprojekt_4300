$(document).ready(function (){

  // Listen if thumbnail was clicked, reset style, add new style
  $('.gallery-img').on('click', function (e){

    // reset styles 
    $('.gallery-img').css({
      'opacity': '1',
      'border': '0'
    })

    // change scr of main img to match clicked img

    let clickedImgSrc = $(this).attr('src')
    console.log(clickedImgSrc)

    $('.main-img img').attr('src', clickedImgSrc)

    // console.log(clickedImgSrc)




    // add new styles to target img (clicked image)
    $(e.target).css({
      'opacity': '0.4',
      'border': '1px solid #FFF2EA'
    })
  })

})
 

