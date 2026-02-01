const { calculateInterest } = require('../script');

describe('Interest Rate Calculator', () => {
    it('calculates simple interest correctly', () => {
        // Mock input values
        document.body.innerHTML = `
            <input id="principal" value="1000">
            <input id="rate" value="5">
            <input id="years" value="2">
            <p id="result"></p>
        `;
        calculateInterest();
        expect(document.getElementById('result').textContent).toBe('Total Amount: 1100.00');
    });

    it('returns 0 for missing values', () => {
        document.body.innerHTML = `
            <input id="principal" value="">
            <input id="rate" value="">
            <input id="years" value="">
            <p id="result"></p>
        `;
        calculateInterest();
        expect(document.getElementById('result').textContent).toBe('');
    });
});
