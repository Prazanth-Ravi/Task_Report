//1. find the sum of even numbers

function sumEvenNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) { 
            sum += numbers[i];
        } 
        // else {
        //     sum += numbers[i]; ----> Else block not neccessary
        // }
    }
    return sum;
}

console.log(sumEvenNumbers([1, 2, 3, 4, 5])); 


//2. find the factorial

function factorial(n) {
    let result = 1;
    // for (let i = 1; i <= n; i--) { --->  increment not decrement
    for(let i = 1; i <= n; i++){
        result *= i;
    }
    return result;
}

console.log(factorial(5));

// 2 Task:Check Prime Number 
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) {
            return false;
        }
        //  else {
        //     return true; --->else block not needed
        // }
    }
    return true;
}

console.log(isPrime(9)); // Expected: false



//4. Task: Remove Duplicates from Array
function removeDuplicates(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) { // i <= arr.length--> condition false
        if (!result.includes(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;      // result to be returned.. not arr
}

console.log(removeDuplicates([1, 2, 2, 3])); // Expected: [1, 2, 3]



//5. Task: Reverse an Array (Logical Error)

function reverseArray(arr) {
    let a
    for (let i = 0; i < arr.length / 2 ; i++) {
        a=arr[i]
        arr[i] = arr[arr.length - 1 - i];       // ---> value of arr[i] is not swapped with arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] =a
        
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5, 6, 7, 8])); // Expected: [5, 4, 3, 2, 1], but incorrect result

//6. Task: Find the Largest Number (Logical Error)
Description: This function should return the largest number from an array


function findLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {         // ---> comparison operator < has been used intead of >
            largest = arr[i];
        }
    }
    return largest;
}

console.log(findLargest([3, 7, 2, 9, 5, 51])); // Expected output: 9, but incorrect result


//7.find the count of vowels

function countVowels(str) {
    let vowels = "aeiou";
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i].toLowerCase())) count++;     // case check
    }
    return count;
}

console.log(countVowels("HellO World")); // Expected: 3, but returns 2

//8.  Function to fetch user data from an API
async function fetchUserData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users');
        let data = await response.json();  //
        console.log(data.name); 
    } catch(error) {
        console.error('Error fetching data:', error);
    }
}

fetchUserData();


//9.   Function to validate a simple form

function validateForm(username, age) {
    if (username == "") {               //--> asignment oper used instead of comparison
        console.log("Username is required");
        return false;
    }
    
    if (age < 18 || age > 60) {                //----> && used instead of ||
        console.log("Age must be between 18 and 60");
        return false;
    }
    
    return true;
}

validateForm("", 25);


//10.  find the missing number in an array

function findMissingNumber(arr, n) {
    let expectedSum = (n * (n + 1)) / 2;
    let actualSum = 0;
    for (let num of arr) {
        actualSum += num;        
    }
    return expectedSum - actualSum;                // ----> Diff to be returned
}                                               // ---> closing braces missed
console.log(findMissingNumber([1, 2, 4, 5, 6], 6));  // Expected: 3, but incorrect result



//11. Task: Merge Two Sorted Arrays (Logical Error)

function mergeSortedArrays(arr1, arr2) {
    let merged = [];
    let i = 0, j = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;                        // j incremented instead of i
        } else {
            merged.push(arr2[j]);
            j++;                        // i incremented instead of j
        }
    }

    while (i < arr1.length) merged.push(arr1[i++]);
    while (j < arr2.length) merged.push(arr2[j++]);

    return merged;
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6])); 

// Expected: [1, 2, 3, 4, 5, 6], but incorrect result


// 12 Task:Find Maximum Number (Logical Error) 
function findMax(arr) {
    let max = arr[0];                       // negative values in array.. so initializing with 1st array element
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(findMax([-3, -2, -1])); // Expected: -1




//13. Task: Find the Intersection of Two Arrays (Logical Error)

function findIntersection(arr1, arr2) {
    let intersection = [];
    for (let num of arr1) {
        if (arr2.includes(num)) {
            intersection.push(num);  //-----> arr1[num] given.. num represents the element not index
        }
    }
    return intersection;
}

console.log(findIntersection([1, 2, 3, 4], [3, 4, 5, 6])); 
// Expected: [3, 4], but incorrect result


//14. Display Current Date

function getFormattedDate() {
    let date = new Date();
    let day = date.getDate(); 
    let month = date.getMonth() + 1; 
    let year = date.getFullYear() ; 

    return `${day}/${month}/${year}`;  
}

console.log(getFormattedDate());

//15. Convert Marks to Grades
//des :The function should return grades based on marks.

function getGrade(marks) {
    switch (false) {
        case marks >= 90 && marks<=100: return "A";
        case marks >= 80 && marks<90: return "B";
        case marks >= 70 && marks<80: return "C";
        case marks >= 60 && marks<70: return "D";
        case marks >= 50 && marks<60: return "E";
        case marks < 50: return "F";
        default: return "Invalid marks";
    }
}

console.log(getGrade(80));  // comparison oper changed from > to >= and added a condition using &&..
