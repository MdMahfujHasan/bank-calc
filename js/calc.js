document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputDeposit = document.getElementById('input-deposit');
    const inputDepositString = inputDeposit.value;
    const deposit = parseFloat(inputDepositString);
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountString = depositAmount.innerText;
    const currentDeposit = parseFloat(depositAmountString);
    const newDeposit = deposit + currentDeposit;
    depositAmount.innerText = newDeposit;
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const balance = parseFloat(balanceAmountString);
    const newBalance = balance + deposit;
    balanceAmount.innerText = newBalance;
    inputDeposit.innerText = '';
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const inputWithdraw = document.getElementById('input-withdraw');
    const inputWithdrawString = inputWithdraw.value;
    const withdraw = parseFloat(inputWithdrawString);
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.innerText;
    const currentWithdraw = parseFloat(withdrawAmountString);
    if (isNaN(withdraw)) {
        alert("NaN");
        return;
    }
    const newDeposit = withdraw + currentWithdraw;
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const balance = parseFloat(balanceAmountString);
    if (withdraw > balance) {
        alert("Can't withdraw more amount than current balance.");
        return;
    }
    withdrawAmount.innerText = newDeposit;
    const newBalance = balance - withdraw;
    balanceAmount.innerText = newBalance;
    inputWithdraw.value = '';
})

