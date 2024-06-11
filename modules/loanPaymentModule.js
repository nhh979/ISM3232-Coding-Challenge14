export function calculateMonthlyLoanPayment (P, r, n){
    return r * P * (1 + r)**n / ((1 + r)**n - 1);
}
// where P is the loan's principal, r is the monthly interest rate, n is the number of monthly payments
