// document.getElementById('deposit-btn').addEventListener('click', function () {
//     const deposit = parseFloat(document.getElementById('deposit-amount').innerText);
//     const inputDeposit = parseFloat(document.getElementById('input-deposit').value);
//     document.getElementById('deposit-amount').innerText = deposit + inputDeposit;
//     const balance = parseFloat(document.getElementById('balance-amount').innerText);
//     document.getElementById('balance-amount').innerText = balance + inputDeposit;
//     document.getElementById('input-deposit').value = '';
// })

// document.getElementById('withdraw-btn').addEventListener('click', function () {
//     const withdraw = parseFloat(document.getElementById('withdraw-amount').innerText);
//     const inputWithdraw = parseFloat(document.getElementById('input-withdraw').value);
//     document.getElementById('withdraw-amount').innerText = withdraw + inputWithdraw;
//     const balance = parseFloat(document.getElementById('balance-amount').innerText);
//     document.getElementById('balance-amount').innerText = balance - inputWithdraw;
//     if (balance < inputWithdraw) {
//         alert("Can't withdraw more than your existing balance.");
//         return;
//     }
//     else if (isNaN(inputWithdraw)) {
//         alert("Please provide a numeric value.");
//         return;
//     }
//     document.getElementById('input-withdraw').value = '';
// })

document.getElementById('deposit-btn').addEventListener('click', function () {
    const inputDeposit = document.getElementById('input-deposit');
    const inputDepositString = inputDeposit.value;
    const deposit = parseFloat(inputDepositString);
    // console.log(typeof deposit);
    const depositAmount = document.getElementById('deposit-amount');
    const depositAmountString = depositAmount.innerText;
    const currentDeposit = parseFloat(depositAmountString);
    // console.log(typeof currentDeposit);
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
    // console.log(typeof withdraw);
    const withdrawAmount = document.getElementById('withdraw-amount');
    const withdrawAmountString = withdrawAmount.innerText;
    const currentWithdraw = parseFloat(withdrawAmountString);
    // console.log(typeof currentWithdraw);
    if (isNaN(withdraw)) {
        alert("NaN");
        return;
    }
    const newDeposit = withdraw + currentWithdraw;
    withdrawAmount.innerText = newDeposit;
    const balanceAmount = document.getElementById('balance-amount');
    const balanceAmountString = balanceAmount.innerText;
    const balance = parseFloat(balanceAmountString);
    const newBalance = balance - withdraw;
    balanceAmount.innerText = newBalance;
    if (withdraw > balance) {
        alert("Can't withdraw more amount than current balance.");
        return;
    }
    inputWithdraw.value = '';
})

