const fs = require('fs')

//infinite loop

const recursiveFunction = () => {

    fs.readFile('./w-2Promises/user.txt' , 'utf-8', (err,data) =>{
        if(err) throw new err
        console.log(data);
    })

    setTimeout(recursiveFunction,2000);
}

setTimeout(recursiveFunction,2000);