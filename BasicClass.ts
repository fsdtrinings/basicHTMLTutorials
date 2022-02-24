export{}
class DoThings
{
    hello():string
    {
        console.log("inside hello");
        return 'This is method test'
    }

    doStuff(x :number,y:number=55):void
    {
        console.log(x+y);
    }

}

// DoThings obj = new DoThings();
let obj = new DoThings();
var x = obj.hello();
console.log(x);
obj.doStuff(10);