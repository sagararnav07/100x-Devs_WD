//create a promisified version of fs.readFile, fs.writeFile, cleanFile


//it's running like a loop
const fs = require('fs');

const asyncReadFile = (resolve) => {


    const content = "I am Full stackBackend Developer" //3rd step
    fs.writeFile("./w-2Promises/user.txt", content,"utf-8", function(err,data){
        if(err) throw err;
        console.log("file overwritten")
    })


    fs.readFile("./w-2Promises/user.txt","utf-8", function(err,data){ //4rth step
        if(err) throw err
        setTimeout(() => {console.log(data)},3000)
       
    })
    
    setTimeout(resolve, 5000) //2nd step
}


const readFile = () => {
    return new Promise(asyncReadFile) //1st step
}


const p = readFile() //5th step

const callback = () => { //7th step
    console.log("Readfile Completed")
}


p.then(callback) //6thh 


