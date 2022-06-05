
// // Dictionary object in array format
const op1 = [
    {"BNB_USDT" : {
        token1: "BNB",
        token2: "USDT"}
    },
    {  
        "BTC_USDT" :{
            token1: "BTC",
            token2: "USDT"}
   
        } 
        
    ]
const size = Object.keys(op1).length;
console.log(size)
const objectsDict = {}
// show All Dictionary object in array format
const fTest = op1.map((e, index)=>{
    // console.log(index)
    
    // console.log(e)
    // console.log(op[index])
    // { BNB_USDT: { token1: 'BNB', token2: 'USDT' } }
    // ---- op[index] === e  ,same -----
    
    // Object.values(op[index])[0].token1
    
    // console.log(Object.values(e))
    // ------ result -------
    // [ { token1: 'BNB', token2: 'USDT' } ]
    
    // console.log(Object.values(e)[0])
    // ------ result -------
    // { token1: 'BNB', token2: 'USDT' }
    
    // get token
    // console.log(Object.values(e)[0].token1, Object.values(e)[0].token2)

    objectsDict[Object.keys(e)[0]] = Object.values(e)[0]
}
)
console.log("Dictionary object: ",objectsDict)
//  ------result-----
// objectsDict = {
//     BNB_USDT: { token1: 'BNB', token2: 'USDT' },
//     BTC_USDT: { token1: 'BTC', token2: 'USDT' }
//  }

// ---------- example ----------
// var objects = {};
// for (var x = 0; x < 10; x++) {
//   objects[x] = {name: 12};
// }
// console.log(objects)



// -------------------------------------------------------------------
console.log("----------------------------------------------------------------")


// Dictionary object in object format

const op2 = {
    "BNB_USDT" : {
        token1: "BNB",
        token2: "USDT"}
    ,
    
        "BTC_USDT" :{
            token1: "BTC",
            token2: "USDT"}
        
    }
console.log(Object.keys(op2).length)

// show all keys in object format
// console.log(Object.keys(op2))


// console.log(op2["BNB_USDT"].token1)

// console.log(op2["BNB_USDT"])


// get and show values in all ob (loop with map()) with key

// Object.keys(op2).map(function(key, index) {
//     console.log(op[key])
// });

//  ------result-----
// { token1: 'BNB', token2: 'USDT' }
// { token1: 'BTC', token2: 'USDT' }




// get and return values of all ob ,then assign to a variable with key

const arrayDict = Object.keys(op2).map((key, index)=>{
    return( op2[key] );
});
console.log("Dictionary array: ",arrayDict)
//   ------result-----
//  arrayDict = 
//  [
//      { token1: 'BNB', token2: 'USDT' },
//      { token1: 'BTC', token2: 'USDT' }
//  ]

// console.log(arrayDict[0])

// -------------------------------------------------------------------
console.log("----------------------------------------------------------------")


// https://stackoverflow.com/questions/14810506/map-function-for-objects-instead-of-arrays
// var myObject = { 'a': 1, 'b': 2, 'c': 3 };

// Object.keys(myObject).map(function(key, index) {
//     console.log(myObject[key])
//   myObject[key] *= 2;
// });

// console.log(myObject);
// // => { 'a': 2, 'b': 4, 'c': 6 }