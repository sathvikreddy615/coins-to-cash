const piggyBank = {
    quarters: 11,
    dimes: 69,
    nickels: 101,
    pennies: 521
};

let dollarAmount = 0;

const convertQuarters = () => {
    let totalQuarters = piggyBank.quarters;
    dollarAmount = totalQuarters/4;
    console.log(`$${dollarAmount}`);
}

const convertDimes = () => {
    let totalDimes = piggyBank.dimes;
    dollarAmount = totalDimes/10;
    console.log(`$${dollarAmount}`);   
}

const convertNickels = () => {
    let totalNickels = piggyBank.nickels;
    dollarAmount = totalNickels/20;
    console.log(`$${dollarAmount}`);    
}

const convertPennies = () => {
    let totalPennies = piggyBank.pennies;
    dollarAmount = totalPennies/100;
    console.log(`$${dollarAmount}`);    
}

convertQuarters();
convertDimes();
convertNickels();
convertPennies();

// const coinConverter = (coin) => {
//     if (coin == piggyBank.hasOwnProperty("quarters")) {
//         console.log((piggyBank.quarters/4));
//     }
// }

// coinConverter(piggyBank.quarters);










