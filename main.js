const prompt = require('prompt-sync')();


let base = +prompt('Qual será a base dessa exponenciação? ');
let aux=+base
let pot = aux

let expoente = +prompt('E o expoente? ');

for(i=1;i<expoente;i++){
    
    for(j=1;j<pot;j++){
    base +=aux
    }
    aux=base
}
console.log(base);