const numeros = [9, 5, 8, 6, 44, 3, 5, 95, 25, 65]
const usandoFilter = numeros.filter(valor => valor % 2 === 0).map(valor => valor * 2)
usandoFilter.reduce() //retornando uma arrow function
console.log(usandoFilter)