export function calculateInvestmentReturn(P, r, n, t) {
    return P * (1 + r/n)**(n * t)
}
//where P is the original principal sum
// r is the annual interest rate 
// n is the compounding frequency (number of months)
// t is the overall length of time (in year)
