

 function waitFor3s(resolve){
    setTimeout(resolve,10000)
 }

 const setTimeoutPromisified = () => {
    return new Promise(waitFor3s)   //supposed to return you eventually
 }

 function main(){
    console.log("main is called");
    
 }
//.then() -> jabbhi promise complete hoga mujhme kuch daal do jisko mai execute kar dunga
 setTimeoutPromisified().then(main) //promised based approac output "main is called"

 setTimeout(main,3000) //callback based approach 
    
 /*logic:- agar setTimeoutPromisified() ke parameter me koi fuction exist karta hai 
 *joki karta h waitFor3d* to mai us parameter ka 1st parameter ko call karunga, ab usme setTimeout(resolve, 30000)
 exist karta hai to agar vaisa h to mai usko execute krunga aur .then me print kar dunga*/

function random(){

}

let p = new Promise(random)
console.log(p) //output Promise{<pending>}

/*logic : Promise is executed but is not able to complete as there is paramater in promise called random
which is an empty function  */
