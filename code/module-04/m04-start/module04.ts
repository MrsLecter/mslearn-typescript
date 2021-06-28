/* Module 4: Develop typed functions using TypeScript
   Lab Start  */

/*  EXERCISE 1 */

type AscDesc = (a: number, b: number) => number;
/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in descending order */
let sortDescending: AscDesc = (a, b) => {
    if (a > b) {
        return -1;
    } else if (b > a) {
        return 1;
    } else {
        return 0;
    }
}

/*  sortDescending is a comparison function that tells the sort method how to sort 
    numbers in ascending order. */
let sortAscending: AscDesc = (a, b) => {
    if (a > b) {
        return 1;
    } else if (b > a) {
        return -1;
    } else {
        return 0;
    }
}

/*  The buildArray function builds an array of unique random numbers containing the number 
    of items based on the number passed to it. The sortOrder parameter determines 
    whether to sort the array in ascending or descending order. */

function buildArray(items: number, sortOrder: 'ascending' | 'descending'): Array<number> {
    let randomNumbers: Array<number> = [];
    let nextNumber: number;
    for (let counter = 0; counter < items; counter++) {
        nextNumber = Math.ceil(Math.random() * (100 - 1));
        if (randomNumbers.indexOf(nextNumber) === -1) {
            randomNumbers.push(nextNumber);
        } else {
            counter--;
        }
    }
    if (sortOrder === 'ascending') {
        return randomNumbers.sort(sortAscending);
    } else {
        return randomNumbers.sort(sortDescending);
    }
}

let myArray1 = buildArray(12, 'ascending');
let myArray2 = buildArray(8, 'descending');

/*  EXERCISE 2 
    Convert a JavaScript function to a TypeScript using optional parameters*/


function loanCalculator(principle: number, interestRate: number, months: number = 1): string {
    let interest = interestRate / 1200;   // Calculates the monthly interest rate
    let payment: number;
    payment = principle * interest / (1 - (Math.pow(1 / (1 + interest), months)));
    return payment.toFixed(2);
}