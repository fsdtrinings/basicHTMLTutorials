"use strict";
exports.__esModule = true;
exports.Account = void 0;
var Account = /** @class */ (function () {
    function Account() {
        this.balance = 3000;
        this.holdingPolicy = [];
    }
    Account.prototype.setBasic = function (username, balance) {
        this.username = username;
        this.balance = balance;
    };
    Account.prototype.addBalance = function (amount) {
        this.balance += amount;
        console.log("New Balance " + this.balance);
    };
    Account.prototype.setPolicy = function (policy) {
        if (this.balance > 5000) {
            var remainingBalance = this.balance - policy.policyPremiumAmount;
            if (remainingBalance > 5000) {
                this.holdingPolicy.push(policy);
                console.log("Policy Added " + policy);
            }
            else {
                console.log("Cannot buy policy low balance by " + remainingBalance + " Rs.");
            }
        }
        else {
            console.log("Min balance for Policy is 5000");
        }
    };
    Account.prototype.showAccountDetails = function () {
        console.log(this.username);
        console.log(this.balance);
        this.holdingPolicy.forEach(function (p) {
            console.log(p);
        });
    };
    return Account;
}());
exports.Account = Account;
