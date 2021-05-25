// From Validation for contact form


// Click event
document.querySelector('#submit').addEventListener('click', formValidation)

function formValidation(e) {
  e.preventDefault()

  console.log('click works')

  // Input values that need to be checked
  let data = {}

  // error set
  let errors = {}

  // properties data
  data.name = document.querySelector('#name-input').value
  data.email = document.querySelector('#email-input').value
  data.tel = document.querySelector('#tel-input').value
  data.time = document.querySelector('select').value
  data.message = document.querySelector('textarea').value

  console.log(data)


  // name validation
  if (!data.name) {
    errors.name = 'No name provided'
  } else {
    console.log('name provided')
  }

  // mail validation
  if (!data.email) {
    errors.email = 'No email'
  } else {
    // validate provided mail adress
    let emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    if(!emailRegEx.test(data.email)){
      errors.email = 'No valid email'
    } else {
      console.log('email provided is valid')
    }
  }

  // tel validation 
  if (!data.tel) {
    errors.tel = document.querySelector('#tel-error')
  } else {

    let telRegEx = /0(2[1-246-7]|3[1-4]|4[13-4]|5[25-6]|6[1-2]|7[15-68-9]|8[17]|91)[0-9]{7}/
    // validate provided telephone number (swiss numbers only regrex)
    if(!telRegEx.test(data.tel)){
      errors.tel = document.querySelector('#tel-error')
    } else {
      console.log('tel number provided is valid')
    }

  }


  // time select validation 
  if (!data.time) {
    errors.time = document.querySelector('#time-error')
  } else {
    console.log('time was selected')
  }


  // message validation 
  if (!data.message) {
    errors.message = document.querySelector('#message-error')
  } else {
    console.log('message was written')
  }

  console.log(errors)


  // form completed
  if(Object.keys(errors).length > 0) {
    
    // show error messages
    displayErrors(errors)
   
  } else { 
    document.querySelector('.infobox').innerHTML ='Deine Nachricht wurde versandt und wird schnellstmöglich beantwortet.'
    // hide time, message & button
    document.querySelector('.time-group').style.display = "none"
    document.querySelector('.message').style.display = "none"
    document.querySelector('.buttons').style.display = "none"

    
    // success message
    document.querySelector('.infobox').innerHTML = `
    <h2>Danke ${data.name}!</h2>
    <p>Deine Nachricht wurde versandt und wir melden uns schnellstmöglich bei dir.</p>
    `
    
    // Fader animation
    faderMove()

    // Scroll to success message
    document.querySelector("h1").scrollIntoView()
  }
}


// Error spans
let nameError = document.querySelector('#name-error')
let mailError = document.querySelector('#mail-error')
let telError = document.querySelector('#tel-error')
let timeError = document.querySelector('#time-error')
let messageError = document.querySelector('#message-error')


// error spans display

function displayErrors(errors){
  if (errors.name) {
    nameError.classList.add('show')
  } else if (!errors.name && nameError.classList.contains('show') ) {
    nameError.classList.remove('show')
  }
  console.log(errors)

  
  if (errors.email) {
    mailError.classList.add('show')
  } else if (!errors.email && mailError.classList.contains('show') ) {
    mailError.classList.remove('show')
  }


  if (errors.tel) {
    telError.classList.add('show')
  } else if (!errors.tel && telError.classList.contains('show') ) {
    telError.classList.remove('show')
  }
  

  if (errors.time) {
    timeError.classList.add('show')
  } else if (!errors.time && timeError.classList.contains('show') ) {
    timeError.classList.remove('show')
  }

  if (errors.message) {
    messageError.classList.add('show')
  } else if (!errors.message && messageError.classList.contains('show') ) {
    messageError.classList.remove('show')
  }
}


// fader animation success
function faderMove () {
  $('.fader').animate({
    top: 30
  }, 1500, function(){


  })
  
}
