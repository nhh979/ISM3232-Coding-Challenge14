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
    const interestAmount = calculateInterestRate(originalPrincipal, interestRate, interestTime)
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
    const numMonth = loanTime * 12
    const loanAmount = calculateMonthlyLoanPayment(loanPrincipal, monthlyInterestRate, numMonth)
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
    const compound = 12;
    const investmentReturn = calculateInvestmentReturn(investmentPrincipal, annualInvestmentInterestRate, compound, investmentTime)
    document.getElementById('investmentResult').innerHTML = `
    <p>Investment Principal: $${investmentPrincipal}</p>
    <p>Annual Interest Rate: ${annualInvestmentInterestRate}%</p>
    <p>Time: ${investmentTime} years</p>
    <p>Number of times interest is compounded per year (n): ${compound}</p>
    <p><strong>Investment Return: $${investmentReturn.toFixed(2)}</strong></p>
    `
})
