"use strict";
exports.__esModule = true;
var Policy_1 = require("./Policy");
var Account_1 = require("./Account");
var p1 = new Policy_1.Policy("Policy 1", 15000);
var p2 = new Policy_1.Policy("Policy 2", 8000);
var p3 = new Policy_1.Policy("Policy 3", 3000);
var a1 = new Account_1.Account();
a1.setBasic('Ramesh', 3500);
a1.setPolicy(p1);
a1.showAccountDetails();
console.log("-------------------------------------------------");
a1.addBalance(25000);
a1.showAccountDetails();
a1.setPolicy(p1);
a1.showAccountDetails();