function calculate() {
    const categories = [
        { inputs: ['gold24k', 'gold22k', 'gold18k'], total: 'goldValueTotal', zakat: 'goldValueZakat' },
        { inputs: ['gold24kValue', 'gold22kValue', 'gold18kValue'], total: 'goldWeightTotal', zakat: 'goldWeightZakat' },
        { inputs: ['cash1', 'cash2'], total: 'cashTotal', zakat: 'cashZakat' },
        { inputs: ['investment1', 'investment2', 'investment3'], total: 'investmentTotal', zakat: 'investmentZakat' },
        { inputs: ['property1', 'property2'], total: 'propertyTotal', zakat: 'propertyZakat' },
        { inputs: ['trade1', 'trade2'], total: 'tradeTotal', zakat: 'tradeZakat' },
        { inputs: ['other1', 'other2', 'other3'], total: 'otherTotal', zakat: 'otherZakat' },
        { inputs: ['agriculture1', 'agriculture2', 'agriculture3'], total: 'agricultureTotal', zakat: 'agricultureZakat' },
        { inputs: ['cattle1', 'cattle2', 'cattle3'], total: 'cattleTotal', zakat: 'cattleZakat' },
        { inputs: ['gems'], total: 'gemsTotal', zakat: 'gemsZakat' }
    ];

    const debts = { inputs: ['debt1', 'debt2', 'debt3', 'debt4', 'debt5', 'debt6'], total: 'debtTotal' };

    let totalAssets = 0;
    categories.forEach(category => {
        let total = 0;
        category.inputs.forEach(inputId => {
            const value = parseFloat(document.getElementById(inputId).value) || 0;
            total += value;
        });
        
        document.getElementById(category.total).value = total.toFixed(2);
        totalAssets += total;
    });

    // Calculate total debt
    let totalDebt = 0;
    debts.inputs.forEach(inputId => {
        const value = parseFloat(document.getElementById(inputId).value) || 0;
        totalDebt += value;
    });
    document.getElementById(debts.total).value = totalDebt.toFixed(2);

    // Calculate net assets (total assets - total debt)
    const netAssets = totalAssets - totalDebt;

    // Calculate zakat for each category based on net assets
    let totalZakat = 0;
    categories.forEach(category => {
        const categoryTotal = parseFloat(document.getElementById(category.total).value) || 0;
        const categoryRatio = categoryTotal / totalAssets;
        const categoryNetAssets = netAssets * categoryRatio;
        const zakat = Math.max(categoryNetAssets * 0.025, 0); // 2.5% of net assets, minimum 0
        document.getElementById(category.zakat).value = zakat.toFixed(2);
        totalZakat += zakat;
    });

    document.getElementById('zakatAmount').textContent = totalZakat.toFixed(2);
}

// Add event listeners to all input fields
document.addEventListener('DOMContentLoaded', () => {
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', calculate);
    });

    // Add event listeners for radio buttons
    document.getElementById('goldValueRadio').addEventListener('change', calculate);
    document.getElementById('goldWeightRadio').addEventListener('change', calculate);
});
