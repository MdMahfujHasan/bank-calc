document.getElementById('deposit-btn').addEventListener('click', function () {
    const deposit = parseFloat(document.getElementById('deposit-amount').innerText);
    const inputDeposit = parseFloat(document.getElementById('input-deposit').value);
    document.getElementById('deposit-amount').innerText = deposit + inputDeposit;
    const balance = parseFloat(document.getElementById('balance-amount').innerText);
    document.getElementById('balance-amount').innerText = balance + inputDeposit;
    document.getElementById('input-deposit').value = '';
})

document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdraw = parseFloat(document.getElementById('withdraw-amount').innerText);
    const inputWithdraw = parseFloat(document.getElementById('input-withdraw').value);
    document.getElementById('withdraw-amount').innerText = withdraw + inputWithdraw;
    const balance = parseFloat(document.getElementById('balance-amount').innerText);
    document.getElementById('balance-amount').innerText = balance - inputWithdraw;
    if (balance < inputWithdraw) {
        alert("Can't withdraw more than your existing balance.");
        return;
    }
    else if (isNaN(inputWithdraw)) {
        alert("Please provide a numeric value.");
        return;
    }
    document.getElementById('input-withdraw').value = '';
})