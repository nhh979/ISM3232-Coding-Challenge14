//Hoang Nguyen
//U12840485

import { calculateInterestRate } from "./interestRateModule.js";
import { calculateInvestmentReturn } from "./investmentReturnModule.js";
import { calculateMonthlyLoanPayment } from "./loanPaymentModule.js";

//Calculate Interest 
document.getElementById('calculateInterest').addEventListener('click', function(){
    const originalPrincipal = parseFloat(document.getElementById('originalPrincipal').value);
    const interestRate = parseFloat(document.getElementById('annualInterestRate').value);    
    const interestTime = parseFloat(document.getElementById('interestTime').value);
    //Input validation
    if (isNaN(originalPrincipal) || isNaN(interestRate) || isNaN(interestTime)) {
        alert('Please enter valid numbers for principal, rate, and time in the Interest Rate Calculation.');
        return;
    }
    //Calculate interest amount
    const interestAmount = calculateInterestRate(originalPrincipal, interestRate, interestTime)
    //Display the information
    document.getElementById('interestResult').innerHTML = `
    <p>Original Principal: $${originalPrincipal}</p>
    <p>Annual Interest Rate: ${interestRate}%</p>
    <p>Time: ${interestTime} years</p>
    <p><strong>Interest Amount: $${interestAmount.toFixed(2)}</strong></p>
    `
})

//Calculate monthly loan payment
document.getElementById('calculateMonthlyLoanPayment').addEventListener('click', function(){
    const loanPrincipal = parseFloat(document.getElementById('loanPrincipal').value);
    const monthlyInterestRate = parseFloat(document.getElementById('monthlyLoanInterestRate').value);
    const loanTime = parseFloat(document.getElementById('loanTime').value);
    //Input validation
    if (isNaN(loanPrincipal) || isNaN(monthlyInterestRate) || isNaN(loanTime)) {
        alert('Please enter valid numbers for principal, rate, and time in the Monthyl Loan Payment Calculation.');
        return;
    }
    //Calculate the number of months
    const numMonth = loanTime * 12
    //Calculate the loan amount
    const loanAmount = calculateMonthlyLoanPayment(loanPrincipal, monthlyInterestRate, numMonth)
    //Display the information
    document.getElementById('loanResult').innerHTML = `
    <p>Loan Principal: $${loanPrincipal}</p>
    <p>Monthly Interest Rate: ${monthlyInterestRate}%</p>
    <p>Time: ${loanTime} years</p>
    <p>Number of payments: ${numMonth}</p>
    <p><strong>Monthly Loan Payment: $${loanAmount.toFixed(2)}</strong></p>
    `
})

//Calculate Investment Return
document.getElementById('calculateInvestmentReturn').addEventListener('click', function(){
    const investmentPrincipal = parseFloat(document.getElementById('investmentPrincipal').value);
    const annualInvestmentInterestRate = parseFloat(document.getElementById('annualInvestmentInterestRate').value);
    const investmentTime = parseFloat(document.getElementById('investmentTime').value);
    //Input validation
    if (isNaN(investmentPrincipal) || isNaN(annualInvestmentInterestRate) || isNaN(investmentTime)) {
        alert('Please enter valid numbers for principal, rate, and time in the Investment Return Calculation.');
        return;
    }
    const compound = 12; //Number of compounding periods
    //Calculate the investment return
    const investmentReturn = calculateInvestmentReturn(investmentPrincipal, annualInvestmentInterestRate, compound, investmentTime)
    //Display the information
    document.getElementById('investmentResult').innerHTML = `
    <p>Investment Principal: $${investmentPrincipal}</p>
    <p>Annual Interest Rate: ${annualInvestmentInterestRate}%</p>
    <p>Time: ${investmentTime} years</p>
    <p>Number of times interest is compounded per year (n): ${compound}</p>
    <p><strong>Investment Return: $${investmentReturn.toFixed(2)}</strong></p>
    `
})
