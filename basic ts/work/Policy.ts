
export class Policy{

    policyName:string;
    policyPremiumAmount:number;

    constructor(policyName:string,
        policyPremiumAmount:number)
        {
            this.policyName = policyName;
            this.policyPremiumAmount = policyPremiumAmount;
        }
}