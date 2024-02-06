//const { $ } = require("webdriverio/build/commands/browser");

console.log("Hello OOP!");

//Encapsulation
//Classes

class BankAccount {
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if ( this.balance >= amount) {
            this.balance -= amount;
        } else {
            console.log('Insufficient Balance');
        }
    }

    getAccountInfo() {
        return `Account Number: ${this.accountNumber}, Balance: ${this.balance}`;
    }
};

const myAccount = new BankAccount('123456789', 1000);
console.log(myAccount.getAccountInfo());

myAccount.deposit(5000);
console.log(myAccount.getAccountInfo());

myAccount.withdraw(6000);
console.log(myAccount.getAccountInfo());

const gabAccount = new BankAccount('987654321',1000);
console.log(gabAccount.getAccountInfo());