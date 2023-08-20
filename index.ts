//Exercise 1:  Write a program that calculates the area of a rectangle.
// area of Rectangle = width * length;
var width:number = 5;
var length:number =10;
var areaOfRectangle:number = width * length;
console.log("Area of Rectangle", areaOfRectangle);
//Exercise 2: Write a program that takes input and calculates the volume of a cube
// volume of cube = a**3
var area:number = 4;
var volume:number = area**3;
console.log("Volume of Cube =", volume)
//Exercise 3:  Write a program that checks if a given number is positive, negative, or zero.
// if a number > zero ans is positve, numbe < zero ans is negative, number is equal to zero than ans is zero

var num1:number = 5;
if(num1>0){
    console.log("Number is Positive")
}
if(num1<0){
    console.log("Number is Negative");
}
if(num1 == 0){
    console.log("Number is Zero")
}
//Exercise 4:   Write a program that checks if a given number is even or odd.
// when a number is divided on "2" is called even.
// when a number is divided by "1" and himself is called odd.
var num1:number = 3;
//var result:number = 10 % 2
if( num1 %2 == 0){
    console.log("EVEN");
}
else{
    console.log("Number is odd")
}
//Write a program that determines if a person is eligible to vote based on their age.

var age:number = 22;
if(age >= 18){
    console.log("eligible for Vote")
}
else{
    console.log("Not eligible for Vote");

}
//Write a program that calculates the result of a mathematical expression.	((10 + 5) * 3 - 2) / (4 % 3)  - 7)

var result:number = ((10 + 5) * 3 - 2) / (4 % 3)  - 7
console.log(result);