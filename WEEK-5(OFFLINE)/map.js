//Q given an array give me back a new array in which every value is multipleid by 2


const arr = [1,5,1,3,7,9,4];


const multipledByTwo = ()=>{
    return arr.map((a) => a * 2)
    .filter((a)=> a + 2 > 10)
}

const result = multipledByTwo()
console.log(result)