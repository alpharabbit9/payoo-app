// * Step-1 : add eventlistener to cashout btn

document.getElementById('btn-cashOut')
.addEventListener('click', function(event){
    event.preventDefault();

    const cashOutAmount = document.getElementById('cashOutMoney').value;
    const cashNumber = parseFloat(cashOutAmount) ;


    const cashOutPin = document.getElementById('pinNumberPin').value;
    // console.log(cashOutPin)

    if(cashOutPin === '1234')
    {
        const balance = document.getElementById('balance').innerText;
        const balanceNumber = parseFloat(balance)

        const cashOutBalance = balanceNumber - cashNumber ;

        // console.log(cashOutBalance);

        document.getElementById('balance').innerText = cashOutBalance ;

    }
    else
    {
        alert('Please try again')
    }

})