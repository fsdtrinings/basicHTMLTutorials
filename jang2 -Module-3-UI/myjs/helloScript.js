let arr1 = new Array();
let arr2 = [];


let arr3 = ['Java','JavaScript','Salesforce','Angular','Spring'];

console.log(' '+arr3[2]);
console.log(arr3.length)

arr3.push('React');
arr3.push('Express.js');
console.log(arr3);
console.log(arr3.length);

console.log("----------------- pop -------------------");
arr3.pop();
console.log(arr3);
console.log(arr3.length);

arr3.pop();
console.log(arr3);
console.log(arr3.length);

console.log("--------------- Iteration over array -------------")

arr3.forEach(x=>{
    if(x.startsWith('J'))
        console.log(x);
});

console.log("--------------- Join -------------")
console.log(arr3.join('|'));

console.log("--------------- Splice -------------")
console.log(arr3.splice(3,2));