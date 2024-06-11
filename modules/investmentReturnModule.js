export function calculateInvestmentReturn(P, R, n, t) {
    const r = R/100; //decimal rate
    return P * (1 + r/n)**(n * t)
}
//where P is the original principal sum
// Ris the annual interest rate as percent
// n is the compounding frequency per year 
// t is the overall length of time (in year)
