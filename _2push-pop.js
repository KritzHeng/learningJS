// push

const data = [10, 20, 30, 40];


data.push(50);
console.log(data);

data.pop();
console.log(data);

data.push(50, 60);
console.log(data);



// using with spead operators
const number1 = [1, 2, 3, 4, 5];

const number2 = [6, 7, 8, 9, 10];
// number1.push(number2);
number1.push(...number2);
console.log(number1);



// shift
const number3 = [10, 20, 30, 40];
number3.shift()
console.log(number3);
// unshift
const number4 = [10, 20, 30, 40];
number4.unshift(100)
console.log(number4);



const number5 = [10, 200, 50, 40, 180, 3];
number5.sort();
console.log(number5);

const str = ["S","A","Y","R","B","X"]
str.sort()
console.log(str)