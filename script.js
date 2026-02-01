// Function to calculate simple interest
function calculateInterest() {
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');

    if (!principalInput || !rateInput || !yearsInput) {
        console.error('Input element not found!');
        return;
    }

    const principal = Number(principalInput.value);
    const rate = Number(rateInput.value);
    const years = Number(yearsInput.value);

    if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        alert('Please enter valid numbers!');
        return;
    }

    const interest = principal * (1 + (rate / 100) * years);
    document.getElementById('result').textContent = `Total Amount: ${interest.toFixed(2)}`;
}

// Export function for Jasmine testing
if (typeof module !== 'undefined') {
    module.exports = { calculateInterest };
}
