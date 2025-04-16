

function Run(resolve){ //2. Run is executed which expects an argument resolve 
    setTimeout(resolve, 10000)  //3. Found the argument and executes setTimeout after 10s
}


const q = new Promise(Run); //1. promise declared with a parameter which is a function called 'Run

function callback(){ //6.found callback executes it
    console.log("promise executed") //6. promise executed is printed after 10s
}


q.then(callback) //. then is something which we get from promise which expects an argument called callback