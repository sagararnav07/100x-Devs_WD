
const setTimeoutPromisified = (duration) => {
    return new Promise(function (resolve){ //this is an anonymous function refer to anonymousFunctions.md for more info
       setTimeout(resolve,duration)
    })

    
}

function callback(){
    console.log("2 second has passed")
}

setTimeoutPromisified(1000).then(callback)

//-----------------------------------------------------------------------------

function callback()
{
    console.log('hi')
}

//calback hell :- when multiple asynchronous operations are nested
setTimeout(function(){ //these are async operations
    console.log("high")
         setTimeout(() =>{
            console.log("hello")
               setTimeout(() =>{
                 console.log("What the hell are you doing")
               },1000)
            },1000)
        },1000)

console.log("outside of callback hell") //synchronou operation

//---------Answer to callback he is promises as shown above in 1st example but not compoletly------------

//for eg.





function promiseHell(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration)
        console.log("this is how promise does no solve the problem of callback hell")
    })
}

//promise chaining
promiseHell(1000).then(function(){
    console.log("task-1") 
    promiseHell(1000).then(function(){
        console.log("task-2")
        promiseHell(1000).then(function(){
            console.log("task-3")  
        })
    }) 
})

//better syntax

promiseHell(2000).then(function(){
    console.log("better task 2")
    return promiseHell(2000)
}).then(function(){
    console.log("better task 3")
    return promiseHell(2000)
}).then(function(){
    console.log("better task 4")
    return promiseHell(2000)
})


//even better syntax -> use async /await as it performs async fucntions but looks sychronous and 
//note: async await also use promises in backend "just hower over it it will show promise <void>"


async function solve(){
    await promiseHell(2000)
    console.log("Async")

    await promiseHell(3000)
    console.log("Await")

    await promiseHell(4000)
    console.log("Syntax")
}

solve().then 