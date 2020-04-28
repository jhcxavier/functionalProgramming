const countDown = x =>{
    if(x < 0) return;
    console.log(x)
    countDown(x-1)
}
// console.log(countDown(10))

const countUp = (x, max)=>{
    if(x > max)return;
    console.log(x)
    countUp(x + 1, max)
}
console.log(countUp(0, 10))