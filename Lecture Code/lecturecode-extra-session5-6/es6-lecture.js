function multiplePlusAdd(n1, n2) {
    let a= 100;
    return a+n1*n2;
}
console.log(multiplePlusAdd(3,4));

/* IIFE */
((n1, n2)=>{
    let a= 100;
    console.log(a+n1*n2);
})(3,4);

/* outer and inner with arrow functions */
const outer = (a) =>{
    let multiplePlusAdd3 = (n1, n2) => a+n1*n2;
    return multiplePlusAdd3(3, 4);
}
console.log(outer(100));

function foo(n, m) {
    var f=(...myargs)=>arguments[1]+n+myargs[1];
    return f(10,20);
}
console.log(foo(3,4));

let person1={
    name:"name1",
    age:20,
    gender: "female"
}
let person2={
    name:"name2",
    age:22,
    job: "web developer"
}
let result={...person1, ...person2};
console.log(result);

[a,b,...args]=[1,2,3,4,5]
console.log(args);

function foo(n, m) {
    var f=(a, ...myargs)=>arguments[1]+n+myargs[0];
    return f(10,20);
}
console.log(foo(3,4));
const obj={
    a: 1,
    b:2
};
const {a:a1, b:b1}=obj;
console.log(obj.a)
console.log(obj.b)

listOfCapitals.forEach((capital, index)=>
console.log(`index: ${index}, capital: ${capital}`));
for(let i=0; i<listOfCapitals.length; i++){
    console.log(`index: ${i}, capital: ${listOfCapitals[i]}`);
}

let listOfCapitals = ["Oslo","Stockholm", "Copenhagen", "Paris", "Prague"];
let searchLetter="P";

let newListOfCapitals=listOfCapitals.filter(
    capital=>capital.charAt(0)===searchLetter
)
console.log(newListOfCapitals);
let newListOfCapitals2=listOfCapitals.filter(
    function(capital) {
        if(capital.charAt(0)===searchLetter)
            return capital;
        return null;
    }
)
let newListOfCapitals3=[];
listOfCapitals.forEach(
    capital=>{
        if(capital.charAt(0)===searchLetter) {
            newListOfCapitals3.push(capital)
        }
    }
);
console.log(newListOfCapitals3);
console.log(listOfCapitals);


let totalages = listOfUsers
.map(user=>user.age)
.reduce((total, age)=> total + age, 0);
console.log(totalages/listOfUsers.length);

let listOfUsers =[
    {name: "user1", age:20},
    {name: "user2", age:25},
    {name: "user3", age:22}
];
let sortedUsers= listOfUsers.sort(
    (user1, user2) => user1.age>user2.age?1:-1
);
console.log(sortedUsers)