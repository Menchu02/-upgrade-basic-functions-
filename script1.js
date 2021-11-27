//Completa la función que tomando dos números como argumento devuelva el más alto.

function sum(numberOne , numberTwo) {
    if ( numberOne > numberTwo){
        
        console.log(`${numberOne} es más alto`);
        return numberOne;
    }else {
        console.log(`${numberTwo} es más alto`);
        return numberTwo;
    }
}
sum(111,10);

