let y : number= 20;
const y : number = 30; //Error 1



const w : number = 100;
w = 100; //Error3

if(true){
    break; //Error 4
}

while(true){
    return; //Error 5
}

switch(1){
    case 1:
        continue; //Error 6
}


let recuperacion : number = 100; //ME recuero en este ;


function retorno(a : number) : number{
    return "Hola mundo"; //Retorno incorrecto
}

function retorno2(a : number) : number{
    return a;
}



retorno(); //Faltan parametros

/******************/
let arreglo : number[] = [1,2,3];
arreglo[0] = "hola"; //Error 7

if(true){
    let noexistoafuera:number = 100; 
}
console.log(noexistoafuera); //Error 8

let tipo1 : string = "hola";
tipo1 = 100; //Error 9

let tipo2 : number = "Hola"; //Error 10

