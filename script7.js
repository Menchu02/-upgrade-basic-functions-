// Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento,
// en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:

const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc',
]

function finderName(listaNombres, nombre) {
  for (let i = 0; i < listaNombres.length; i++) {
    if (nombre == listaNombres[i]) {
      return [true, i]
    }
  }
  return false
}

console.log(finderName(nameFinder, 'Bruce'))
