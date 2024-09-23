function processDonation(donateBtnId, inputFieldId, rcvBalanceId, causeTitle, causeLocation) {
    document.getElementById(donateBtnId).addEventListener('click', function () {
        const inputMoney = getInputFieldValueById(inputFieldId);
        const rcvBalance = getTextFieldValueById(rcvBalanceId);
        const myBalance = getTextFieldValueById('my-balance');
        const totalReceived = inputMoney + rcvBalance;

        if (inputMoney <= 0 || isNaN(inputMoney)) {
            alert('Please enter a valid donation amount');
        } else if (myBalance >= inputMoney) {
            const newMyBalance = myBalance - inputMoney;
            document.getElementById('my-balance').innerText = newMyBalance;
            document.getElementById(rcvBalanceId).innerText = totalReceived;

            const donationRecord = document.createElement('p');
            donationRecord.innerHTML = `
                <h1 class="text-3xl font-semibold">${inputMoney} TK donated for ${causeTitle} in ${causeLocation}</h1>
                <p class="text-xl">Date: ${todayDate}</p>
            `;
            document.getElementById('transaction-history').appendChild(donationRecord);

            modal.showModal();
            document.getElementById(inputFieldId).value = '';
        } else {
            alert('Insufficient balance');
        }
    });
}

// Implementing the function for Noakhali, Feni, and Quota Movement
processDonation('noakhali-donate-btn', 'noakhali-donate-money', 'noakhali-rcv-balance', 'Flood Relief', 'Noakhali, Bangladesh');
processDonation('feni-donate-btn', 'feni-donate-money', 'feni-rcv-balance', 'Flood Relief', 'Feni, Bangladesh');
processDonation('quota-donate-btn', 'quota-donate-money', 'quota-rcv-balance', 'Injured Support', 'Quota Movement');
