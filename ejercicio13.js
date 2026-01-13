/* Crea una función que, dada una lista de actores con su año de nacimiento, calcule su edad actual y retorne un nuevo array con los nombres de los actores y sus edades.

Averigua como hallar el año actual en tus cálculos. */

const actors = [
  { name: 'Leonardo DiCaprio', born: 1974 },
  { name: 'Tom Hanks', born: 1956 },
  { name: 'Meryl Streep', born: 1949 },
  { name: 'Brad Pitt', born: 1963 },
  { name: 'Johnny Depp', born: 1963 },
  { name: 'Scarlett Johansson', born: 1984 },
  { name: 'Jennifer Lawrence', born: 1990 },
  { name: 'Denzel Washington', born: 1954 },
  { name: 'Morgan Freeman', born: 1937 },
  { name: 'Cate Blanchett', born: 1969 }
];

function calculateActorsAges(actors) {
  // insert code

  const actorsAges = [];
  const hoy = new Date();
  const actualYear = hoy.getFullYear();

  for (const actor of actors) {
    actorsAges.push({actor: actor.name, edad: actualYear - actor.born});
    
  }
  return actorsAges;
}

console.log(calculateActorsAges(actors));


//Estos ejercicios casi me vuelan un ojo
//***CORRECCIÓN Esto no era nada los de después si que son fuego