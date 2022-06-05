// ลด(reduce)ข้อมูลสมาชิกใน array

// ส่ง array เข้ามา
// แต่จะได้ค่าๆนึงกลับมา

// array.reduce((ค่าที่ถูกประมวลผล, e)=>{},ค่าเริ่มต้น)
// value = 0

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const f = data.reduce((value,e)=>e+value,0)
// const f = data.reduce((value, e)=>{
//     // value = 1 3 6 10 15 21 28 36 45 55
//     const total = e+value;
//     return total
// },0 )
// // value = 0
console.log(f)

const cart = [

    {name:"book",price:120},
    {name:"bag",price:500},
    {name:"pencil",price:15},
    {name:"eraser",price:30},
    {name:"ruler",price:10}

]

const total = cart.reduce((value,e)=>e.price+value,0)
// const total = cart.reduce((value,e)=>{
//     const t = e.price+value
//     return t

// }, 0)

console.log(total)





// oop key 








