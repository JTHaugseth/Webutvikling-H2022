// // multi-line arrow functions
function multiplyPlusAdd(n1, n2) {
  let a = 100;
  return a + n1*n2;
}
let multiplyPlusAdd =(n1, n2) => n1*n2;
console.log(multiplyPlusAdd(2,3));

// Immediately invoked arrow functions
((a, b) => console.log(a*b))(3,4);

//rest parameters
let test2 = (a, b, ...args) => {
  console.log("a", a)
  console.log("b", b)
  console.log("manyMoreArgs", args)
}
test2(1,2,3,4,5);
//default parameters
let test3 = (a=100, b=20, c) => {
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
}
test3(3,5);
let test4 = (a, b=20, c=100) => {
  console.log("a", a)
  console.log("b", b)
  console.log("c", c)
}
test4(3);

//destructuring assignment
let test5 = ([a, b] = [10, 20]) => a + b;
console.log(test5());

let test6 = ([a, b] = numbers) => a + b;
console.log(test6([10,20]));

(([a, b] = [10, 20]) => console.log(a + b))();
//the same as
let test7 = ([a, b] = [10, 20]) => console.log(a + b);
test7();

let test8 = ({a, b} = {a:10, b:20}) => console.log(a + b);
test8();

/*The call() method is a predefined JavaScript method.
It can be used to invoke (call) a method with an owner 
object as an argument (parameter).*/
//arrow functions with this
var obj = {
  num: 100,
}
var add2 = (a,b,c) => this.num + a + b + c;
var add3 = function (a, b, c) {
  return this.num + a + b + c;
}

var result = add2.call(obj, 1, 2, 3) // establishing the scope as "obj"
console.log(result) // result NaN
result = add3.call(obj, 1, 2, 3) // establishing the scope as "obj"
console.log(result) // result 106

// binding arguments
function foo(n) {
  var f = () => arguments[0] + n;
  return f();
}
console.log(foo(10));

function foo(n) {
  var f = (...args) => args[0] + n;
  return f(1,2,3);
}
console.log(foo(10));

//spread parameter
let personInfo = {name: "ole", mobile: "12345678"};
let employeeInfo = {position: "engineer", salary: 450000}; 
let allInfo = {...personInfo, ...employeeInfo};
console.log(allInfo);

//destructuring variables from array
[a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);
console.log(b);
console.log(rest);


/*destructuring object.
You can specify the properties name*/
const obj = { a: 1, b: 2 };
const { a : a1, b: b1 } = obj;
console.log(a1);
console.log(b1);

/*ES6 makes destructuring more concise. 
You don't have to specify the properties names*/
const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a);
console.log(b);

//is it a good coding practice?
const obj = { aa: 1, bb: { cc: 2 } };
let { aa, bb } = obj; // a is constant
console.log(aa)
console.log(bb)
let { cc: d } = bb;
d=3;
console.log(obj)

//A good coding practice
const obj = { aa2: 1, bb2: { cc2: 2 } };
const { aa2 } = obj; // a is constant
console.log(aa2);
let { bb2 : {cc2: d2} } = obj; //bb2 is an object
d2=3;
console.log(obj)

/*assignment patterns
This is wrong.
declaration or statement is expected. */
const numbers = [];
const obj = { a: 1, b: 2 };
{ a: numbers[0], b: numbers[1]} = obj;

/*assignment patterns
The parentheses ( ... ) around the assignment 
statement are required when using object literal 
destructuring assignment without a declaration.*/
const obj = { a: 1, b: 2 };
({ a: numbers[0], b: numbers[1] } = obj);
console.log(numbers);

//object literal destructuring
let personInfo2 = {
  name: "ole", 
  mobile: "12345678"
};
let {name:myname, mobile:newphone} = personInfo2;
console.log(myname, newphone);

//forEach
let listOfCapitals = ["Oslo", "Stockholm", "Copenhagen"];
listOfCapitals.forEach(capital => console.log(capital));

listOfCapitals.forEach((capital, index, listOfCapitals) => console.log(`Index: ${index}`,capital));

//filter

// let condition = true;
// let newMovies = listofMovies.filter(function(movie) {
//     if (condition === false)
//       return movie;
//     return movie.title === "movie";
// });
// console.log(JSON.stringify(newMovies));


let id=0;
let newMovies1 = listofMovies.map(function(movie) {
  movie.id = id;
  id++;
  return movie;
});
console.log(JSON.stringify(newMovies1));


let newMovies2 = listofMovies.filter(movie => movie.releaseYear > 2008 && movie.releaseYear <2020);
console.log(newMovies2);

//map
let newMapArray = listofMovies.map(movie => movie.releaseYear);
console.log(newMapArray);

//sort
let listofMovies = [
  {title: "movie", releaseYear: 2009, price: 100},
  {title: "movie", releaseYear: 2015, price: 199},
  {title: "movie3", releaseYear: 2008, price: 100},
  {title: "movie4", releaseYear: 2020, price: 125}
];
let newSortArray = listofMovies.sort((movie1, movie2) => movie1.price > movie2.price? 1: -1);
console.log(newSortArray);
//reduce
let totalPrice = listofMovies.reduce((total, movie) => total + movie.price, 0);
console.log(totalPrice);

//map&reduce
let totalPrice2 = listofMovies
            .map(movie => movie.price/2)
            .reduce((total, price) => total + price, 0);
console.log(totalPrice2);

//class
class Person {
  constructor(name, mobile) {
    this.name = name;
    this.phone = mobile;
  }
  getName() {
    return this.name;
  }
  getPhone() {
    return this.phone;
  }
}
let newPerson = new Person("Ole", "12345678");
console.log(newPerson.getName());
console.log(newPerson.getPhone());

//define a class inside an expression
let User = class Person {
  constructor(name, mobile) {
    this.name = name;
    this.phone = mobile;
  }
  getName() {
    return this.name;
  }
  getPhone() {
    return this.phone;
  }
}
console.log(new User("Ole", "12345678").getPhone());

//declare a class and return it from a function
function makeUser(name, mobile) {
  return class {
    getName() {
      return name;
    }
    getPhone() {
      return mobile;
    }
  }
}
let NewUser = makeUser("ole", "12345678");
console.log(new NewUser().getPhone());


let array = ['A','A','A','B','B','B','C','C','C'];
let uniqueChars = [];
array.forEach((c) => {
    if (!uniqueChars.includes(c)) {
        uniqueChars.push(c);
    }
});
console.log(uniqueChars);

var myObj = { a : 'blue', b: 21, c: 3 };
myObj["d"]= false;

console.log(myObj);

//a basic array contains elements, separated by commas:
var arr = [ "balloon", 15, "red" ];
//To get the value of any one member of the array, we reference its index, i.e
console.log(arr[2]);

//JavaScript “object literals” creates a new object with properties
//Each property - also referred to as a key in this context - has a value
var myObj = { a : 'blue', b: 21, c: 3 };
//we can use below two methods to get access to the value of array element
//option a: we refer the name of the key, rather than using a numbered index
console.log(myObj["a"]);
//Alternatively, we could use dot notation to yield the same result
console.log(myObj.a);
//add properties to myObj
//Using square bracket notation
myObj["d"]= false;
//Using dot notation
myObj.d = false;
console.log(myObj);

let objClone = { ...obj }; // pass all key:value pairs from an object 

let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

let mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }


let myarray={"1": ()=>function1() ,"2":()=>function2(), "12":()=>function1() };
const function1=()=>{
  console.log("function1");
}
const function2=()=>{
  console.log("function2");
}
let myfunc=myarray["1"];
myfunc();

/* reference value*/
let person = {
  name: 'John',
  age: 25,
};
let member = person;
member.age = 26;
console.log(person);
console.log(member);

/* define a class inside another expression*/
let user1 = new class {
  constructor(name) {
    this.name=name;
  }
  getName() {
    return this.name;
  }
  setName(name) {
    this.name=name;
  }
}("user1");
let user2 = user1;
user1.setName("newuser1");
console.log(user2.getName());
/*declare a class inside function and return it*/
function makeClass(args) {
  return class {
    constructor(name) {
      this.name=name;
    }
    getName() {
      return this.name;
    }
    print() {
      console.log(args);
    }
  }
}
/* obj is a class declaration */
let obj = new makeClass("hello");
/* inst is a class instance */
let inst = new obj("name");
console.log(inst.getName());


function makeClass(...args) {
  return class {
    constructor() {
      this.name=args[0];
      this.color=args[1];
    }
    getColor() {
      console.log(this.color);
    }
  }
}
let cat = makeClass("Garfield","white");
new cat().getColor();