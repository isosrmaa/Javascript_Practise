// function 

// function by regular method

// function add(a,b){
//     console.log(a+b);
// }

// Function by arrow function method 

// function by ended regular method

// let add =(a,b)=>{
// console.log(a+b);
// }
// add(20,30);

// Anonymous Function 

// (()=>{
//     console.log(10+40);
// })
// ();

/**
 Higher order function
 for each 
 map 
 reduce
 filter
 */
/*For each :The forEach method is used to execute a function on each element in an array. It doesn't return anything, just performs the operation.*/
// ex-double the given array and show in newly formed array named doubleNbr

// const numbers=[1,2,3,4,5,6,7,8,9];
//  const doubleNbr=numbers.forEach(function(number){
//     console.log(number*2);
// })


/* map :The map method creates a new array by applying a function to each element of the original array. It returns the new array.*/

//  const squares = [1, 2, 3, 4, 5];
// const newArray = squares.map(function(nbr) {
//     return nbr * nbr;
// });
// console.log(newArray);

  // const numbers=[1,2,3,4,5,6,7,8,9];

// const newsqNumbers=numbers.map(function(nbr){
//     return nbr*nbr;
// })

// console.log(newsqNumbers);

// const numbers=[1,2,3,4,5,6,7,8,9];
//  const sqNumbers=numbers.map(function(number){
//     return number*number;
// })
// console.log(sqNumbers);

/* Filter :The filter method creates a new array containing only the elements that pass a certain condition*/

//print only even numbers from given array 
// const numbers=[1,2,3,4,5,6,7,8,9];
// const evenNbr=numbers.filter(function(nbr){
//     return nbr%2==0;
// });
// console.log(evenNbr);

//print only odd numbers from given array 
// const numbers=[1,2,3,4,5,6,7,8,9];
// const oddNbr=numbers.filter(function(nbr){
//     return nbr%2!==0;
// });
// console.log(oddNbr);


/*Reduce:The reduce method reduces an array to a single value by applying a function to each element (from left to right), while accumulating the result.*/

//find the total price of the given array 

// const prices=[20.40,50,100,500,300];
// const totalPrice=prices.reduce(function(accumulator,price){
//     return accumulator+price;
// },0);
// console.log(`Rupees = ${totalPrice.toFixed(2)}`);

//another method:

// const prices=[20.40,50,100,500,300];
// function sum(accumulator,price){
//        return accumulator + price;
//     }
// const total=prices.reduce(sum,0);
// console.log(total);


//calculate a  marks of a given array which is maximum or minumm

// const grades=[20,50,90,100,68,30,10];
// const maximum=grades.reduce(getMax);
// const minimum=grades.reduce(getMin);
// console.log(maximum);
// console.log(minimum);
// function getMax(accumulator,element){
//     return Math.max(accumulator,element);
// }
// function getMin(accumulator,element){
//     return Math.min(accumulator,element);
// }


////////from apna college 
/*Function: block of code that perforems a speific task ,can be invoked whenever needed 
 syntax:::
 function defination                 function call
 function functionName(){            functionName();  kaam garauna ko lagi 
 //some code kaam yesma hunxa 
 }

 function functionName (parameter1,parmeter2,......){
 //do some code/work;
 }
 */

// function myFunction(){
// console.log("Hello its me ishwor sharma ");
// console.log("Hello I am from Bardiya ");
// }

// //function call garnako lagi yo garney 
// myFunction();
//regular function 
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// parameter ra argument k ho Tani 

// for Eg:

// function myFunction(msg,a){ //yo msg chaii parameter ho 
//   console.log(msg,a);
// }
// myFunction("hello its me ishwor",10); //yo chaii argument ho 
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// //function for calculating sum of two numbers
// function sum(a,b){
// console.log(a+b);
// }
// sum(100,200);
//function for multiplying four number
// function mul(a,b,c,d){
//   console.log(a*b*c*d);
// }
// mul(100,200,300,400);//function calling

// //function return 
// function add(a,b){
//   s=a+b;
//   return s;
  
//   //yespachii ko code return naii hudaiina (return pachii lekeko kura )
// }
// let hera=add(3,5);
// console.log(hera);

// note: function ko parameter local variable of function ho ra yo block scope of function (block sama matra chalxa ) 

//named regular function 
// const sum=function(a,b){
//   console.log(a+b);
// }
// sum(10,20);
  
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//ARROW FUNCTION : short/compact  form of writing a  function
//
// const add=(a,b)=>{
//  console.log(a+b);
// }

// add(20,40);

// anynomous function 

/* syntax:::
or single line function 
const printHello=()=>console.log("helo");
(()=>{
    console.log(1+2)
   })()
*/

//    ((a,b)=>{
// console.log(a+b);
// })
// (20,40);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! for examples
//QN 1)Create a function using the "function" keyword that takes a string as an argument and retuns the number of vowels the string 
// function countVowels(str){
  //  let count =0;
  //  for(const char of str){
    //  if(
      //   char==="a"||
      //   char==="e"||
      //   char==="i"||
//   char==="o"||
//   char==="u")
//   {
//   count++;
//  }
//  }
// console.log(count);
// }
//   countVowels("Ishwor Sharma");

// Qn2)Create an arrow function to perform the same task.
// const countVowel=(str)=>{
//   let count =0;
//  for(const char of str){
//  if(
//   char==="a"||
//   char==="e"||
//   char==="i"||
//   char==="o"||
//   char==="u")
//   {
//   count++;
//  }
//  }
// console.log(count);
// }
// countVowel("Ishwor Sharma");

// yehi  kaam repeat garauna ko lagi chaii loop use garney :::

// forEach Loops in arrays
//  syntax:::::
// arr.forEach(callBackFunction)
// Callback function:::function to execute for each element in the array or it is a function passed as an argument to another function 

// arr.ForEach((val)=>{
//   console.log(val);
//   })

// arr.forEach(val,idx,arr)=>{
//   console.log(val.toUpperCase(),idx,arr);
// });
  
/* qn-1) For a given array of numbers,print the square of each value using forEach loop.*/
// const numbers=[1,2,3,4,5,6,7];

// numbers.forEach((item)=>{
//  console.log(item*item);
// });

//  let sqNumbers= (item) => {
//   console.log( item*item);
//  };
//  numbers.forEach(sqNumbers);

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//Map::creates a new array with the result of some operations.the value ite callback returns are used to form a new array
//arr.map(callbackfunction (value,index,array))

// const numbers=[1,2,3,4,5,6,7];

// let sqNumbers=numbers.map(function (value,index,array) 
//  {
//   return value*value;
//  });

//  console.log(sqNumbers);


 //!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 //filter:: creates a new array with all elements that pass thetrue for a condition /filter


// const numbers=[1,2,3,4,5,6,7];
// let evenNumber=numbers.filter(function(item){
//   return item%2===0;
// });
// console.log(evenNumber);
 

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//reduce::performs some operations and reduces the array to a single value .It  returns that single value.

//Find the total marks of a students given the marks of the students

// marks=[80,60,90,88,99,40];

// let totalMarks=marks.reduce(function(accumulator,item){
//   return accumulator+item;
// },0);
// console.log(totalMarks);

// !!!!!!Lets practise a question 
//qn-1) we are given array of students.Filter out the marks of the students that scored 90+.[87,94,98,86,40,89,91]

// const marks =[87,94,98,86,40,89,91];

// let filteredMarks=marks.filter(function(item){
//   return item>=90;
// });
// console.log(filteredMarks);





  





