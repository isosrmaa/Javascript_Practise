//DOM =Document Object Model.
/*
window->document->html->head/body.
head->meta,tittle,link
body->Div,script
Div->img,h1,p,div,section......
*/

// console.log(window) ;
// console.log(document) ;
// console.log(body) ;

// console.log(document.head);
// console.log(document.body);

//if you want to change the backgroud color of whole html document then how do you change ;

// document.body.style.backgroundColor="red";
// console.log(document.body.style.backgroundColor="red");

//dom manipulation (how to change the  webpage without changes in html and css files)

// console.log(document.body) ;
//!!!!!!!!!!!!!dom manipulation selection!!!!!!!!!!!

// selection with id 

// let heading= document.getElementById("h11");
// console.dir(heading);

// selection with class

// let headings= document.getElementsByClassName("c11");
//  console.dir(headings);

// selection with tag 

// let headings= document.getElementsByTagName("h1");
//  console.dir(headings);


//  let paragraph= document.getElementsByTagName("p");
//   console.dir(paragraph);

//!!!!!!!!!!!!! LEVEL UP QUERY SELECTOR !!!!!!!!
// document.querySelector("my id/my class/tag");-->returns first element
//document.querySelectorAll("my id/myclass/tag");-->returns a NodeList 

// let e =document.querySelector("p");
// console.dir(e);

// let eAll =document.querySelectorAll("p");
// console.dir(eAll);

// if class is used then use .
// if id is used then use #

// let idd = document.querySelector("#h11");
// console.dir(idd);
// let cls = document.querySelector(".c11");
// console.dir(cls);

// (dir-> object ko lagi )

// let child = document.querySelector("div").children;
// console.dir(child);//it shows h3,p

// let child = document.querySelector("div").children[1];
// console.dir(child);// only p

// let child = document.querySelector("div").children[0];
// console.dir(child);// only h3


// !!!!!!!!!!!!!!!!DOM MANIPULATION PROPERTIES!!!!!!!!!!
/* tagNAME :tag ko name dekhauxa
 innerText : html tag bhitra ko items dekhauxa
 innerHTML : html tag sangaii dekhaii dinxa
 textContent :innerText le html tag bhitra ko items dekhauxa vane yesle luke ra baseko item pani dekhauxa 
 */

/**specific h4 laii access garnu paryo vane yesto garney 
 let idd = document.querySelector("div");
 let h4E = idd.document.querySelector("h4");
  console.dir(h4E);
  */


//  let idd = document.querySelector("div").innerText;
//  console.dir(idd);//Gives hello guyes,Fruits ,apple, banana,orange.

//  let idd = document.querySelector("div").innerHTML;
//  console.dir(idd);// <h4>hello guyes</h4> ,<ul> Fruits <li>apple</li><li>banana</li><li>orange</li></ul>

        
//  let idd = document.querySelector("div").textContent
//   console.dir(idd);///.lukeko items pani dekhaii dinxa



//qn)-->add h1 tag in html document names "old heading" and make it "new heading"

// let heading = document.querySelector("h1").innerText="New Heading";
// console.dir(heading); 

//!!!!!!!!!!!if you want to make it bold then,,,,,,,
// let heading = document.querySelector("h1");
// heading.innerHTML="<b>New Heading<b>";   //if you want to make ait bolds
// console.dir(heading); 

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!PRACTISE QUESTION !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//QN1)CREATE A H2 HAEDING ELEMENT WITH TEXT -"HELLO JAVASCRIPT !".APPEND "MADE IT MODIFIED BY ISHWOR SHARMA "TO THIS TEXT USING JS 
// let heading = document.querySelector("h2");
// heading.innerHTML += "Made it modified by Ishwor Sharma";
// console.dir(heading);

//qn)CREATE 3 DIVS WITH COMMON CLASS NAME -"BOX".ACCESS THEM & ADD SOME UNIQUE TEXT TO EACH OF THEM

// let divs = document.querySelectorAll(".box");
// divs[0].textContent = "Div-1";
// divs[1].textContent = "Div-2";
// divs[2].textContent = "Div-3";
// console.dir(divs);

//              or using for loop

//  let divs = document.querySelectorAll(".box");
//  let idx=1;
//  for (div of divs) {
//     div.textContent = `THIS IS Div-${idx}`;
//     idx++;
//  }








