// ! Add money to account

// * step-1 : Click the button to get input value

document.getElementById('btn-addMoney').addEventListener('click',function(event){
    event.preventDefault();
    // *Step-2 : get moeny and pin
    const inputMoney = document.getElementById('inputMoney').value;
    // console.log(inputMoney)
    const addMoneyNumber = parseFloat(inputMoney); //? to chnage it from string to float
    // console.log(addMoneyNumber)

    const pin = document.getElementById('pinNumber').value ;
    // console.log(pin) ;

    


    // *step -3 : Validtion of pin number
    
    if(pin === '1234')
    {
        const balance = document.getElementById('balance').innerText;
        // console.log(balance)
        const balanceNumber = parseFloat(balance);
        // console.log(balanceNumber)

        const newBalance = balanceNumber + addMoneyNumber ;
        // console.log(newBalance)

        // * step-4 : updating the dom with the new balance

        document.getElementById('balance').innerText = newBalance ;
    }

    else{
        alert('please try again')
    }
})