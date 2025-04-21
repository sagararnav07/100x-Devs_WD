const { rejects } = require('assert');
const fs = require('fs')
// //Async Await --> cleaner code using both promise and async await

// const promiseHell  = (duration) => {
//     return new Promise(function(resolve){
//         setTimeout(resolve,duration)
//     })
// }

// //looks synchronous but not synchronous 
// async function solve(){
//     await promiseHell(2000)
//     console.log("Async")

//     await promiseHell(3000)
//     console.log("Await")

//     await promiseHell(4000)
//     console.log("Syntax")
// }

// solve().then(()=>{console.log("Hi there")})

function readAsyncFile(){
    return new Promise(function(resolve,reject){
        fs.readFile("./Week -2/Callback Hell/user.txt", "utf-8", (err, data) => {
                if (err) {
                    reject("file not found");
                } else {
                    resolve(data);
                }
            })
    })
}

readAsyncFile().then(function(x){
    console.log("file has been read",x)
}).catch(function(e){
    console.log(e);
})