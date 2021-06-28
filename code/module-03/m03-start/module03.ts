/* Module 3: Implement interfaces in TypeScript
   Lab Start  */

/*  EXERCISE 1
    TODO: Declare the Loan interface. */
interface Loan {
    principle: number;
    interestRate: number;
}

interface ConventionalLoan extends Loan {
    months: number
}

function calculateInterestOnlyLoanPayment(Loan: any): string {
    // Calculates the monthly payment of an interest only loan
    let interest: number;
    interest = Loan.interestRate / 1200; // Calculates the Monthly Interest Rate of the loan
    let payment: number;
    payment = Loan.principle * interest;
    return 'The interest only loan payment is ' + payment.toFixed(2);
}

function calculateConventionalLoanPayment(ConventionalLoan: any): string {
    let interest: number;
    interest = ConventionalLoan.interestRate / 1200;
    let payment: number;
    payment = ConventionalLoan.principle * interest / (1 - (Math.pow(1 / (1 + interest), ConventionalLoan.months)));
    return 'The conventional loan payment is ' + payment.toFixed(2);
}

let interestOnlyPayment = calculateInterestOnlyLoanPayment({ principle: 30000, interestRate: 5 });
let conventionalPayment = calculateConventionalLoanPayment({ principle: 30000, interestRate: 5, months: 180 });

console.log(interestOnlyPayment);     //* Returns "The interest only loan payment is 125.00" 
console.log(conventionalPayment);     //* Returns "The conventional loan payment is 237.24"