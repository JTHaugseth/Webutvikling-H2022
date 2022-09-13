/*if you don’t place the anonymous
 function inside the (), you’ll get 
 a syntax error */
function () {
}
/*The () makes the anonymous function 
 an expression */ 
(function () {    
});
/*You can assign the function expression
to a variable and invoke a call*/
let func1 = (function () {
    console.log('Anonymous')
});
func1();
/*Or immediately invoke it as IIFE */
(function () {
    console.log('IIFE')
})();
/*arrow function to declare anonymous*/
let show = () => console.log('Anonymous');
show();
/*use anonymous function as arguments */
setTimeout(function() {
    console.log('Execute after 1s')
}, 1000);


function outer(x) {
    function inner(y) {
      return x + y;
    }
    return inner;
}
const outerinst= outer(3);
console.log(outerinst(5));
/*reference error: inner is not defined
Inner function is not accessible from outside*/
inner(5);

/*Rewriting it as anonymous function*/
function outer(x) {
    return function(y) {
      return x + y;
    }
}
console.log(outer(3)(5));

/*inner and outer scope */
function outer() {
    let x = 3;
    function inner() {
      let y = 5;
      return x + y;
    }
    /*reference error: y is not defined */
    console.log(y);
    return inner;
}
console.log(outer()());


/* IIFE function */
(function () {
    console.log('IIFE')
})();

/* It can be in this way as well */
(function () {
    console.log('IIFE')
}());

/* IIFE with arrow function*/
(()=>{
    console.log('IIFE')
})();

/* IIFE can be async */
const getAsync = async (url) => { 
    // implementation
};

/* IIFE with parameters */
(function (a,b) {
    console.log(a+b)
})(3,4);
/* IIFE arrow function with parameters */
( (a,b) => {
    console.log(a+b)
})(3,4);


let response = await fetch('./user.json');
let user = await response.json();
console.log(user);

(async () => {
    let response = await fetch('./user.json');
    let user = await response.json();
  })();

  async function myFunction() {
    console.log("async function");
  }
  //await myFunction();
  (async () => {
    return await myFunction();
  })();