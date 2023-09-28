// var n = Math.random();
// console.log(n);

// var year = prompt("Enter year");

// if(year % 4 === 0){
//     if (year % 100 ===0){
//         if(year % 400 ===0){
//             console.log("leap year ");

//         }
//         else{
//             console.log("not leap year ");
//         }
//     }else{
//         console.log("leap year ");
//     }

// }else{
//     console.log("Not a leap year");
// }
// var gl = ["ankit","kumar","hello"];
// console.log(gl.includes("ankit"))

// var op = [];
// var a = 1;
// function buzz() {
//     op.push(a);
//     console.log(op);
//     a ++;
    
// }
// var i = 1;
// while(i<10){
//     buzz();
//     i++;
// }

// function fibo(n){
//     if (n===1 || n===2){
//         return n;
//     }
//     else{
//         return fibo(n-1) + fibo(n-2);
//     }
// }

// var n = prompt("Enter a number");


// while(n<=0){
//     console.log(fibo(n));
//     n--;
    
// }
// console.log("volvo " + 16);
// console.log("volvo " + 16+ 4);
// console.log( 4+ 16+"volvo ");
// console.log(123e5);
// console.log(123e-5);



// const person = {
//     firstName : "ankit",
//     lastNamme : "Kumar",
//     age : 20,
//     fullName : function(){
//         return this.firstName+ " " + this.lastNamme;
//     } 
// }
// console.log(person.fullName());


// let text = "abcdefghijklmnopqrstuvwxyz";
// let length = text.length;
// console.log(length);

// var  x  = 12;
// console.log(typeof(x));
// x = new String(x);
// y = "12";
// console.log(typeof(y));
// console.log(x==y);
// console.log(x===y);


// var a = "Ankit kumar";
// var b =a.replace(/ankit/i,"ankit")
// console.log(b);

// let text = "5";
// let padded = text.padStart(3,"x");
// console.log(padded);

// var str = "ankit";
// console.log(str.charCodeAt(0))

// var string = "if you want to work a string as an array you can convert it to an array";
// var arr = string.split(" ");
// console.log(arr);

// let str = "Please locate where 'locate' occurs!";
// str.lastIndexOf("locate");
// console.log(str.lastIndexOf("locate"))

// var fn = "ankit";
// var last = "kumar";
// var text = `welcome ${fn} ,${last}`;
// console.log(text);

// let x = 0.2 +0.1;
// let y = (0.2*10+0.1*10)/10
// console.log(x);

// let x = 10;
// let y = 20;
// let z = "30";
// let result = x + y + z;

// let x = NaN;
// let y = "5";
// let z = x + y;
// console.log(z);

// let x = 9.656;
// console.log(x.toFixed(4));
// console.log(x.toPrecision(2));
// x.toExponential(4);
// x.toExponential(3);


// ----------------------------------------------array--------------------------

// var a = [3,34,54]
// console.log(a[1])



// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 2, "Lemon", "Kiwi");

// console.log(fruits);



// var a = 4;
// switch(a){
//     case 1:
//         console.log("1");
//         break;
//     case 2:
//         console.log("2");
//         break;   
//     case 3:
//         console.log("3");
//         break;
//     default:
//         console.log("");    
// }


// var  cars = ["a","b","c","d","e","f"];
// for (let i =0;i<cars.length;i++){
//     var b = cars[i];
//      console.log(b);
// } 
// for (let i = 0; i < 5; i++) {
//     text += "The number is " + i + "<br>";
//   }


// for (let i = 0; i<11;i++){
//     console.log(i);
// }


// var a = [1,2,3,4,5,6,7,7,87,2];
// for (let key in a){
//     console.log(a[key]);
// }

// const person = {fname:"John", name:"Doe", age:25};

// let text = "";
// for (let x in person) {
//     console.log(x);
//   text = person[x];
//   console.log(text);
// }


// const numbers = [45, 4, 9, 16, 25];

// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value) {
//   txt = value;
//   console.log(txt);
// }

// const cars = ["BMW", "Volvo", "Mini"];

// let text = "";
// for (let x of cars) {
//   text += x;

// }

