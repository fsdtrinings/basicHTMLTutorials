export{}
interface  IUser
{
    username:string;
    id:number;
    email:string;
    role:string;

    printvalues():void;
} 

let adminUser:IUser = {
    username: "ramesh",
    id:101,
    email:'ramesh@gmail.com',
    role:'admin',

    printvalues():void
    {
        console.log("username "+this.username);
    }
}

let superAdmin:IUser = {
    username: "Amit",
    id:102,
    email:'Amit@gmail.com',
    role:'Super-admin',

    printvalues():void
    {
        console.log("username "+this.username);
    }
}

let user:IUser = {
    username: "Neha",
    id:103,
    email:'neha@gmail.com',
    role:'user',

    printvalues():void
    {
        console.log("username "+this.username);
    }
}