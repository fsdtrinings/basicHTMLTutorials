export{}
let commonUsername : string = 'user123';  // global data/variable
class Account
{
    username:string;  // class scope variable
    balance:number;
    policy:string[] = [];

    // constructors

    constructor(username:string,balance:number)
    {
        this.username = username;
        this.balance = balance;
    }

       // business methods
   addPolicy(policyName:string):void
   {
           // get balance from server using spring rest endpoint
        let a : boolean = this.balance<=5000;
        let b : boolean = ((this.balance>5000 && this.balance<10000)&&this.policy.length>=2)?true:false;
           
        if( a || b)
        {
            console.log("Balance should be greater than 10,000 to apply for policy , else contact to customer care 1800-000-1500");
        }
        else
        {
            this.policy.push(policyName);
            console.log("Policy "+policyName+"Added, total policies count is :-  "+this.policy.length);
        }
       
   } 

   showDetails()
   {
       console.log("--------------------------------------")
       console.log(" User Name  "+this.username);
       console.log(" Balance "+this.balance);

       this.policy.forEach(p=>{
           console.log(p);
       })
       
   }
}//end of class

// ----------------------------------------------------------------------

// object creation

let a1 = new Account('Ramesh',6000);
a1.addPolicy("My Smart Policy - 1");
a1.addPolicy("My Smart Policy - 2");
a1.showDetails();

a1.addPolicy("My Smart Policy - 3");
a1.showDetails();
//let a2 = new Account('Amit',15000);


