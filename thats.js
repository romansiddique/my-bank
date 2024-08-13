//withdraw
document.getElementById('withdraw-button').addEventListener('click', function(){

    //withdraw amount that user input
    var catchInputWithdrawAmount = document.getElementById('withdraw-amount').value;
    var catchInputWithdrawNumber = parseFloat(catchInputWithdrawAmount);

    //current withdraw amount
    var currentWithdrawAmount = document.getElementById('current-withdraw-amount').innerText;
    var currentWithdrawNumber = parseFloat(currentWithdrawAmount);
    if(catchInputWithdrawNumber > currentWithdrawNumber){ //no 
        window.alert("You can not withdraw. Because, your withdraw amount is less than your current withdraw amount.");
    }
    else{
        var totalWithdrawAmount = currentWithdrawNumber -  catchInputWithdrawNumber;
        document.getElementById('current-withdraw-amount').innerText = totalWithdrawAmount;

        //balance
        const currentBalanceAmount =  document.getElementById('current-balance-amount').innerText;
        const currentBalanceNumber = parseFloat(currentBalanceAmount);
        const totalBalanceAmount = currentBalanceNumber -  catchInputWithdrawNumber;
        document.getElementById('current-balance-amount').innerText = totalBalanceAmount;

        document.getElementById('withdraw-amount').value = '';
    }  
})






//balance
const currentBalanceAmount =  document.getElementById('current-balance-amount').innerText;
const currentBalanceNumber = parseFloat(currentBalanceAmount);
const totalBalanceAmount = currentBalanceNumber + catchDepositAmountNumber;
document.getElementById('current-balance-amount').innerText = totalBalanceAmount;

