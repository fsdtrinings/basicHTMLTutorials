import { Policy } from "./Policy";
import { Account } from "./Account";


let p1:Policy = new Policy("Policy 1",15000);
let p2:Policy = new Policy("Policy 2",8000);
let p3:Policy = new Policy("Policy 3",3000);

let a1:Account = new Account();

a1.setBasic('Ramesh',3500);
a1.setPolicy(p1);
a1.showAccountDetails();
console.log("-------------------------------------------------");
a1.addBalance(25000);
a1.showAccountDetails();
a1.setPolicy(p1);
a1.showAccountDetails();