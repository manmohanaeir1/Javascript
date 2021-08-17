console.log("This is function tutorials");
function greet(name, thank){
    console.log(`Happy Birthday ${name}! 
        I hope you have a wonderful day
        and that the year ahead is full of fun
        and adventure. ${thank} `);
        return 1;
}

let name = "Manmohan";
let name1 = "Harry";
let name2 = "Sarad";
let thank = "Thanks a lot!!";

let val = greet(name1, thank);
console.log(val);  // return value = 1



// return string

function greetA(name){
    let msg = `Happy Birthday ${name}! 
    I hope you have a wonderful day`;
    return msg;
}
let val1 = greetA(name2);
console.log(val1);

// function on variable

const myGreet= function (name){  // way to write function on variable
    let msg = `Happy Birthday ${name}! 
    I hope you have a wonderful day`;
    return msg;
}
let name3 = "Shyam";
let val2 = myGreet(name3);
console.log(val2);

// functon inside  object  

console.log("functon inside  object!");

const myObj = {
    name4 : "Hari",
    game : function(){
        return "GTA";
    }
}
console.log(myObj.game());
console.log(myObj.name4);


// Array and for loop

console.log(" Array and for loop");
myArr = ['Apple', 'Banana', 'Orannge'];

myArr.forEach(function(element, index, array)
 {
    console.log(element,  index);
});

// scope of variable
console.log("scope of variable");
let i= 10;
console.log(i);
function hi(name){
     i = 20;  // block level scope
    console.log(i);
    return `this is ${name}!`;
}
console.log(hi("Manmohan"), i);