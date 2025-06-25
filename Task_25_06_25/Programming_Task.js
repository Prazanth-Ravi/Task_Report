
//1. GST 
let days=3
let charges = 4000

let bill=days*charges
function GST(n){
    if(n>0 && n<=1000){
        return (n)
    }
    else if(n>1000 && n<=7500){
        return (n+(n*0.12))
    }
    else if(n>7500){
        return (n+(n*0.18))
    }
}

let GSTBill=GST(bill)
console.log(`Total amount including GST : ${GSTBill}`);
// ____________________________________________________________________________________________________________

// 2. Fibonacci Series
function Fibb(n){
let a=0
let b=1
for(let i=0; i<=n ; i++){
    console.log(a);
    let c=a+b;
    a=b
    b=c
}
}
Fibb(10)
// ____________________________________________________________________________

// 3. Grade
function Grade(score){
    if (score >= 90 && score <= 100) {
        console.log("Grade: A");
    }
    else if (score >= 80 && score < 90) {
        console.log("Grade: B");
    }
    else if (score >= 70 && score <80) {
        console.log("Grade: C");
    }    
    else if (score >= 60 && score <70) {         
        console.log("Grade: D");
    }
    else if (score <60 ) {
        console.log("Grade: E");
    }
    else{
        console.log("Grade: Invalid score");
    }
}
Grade(68)
// ________________________________________________________________________________
// 4. Numbers and its Factors

function Factors(n) {
    for (let num = 1; num <= n; num++) {
        let fact = [];
        for (let i = 1; i <= num; i++) {
            if (num % i == 0) {
                fact.push(i);
            }
        }
        console.log(`${num}'s factors : ${fact}`);
    }
}
Factors(20)
// ____________________________________________________________________________________

// 5. Leap Year
function LeapYear(a, z) {
    for (let i = a; i <= z; i++) {
        if (i % 4 == 0 && (i % 100 != 0 || i % 400 == 0)) {
            console.log("Leap Year");
        }
        else {
            console.log(i);
        }
    }
}
LeapYear(2000,2050)
// ______________________________________________________________________________________
// 6. SI Calc
let prin = 5000;
let rate = 5;
let time = 3;

function SimpleInterest(P, R, T) {
    let SI = (P * R * T) / 100;
    console.log(`At maturity interest on Rs.${P} for ${T} years at ${R}% interest rate will be Rs.${SI}`);
}
SimpleInterest(prin, rate, time)

// _____________________________________________________________________________________
// 7. Surface Area of a Cylinder
function CylinderArea(r, h) {
    let area = (2*Math.PI*r*r)+(2*Math.PI*r*h);
    console.log(`Surface Area of the Cylinder : ${area.toFixed(2)}`);
}
CylinderArea(5, 10)
// _____________________________________________________________________________________
// 8.Temperature Converter
function Temperature(c) {
    let f = ((9/5)*c) + 32;
    console.log(`${c}°C is equal to ${f}°F`);
}
Temperature(25)
// ___________________________________________________________________________________
// 9.Discount Calculation
function FinalBill(price) {
    let discount = 0;
    if (price < 10000)
        discount = 0.05;
    else if (price >= 10000 && price < 30000)
        discount = 0.10;
    else if (price >= 30000 && price < 60000)
        discount = 0.15;
    else if (price >= 60000)
        discount = 0.20;

    let discountAmount = price * discount;
    let finalAmount = price - discountAmount;

    console.log(`Original Price: ₹${price}`);
    console.log(`Final Bill Amount is Rs.${finalAmount} after discount of Rs.${discountAmount}`);
}
FinalBill(45000)
// _______________________________________________________________________________________
// 10. EB Calculator 
let PriyaUnits = 250;
let RaviUnits =320
let PriyaBill = EB(PriyaUnits)
let RaviBill = EB(RaviUnits)

function EB(units) {
    let bill = 0;
    if (units <= 100) {
        bill = units * 3;
    }
    else if (units <= 200) {
        bill = (100 * 3) + ((units - 100) * 5);
    }
    else if (units <= 300) {
        bill = (100 * 3) + (100 * 5) + ((units - 200) * 7);
    }
    else {
        bill = (100 * 3) + (100 * 5) + (100 * 7) + ((units - 300) * 10);
    }

    return bill;
}

console.log(`Priya's EB Bill for ${PriyaUnits} units: Rs.${PriyaBill}`)
console.log(`Ravi's EB Bill for ${RaviUnits} units: Rs.${RaviBill}`)
// _________________________________________________________________________________________