// conversions

let newNumber = 66;
let newString = String(newNumber);
// console.log(newString);
// console.log(typeof newString);

let myString = "Anand";
let myNumber = Number(myString);
// console.log(typeof myNumber);
// console.log(myNumber);
// boolean conversion

// ep 7  -- operations
let str1 = "Anand"
let str2 = "15";
let str3 = 15;
//console.log(Number(str2) + str3)

// ep 11
const getName = new String("amjanand");
const getAname = "amjanand";

// console.log(getName[0]);
// console.log(getAname[0]);

let myUrl = "https://amj.com/jadhav madhukar 12 "
// console.log(myUrl.replaceAll(' ','-'));
// console.log(myUrl.repeat(2));

// Ep 12 Numbers and maths

const hundreds = 1000000000;
// console.log(hundreds.toLocaleString());

// console.log(Math.abs(-6));
// console.log(Math.round(56.7546));

// EP 13 Dates and Times
 
let MyDate = new Date();
//console.log(MyDate.toDateString());
//console.log(MyDate.toLocaleDateString());

MyDate.toLocaleString('default',{
    //weekday:'long',
    //dateStyle:'short',
    year:'2-digit',
});
//console.log(MyDate) 
//console.log(` my date is ${MyDate}mentioned starting`);

// EP 14 Array
 const myArry = ['anand', 4, 6,'jadhav','lord','shriram',false];
 //myArry.pop()

//  const sliceMyarray = myArry.slice(1,3);
//  console.log('myArray - ', myArry);
//  console.log('sliceMyarray - ', sliceMyarray);

//  const spliceMyarray = myArry.splice(1,3);
//  console.log('myArray - ', myArry);
//  console.log('spliceMyarray - ', spliceMyarray);


// EP 15 array 2

const nameArray = ['anand','madhukar','jadhav']
const youNameArray = ['kavita','suryakant','kate']
// use flat method you convert one array from one inside multiple array see below ex.
const multipleArray = [1,2,4 , ['anand','jadhav',33, 66],'love', ['baby','india'],['world cup',66 ,100]]
const flatArray = multipleArray.flat(Infinity)

// console.log(multipleArray)
// console.log(flatArray)

const maximum = [22,44,55,66,77,88,90]
//console.log(Math.min(...maximum));
const maxValueObj = [{
    valueMe : 12,
    valueMe : 24,
    valueMe : 36,
    valueMe : 77
}]

let maxObjNow = maxValueObj.reduce( (acc, curVal) =>{
    console.log(curVal)
    //return acc.valueMe > curVal.valueMe ? acc : curVal 
}

)
//console.log(maxObjNow)

// EP 17 Object 2

const SignUser = {
    fullName : "Anand Jadhav",
    email : "amj@gmail.com",
    phone : 989899988,
    country : "India",
    isLogedIn : false,
    familyPerson : 8,
    birthPlace : "Nagar",
    sisterFamily:{
        fullName : "Madhuri Kamat",
        address : "Viva Sarovar pune",
        phone : 888888898898,
        country : "india"
    }
}
const otherUser ={
    name : "vishal",
    lastname : "kadam"
}
//console.log(SignUser.sisterFamily)

// Ep 19 functions

function calculatePrice(...num1){ // this is called rest operator three dots
    let total = 0;
    for (const args of num1){
        //console.log('args', args)
        //console.log('num1', num1)

        total += args;
    }
    return total
}
//console.log(calculatePrice(10, 12, 16 ,18) )

const myNewsArray = [12, 44, 66, 88];
function arrayFunc(getarry){
    return getarry[6]
}  
//console.log(arrayFunc(myNewsArray));

// EP 21 Scopes

// EP 22 scope level mini hosting
function one (){
let userN = "Anand";
userN = "ram";
    function two(){
        const userNameTwo = "Vishal"
        //console.log(`userN, ${userN}`) // here you can access parent variable inside child scope
        //console.log(`userTwo - ${userNameTwo}`)
    }
    two();

   // console.log(`userTwo - ${userNameTwo}`) // here you can not access child out his scope

}
one();


// EP 23 arrow function

const india = (a) =>{
    // myTotal = 0;
    // for (const myarg of a){
    //     myTotal += myarg
    // }
    // return myTotal;
    let myoldName = "Shiramm";
    console.log(myoldName)
    let myObj = {
        name : "Anand",
        lastName : "jadhav",
        phone :99999,
        
    }
    
}

//india();

// EP 24 IIFE

( function country(){ // this is named IIFE
   // console.log("DB connected one")

})();

( ()=>{
   // console.log("DB connected two") // simple IIFI
}) ();

( (val)=>{
    //console.log(`DB connected three ${val}`)
}) ("Anand");

// EP 25 

// EP 26 control flow in javascript

if(2 !== 3){
    //console.log(`correctt answer`)
}
else{
    //console.log(`wronge answer`)
}

const userLogedIn = true;
const debitCard = true;
const isEmailLogin = false;
const isGmailLogin = true;
if(userLogedIn && debitCard && 9<=5){
    //.log(`Allow user`)
}
else{
   // console.log(`Not allow user`)
}

if (isEmailLogin || isGmailLogin){ // && both constion must be true , //|| any of one condition true execute
   // console.log(`any email login enter`)
}
else{
   // console.log(`not not any email login enter`)
}

// Switch

// const month = 6;
// switch (month) {
//     case 1:
//         console.log(`january`)
//         break;
//     case 2:
//         console.log(`FEb`)
//         break;
//     case 3:
//         console.log(`March`)
//         break;
//     case 4:
//         console.log(`April`)
//         break;
//     case 5:
//         console.log(`May`)
//         break;

//     default:
//         console.log("default ")
//         break;
// }


// Nullish coalescing operator (??)
//let val1;
//val1 = null ?? 10;
//console.log(val1);

// ternairy operator

//const iceTea = 88;
//iceTea >= 55 ? console.log("greater price "): console.log("lesser prices")

// EP 27 for loop with break continue

// for(i = 1; i <= 20; i++){
//     if (i == 8){
//         console.log(`i find 8 so breaked`)
//         break
//     }
//     console.log(`value of i is ${i}`)
// }

// EP 28 do while loop

// let myArryes = ['Anand','Vishal','Rajesh','Deespak','Kabir','Jayraj','Indra','Tiger'];
// let myIndex = 0;
// while(myIndex < myArryes.length){
//     console.log(`my name is ${myArryes[myIndex]}`)
//     myIndex = myIndex + 1
// }

// let myNewscore = 11; // take 11
// do {
//     console.log(`score is ${myNewscore}`);
//     myNewscore ++
// } while( myNewscore <= 10)

