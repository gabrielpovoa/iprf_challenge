// test/IncomeTaxCalculator.test.js
(async () => {
    const { assert } = await import('chai');
    const IncomeTaxCalculator = require('../src/IncomeTaxCalculator');

    describe('IncomeTaxCalculator', function() {
        const calculator = new IncomeTaxCalculator();

        it('Class 1: Below minimum taxable income', function() {
            const taxDue = calculator.calculateIncomeTax(-1000);
            assert.strictEqual(taxDue, 0, 'Tax due should be 0 for salary below minimum taxable income');
        });

        it('Class 2: Minimum taxable income', function() {
            const taxDue = calculator.calculateIncomeTax(2259.20);
            assert.approximately(taxDue, 0.00, 0.01, 'Tax due should be calculated for minimum taxable income');
        });

        it('Class 3: Within each tax bracket', function() {
            const taxDue = calculator.calculateIncomeTax(2500);
            assert.approximately(taxDue, 14.04, 0.01, 'Tax due should be calculated for salary within tax bracket');
        });

        it('Class 4: Upper limit of each tax bracket', function() {
            const taxDue = calculator.calculateIncomeTax(3751.05);
            assert.approximately(taxDue, 182.35, 0.01, 'Tax due should be calculated for salary at upper limit of tax bracket');
        });

        it('Class 5: Above the highest tax bracket', function() {
            const taxDue = calculator.calculateIncomeTax(50000);
            assert.approximately(taxDue, 13835.54, 0.01, 'Tax due should be calculated for salary above highest tax bracket');
        });
    });
})();
