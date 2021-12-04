// Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma.  Puedes usar este array para probar tu función:

const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code',
]

function repeatCounter(palabras) {
  let contador = {}
  for (let i = 0; i < palabras.length; i++) {
    //Si no existe la clave en el contador, la creo
    if (contador[palabras[i]] === undefined) {
      contador[palabras[i]] = 1
    }
    //si ya existe, le sumo uno al total que llevo acumlado
    else {
      contador[palabras[i]] += 1
    }
  }

  return contador

  //console.log(`la palabra ${param} se repite ${contador} veces`)
}
console.log(repeatCounter(counterWords))
