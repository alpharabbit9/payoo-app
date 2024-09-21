// ! We have to take the phone number and pin using event handler

// *Step-1 : Get log in button
document.getElementById('btn-login').addEventListener('click', function(event)
{
    event.preventDefault(); // to prevent the form page reload over and over again
    console.log('log in button click');

    // *step-2 : get the phone number value

    const phoneNumber = document.getElementById('phoneNumber').value ;

    // console.log(phoneNumber)

    // * step-3 : get the pin number

    const pin = document.getElementById('pin').value ;

    // console.log(pin)

    // * step-4 : validation of inputs

    if(phoneNumber === '01865688770' && pin === '1234')
    {
        window.location.href='/home.html'

    }

    else{
        alert("Enter correct data")
    }



})