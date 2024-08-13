//login
document.getElementById('login-button').addEventListener('click', function(){
    var catchLoginArea = document.getElementById('login-area');
    catchLoginArea.style.display='none';
    var catchTransactionArea = document.getElementById('transaction-area');
    catchTransactionArea.style.display='block';


});


//deposit
document.getElementById('deposit-button').addEventListener('click', function(){

    //deposit amount that user input
    const catchInputDepositAmountNumber = catchAmountNumber('deposit-amount');

    //current deposit
    updateSpanText('current-deposit-amount' , catchInputDepositAmountNumber);

    //balance
    updateSpanText("current-balance-amount" , catchInputDepositAmountNumber);

    document.getElementById('deposit-amount').value = '';
});




//withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){
    //withdraw amount that user input
    const catchInputWithdrawAmountNumber = catchAmountNumber('withdraw-amount');

    //current withdraw
    updateSpanText('current-withdraw-amount', catchInputWithdrawAmountNumber);

    //balance    
    updateSpanText('current-balance-amount', -1 * catchInputWithdrawAmountNumber);
    

    document.getElementById('withdraw-amount').value = '';
})



//function for input
function catchAmountNumber(id){
    var catchInputAmount = document.getElementById(id).value;
    var catchAmountNumber = parseFloat(catchInputAmount);
    return catchAmountNumber;
};

//function for showing
function updateSpanText(id, catchAmountNumber){
    const currentAmount = document.getElementById(id).innerText;
    const currentNumber = parseFloat(currentAmount);
    const totalAmount = catchAmountNumber + currentNumber;
    document.getElementById(id).innerText = totalAmount;
};





