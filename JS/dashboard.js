document.getElementById('btn-deposit').addEventListener('click', function () {

    const dipositField = document.getElementById('deposit-amount');
    const newDipositAmountString = dipositField.value;
    const newDipositeAmount = parseFloat(newDipositAmountString);
    if(isNaN(newDipositeAmount)){
        alert("Please deposit some amount");
        return;
    }


    const totalDeposit = document.getElementById('deposit');
    const previousDepositString = totalDeposit.innerText;
    const previousDeposit = parseFloat(previousDepositString);


    const currentDeposit = newDipositeAmount + previousDeposit;

    totalDeposit.innerText = currentDeposit;
    dipositField.value = '';

    const balance = document.getElementById('balance');
    const previousBalanceString = balance.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    const totalBalance = previousBalance + newDipositeAmount;
    balance.innerText = totalBalance;



})

document.getElementById('btn-withdraw').addEventListener('click', function () {

    const withdrawField = document.getElementById('Withdraw-amount');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    if(isNaN(newWithdrawAmount)){
        alert("Please withdraw some amount");
        return;
    }

    const totalWithdraw = document.getElementById('Withdraw');
    const previousWithdrawString = totalWithdraw.innerText;
    const previousWithdraw = parseFloat(previousWithdrawString);


    withdrawField.value = '';

    const balance = document.getElementById('balance');
    const previousBalanceString = balance.innerText;
    const previousBalance = parseFloat(previousBalanceString);

    if (newWithdrawAmount > previousBalance) {
        alert("Baap er tk nai");
        return;
    }


    const currentWithdraw = newWithdrawAmount + previousWithdraw;
    totalWithdraw.innerText = currentWithdraw;

    const totalBalance = previousBalance - newWithdrawAmount;
    balance.innerText = totalBalance;



})