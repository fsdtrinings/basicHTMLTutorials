import { Policy } from "./Policy";

export class Account{
    username:string;
    balance:number = 3000;
    holdingPolicy:Policy[] = [];

    setBasic(username:string,balance?:number)
    {
        this.username = username;
        this.balance = balance;
    }

    addBalance(amount:number)
    {
        this.balance+=amount;
        console.log("New Balance "+this.balance);
    }

    setPolicy(policy:Policy)
    {
        if(this.balance>5000)
        {
            let remainingBalance = this.balance - policy.policyPremiumAmount;
            if(remainingBalance>5000)
            {
                this.holdingPolicy.push(policy);
                console.log("Policy Added "+policy);
            }
            else{
                console.log("Cannot buy policy low balance by "+remainingBalance+" Rs.");
            }
            
        }
        else
        {
            console.log("Min balance for Policy is 5000");
        }
    }

    showAccountDetails()
    {
        console.log(this.username);
        console.log(this.balance);

        this.holdingPolicy.forEach(p=>{
            console.log(p);
        })
    }
}