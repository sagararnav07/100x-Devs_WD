//ye promise ka notes me mil jaega dekh lo --> basic promise syntax
//Promise ek class hai aur uske andar resolve ek function hai aur yesab predefined hai

const doAsyncTask = (resolve) => { //2nd Step
    setTimeout(resolve, 3000); //Hume kya async task karna h ek "setTimeout" hi to chahiye to hum ek parameter rakhenege "resolve" aur vo first variable hi setTimeout accest kar paega
}

//here promise is just a proxy to the above function
const setTimeoutPromisified = () => { //1st step
    return new Promise(doAsyncTask);  //2nd step ab hume pata h promise ke andar jo first argument h use hume ek function "doAsyncTask" banake dena h 
}

const p = setTimeoutPromisified() //3rd step ab hum us function ko jo promise contain karta h ek variable me kaid karenege taaki ispe baaki ke operations kiye jaa sake

const callback = () => {
    console.log("Promise is completed") //5th step: promise agar resolve hua h to ye print karde baat khatam kar
}

p.then(callback) //4rth step : Har promise ".then()" aur ."catch()" return karta h agar promise resolve hua to .then me daaldo aage kya karna h callback daalke aur nhi hua to cathch me daaldo


//Kabhi socha h agar hum "Promise" ke jagah sirf "promise" likh de to vo ek aam variable ban jaega aur kuch return nhi karega




//fromisified readfile

const making = () => {
    fs.readFile("./Week -2/Callback Hell/user.txt", "utf-8", function(err, data){
        if (err) {
            console.error("Error reading file:", err);
        } else {
            console.log("File content:", data);
        }
    });
    
}

//resolve is a function not a boolean
const readingFilUsingAsync = () => {
    return new Promise((resolve)=>{
         resolve(`file is found`)
    })
}

readingFilUsingAsync().then(making)