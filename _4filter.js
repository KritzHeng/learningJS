const number = [1 , 2, 3, 4, 5]

const result = number.filter(e=>{
    return e>3
})

console.log(result)


const data = [
    {name:"kris", salary:20000,department:"tester"},
    {name:"boy", salary:20000,department:"tester"},
    {name:"yoyo", salary:15000,department:"programmer"},
    {name:"poom", salary:15000,department:"programmer"},
    {name:"nut", salary:40000,department:"SA"},
    {name:"nut", salary:80000,department:"PM"}
]
const f = data.filter(e=>{
    return e.department === "programmer"})
console.log(f)