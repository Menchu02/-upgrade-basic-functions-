// Crea una función que reciba por parámetro un array y cuando es un valor number
//  lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let contador = 0;
    for ( let i = 0; i < param.length ; i++){
        if ( typeof param[i] === "number"){
            contador += param[i]

        }else if ( typeof param[i]=== "string"){

            contador += param[i].length
        }
        
    } return contador
            

}
console.log(averageWord(mixedElements))

    
  
