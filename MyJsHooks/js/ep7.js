// EP No 29 higher order funcntion
// for of loop

// for array use for of loop and object use for in loop
const myNarry = [1,2,3,4,5,6,7,8,9];
//console.log(myNarry)
for (const numm of myNarry) {
    //console.log(`my arry name is ${numm}`)
    
}
let greeting = "Hello anand Jadhav sir";
for(const greet of greeting){
   // console.log(`greeting name is ${greet}`)
}

// map
// map method you can set key value pair , its takes only unique KVP not repate or similier value 
//it takes again
const newMap = new Map();
newMap.set('IN','India')
newMap.set('USA','America')
newMap.set('AUS','Austrelia')
newMap.set('EN','Englend')
newMap.set('WI','West Indies')
newMap.set('NE','Nepal')
for(const [country, value] of newMap){ // by taking sequre bracket it destrcutre array
    //console.log(country,'->', value)
    //console.log(country.length)
}

// for in loop

let myobj = {
    js : "Javascript",
    CPP : "C++",
    RB : "Ruby on Rail",
}
for (const myOb in myobj){
  //  console.log(`${myOb} <=> ${myobj[myOb]}`)
}


// forEach 

const coding = ['JS','Ruby','CPP','.Net','Php','JAVA','Node.js','Angular','React.js']

coding.forEach( function myeach(val , index, arryyy){
   // console.log(val, index, arryyy)
})

const myCoding = [
    {
        codingLanguage : "php",
        CodingFile : "phpname.js"
    },
    {
        codingLanguage : "Java",
        CodingFile : "javaname.js"
    },
    {
        codingLanguage : "dotNet",
        CodingFile : "dotNetname.js"
    }
]
myCoding.forEach( (item, index, arr)=> {
    //console.log(arr);
    // console.log(index);
    // console.log(arr);
    if (index == 1){
      //  console.log(item.codingLanguage)
    }
})

// forEach not returun anyhthing value

// ------ EP 30
// filter

const AllNums = [1,2,3,4,5,6,7,8,9,10];
//const myNumbs = AllNums.filter( (num) => num > 5 )
const myNumbs = AllNums.filter(function (num){
    return num > 6
})
//console.log(myNumbs)

const books = [
    {title :'book one', genre : 'science', publish : 1977, edition : 2022},
    {title :'book two', genre : 'history', publish : 1987, edition : 2011},
    {title :'book three', genre : 'geography', publish : 1988, edition : 2012},
    {title :'book four', genre : 'history', publish : 2007, edition : 2016},
    {title :'book five', genre : 'fiction', publish : 2005, edition : 2014},
    {title :'book six', genre : 'science', publish : 1977, edition : 2023},

]
const myBooks = books.filter( function(allbk){
   return allbk.edition <= 2015 && allbk.genre === 'history'
   // console.log(allbk)
})
//console.log(myBooks)

// map
const mynews = [1,2,3,4,5]
const myallnums = mynews.map( (num)=> {
    return num + 10
})
//console.log(myallnums)

// chaning method you can apply multiple method on arry or object;

const newChainMethod = mynews.map( (nums) => nums * 10)
.map((nums) => nums + 1).filter( (nums) => nums > 30);
//console.log(newChainMethod)

// reduce 
const newRdplus = [1,2,3,4,5,];
const newrdTotal = newRdplus.reduce( function(acc, currval){
   // console.log(`acc : ${acc}, curVal : ${currval}`);
    return acc + currval
}, 0)
//console.log(newrdTotal)

const shoppingCart =[
    {
        course : "JS course",
        price : 1200
    },
    {
        course : "Phython course",
        price : 2999
    },
    {
        course : "Ruby rail course",
        price : 1800
    },
    {
        course : "Node JS",
        price : 2700
    },

]
const finalBillCart = shoppingCart.reduce( function(acc, currVal){
    //console.log(`accnnn : ${acc}, currValnnnn ${typeof(currVal.course)}`)
    if(typeof(currVal.price) == "string"){
        console.log("Current value is string please put proper number")
    }
   else{
    console.log("this is number value")
    return acc + currVal.price
   }
    //return 
    //return acc + currVal

}, 0)

console.log(`Final Bill ${finalBillCart}`) 