import React, {useState}  from 'react';

//create Greeting component
//const Greeting = (props) => <h1>Hello {props.surname}</h1>;


// function Greeting(props){
//   const text = `Hello ${props.surname} 
//   ${props.firstname}`;   
//   return (
//   <h1> {text}</h1>
//   );
// }

const Greeting = (props) => {
  console.log(props.children);
  return (
    <div>
       <h1>{props.welcome}</h1>
       {props.children}
    </div>
  );
}

const GreetingInheritance = () => {
  return (
    <Greeting welcome="Welcome">
      <p>
        Høyskolen Kristiania
      </p>
    </Greeting>
  );
}

export default GreetingInheritance;