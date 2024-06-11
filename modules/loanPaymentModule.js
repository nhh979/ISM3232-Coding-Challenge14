export function calculateMonthlyLoanPayment (P, R, n){
    const r = R/100; //decimal rate
    return r * P * (1 + r)**n / ((1 + r)**n - 1);
}
// where P is the loan's principal
//  R is the monthly interest rate (as percent)
//  n is the number of monthly payments
