console.log(i); 
var i = 10;
/*the same as below */
var i;
console.log(i);
i = 10;
function func() 
{
    var x = 5; 
    if(1) 
    {
        var y = 10;  
        console.log(x); //Output 5
        console.log(y); //Output 10
    }     
}
func();
console.log(x); //undefined. Not available outside function
console.log(y); //undefined. Not available outside function
var color= "red";
var color = "green"; // var color is redeclared
console.log(color);



function func() 
{
    let x = 10;  
    if(x === 10) 
    {
        let y = 20;  
        console.log(x); //Output 10
        console.log(y); //Output 20
    }     
    console.log(x); // Output 10
    console.log(y); // ’undefined'
}
func();


function func1() 
{
    console.log(x);     //Output 'undefined'
    console.log(y);     //Error - "Uncaught 
                        //ReferenceError: y is not defined"     
    var x = 10;
    let y = 20;
} 
func1();

func2(5,10);
function func2(x, y) 
{
    console.log(x);   
    console.log(y);   
}

console.log(num); // Returns 'undefined' from hoisted var declaration (not 6)
var num = 6; // Initialization and declaration.
console.log(num); // Returns 6 after the line with initialization is executed.
a = 'Cran'; // Initialize a
b = 'berry'; // Initialize b
//elow code shows the template literal
console.log(`${a}${b}`); // 'Cranberry'
console.log(num2); // Throws ReferenceError exception as the variable value is uninitialized
let num2 = 6; // Initialization



/*To declare a class, you use the class 
keyword with the name of the class*/
class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    print() {
        console.log(this.height);
        console.log(this.width);
    }
}
const p = new Rectangle(10, 8); 
p.print();

//unnamed class expression
let rectangle = class {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    print() {
        console.log(this.height);
        console.log(this.width);
    }
}
console.log(rectangle.height); //undefined
//rectangle.print(); //reference error
new rectangle(10,8).print();

//named class expression
let rectangle2 = class Rectangle2 {
    constructor(height, width) {
        this.height = height;
        this.width = width;
      }
      print() {
          console.log(this.height);
          console.log(this.width);
      }
}
console.log(rectangle2.height); //undefined
//rectangle2.print(); //reference error
new rectangle2(10,8).print();

const course = {
    id: "DS3103",
    title: "Webutvikling",
    fullName : function() {
      return this.id + " " + this.title;
    },
    print: function(){
        console.log(this)
    }
  };
course.print();
console.log(course.fullName());

hoisted(); // logs "foo"
//this is a function declaration
function hoisted() {
  console.log('foo');
}
notHoisted(); // TypeError: notHoisted is not a function
//this is a function expression
var notHoisted = function() {
  console.log('bar');
};