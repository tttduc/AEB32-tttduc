/* function name(input){
    //Câu lệnh
}


ar.map((elm)=>{
    console.log(elm);
})   */

let n = 7;
function checkNT(number){
    let NT= true;
    
    for(let i=2; i <n; i++){
        if(number%i===0) 
        NT= false;
    }
    return NT;
}
let res = checkNT(113)
console.log(res);
