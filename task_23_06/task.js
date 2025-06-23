//1.  Count the number of even and odd numbers in an array
// Iterate over an array and count how many numbers are even and how many are odd, then print both counts.

// arr=[1, 2, 3, 4, 5, 6, 7, 8, 9]
// let odd=0
// let even=0
// for (let  i= 0; i < arr.length; i++) {
//     if(arr[i]%2==0){
//         even++
//     }
//     else if(arr[i]%2!=0) {
//         odd++
//     }
// }
// console.log("There are", even, "even numbers and", odd, "odd numbers in the given array");
// ___________________________________________________________________________________________________________

//2.  Reverse an array without using built-in reverse method
// Write logic to reverse the order of elements in an array manually using a loop.

// let b=[]
// for(let i=arr.length-1, j=0; i>=0 ; i--, j++){
//     b[j]=arr[i]
// }
// console.log(b);
// _____________________________________________________________________________________________________________

//  Print names of students who scored more than 80
// Create an array of student objects with name and marks. Use a loop to find and print names of students whose marks are above 80.

// let student=[{name:'Steve', mark:85}, {name:'Henry', mark:86}, {name:'Heisenberg', mark:80}, {name:'Eren', mark:95}, {name:'Zeke', mark:70}, {name:'Marco', mark:60}]
// for(let i=0; i<student.length; i++){
//     if(student[i].mark>=80)
//     console.log(student[i].name);
// }
// ______________________________________________________________________________________________________________

//  Calculate sum, average, min, and max from an array of numbers
// Write a function that accepts an array and returns an object containing the total sum, average, smallest number, and largest number.

// let array=[1, 2, 3, 4, 5, 6, 7, 8, 9]

// function operation(arr){
//     let sum=0
//     let min=arr[0]
//     let max=arr[0]
//     for(let i=0; i<arr.length ; i++){
//         sum=sum+arr[i]
//         if(arr[i]<=min)
//             min=arr[i]
//         if(arr[i]>=max)
//             max=arr[i]
//     }
//     let avg=sum/arr.length;
//     return{
//         total:sum,
//         average:avg,
//         minimum:min,
//         maximum:max        
//     };
// }
// let res=operation(array)
// console.log(res);

// _________________________________________________________________________________________________________________

//  Check if a given string is a palindrome
// Write a program that checks if a word or phrase reads the same backward as forward.

// let str="Markram"
// let pali=str.split("").reverse().join("");
// if(str.toLowerCase() == pali.toLowerCase())
//     console.log(str, "is a Palindrome");
// else
//     console.log(str, "is not a Palindrome");
// ____________________________________________________________________________________________________________________


//  Separate even and odd numbers into an object
// Given an array of numbers, create an object with two properties: even and odd. Each should be an array containing the respective numbers.

// let array=[1, 2, 3, 4, 5, 6, 7, 8, 9]

// function OddEven(arr){
//     let even=[]
//     let odd=[]
//     for (let i=0; i<arr.length ; i++) {
//         if (arr[i] % 2 === 0) {
//             even.push(arr[i]);
//         } else {
//             odd.push(arr[i]);
//         }
//     }
//     return{
//         even:even,
//         odd:odd
//     }
// }

// console.log(OddEven(array));
